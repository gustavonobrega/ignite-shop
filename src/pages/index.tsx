import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/future/image'
import { useKeenSlider } from 'keen-slider/react'
import Stripe from 'stripe';
import Link from 'next/link';

import { stripe } from '../lib/stripe';
import { HomeContainer, Product,  } from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import { Handbag } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';


interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    defaultPriceId: string;
  }[]
}


export default function Home({ products }: HomeProps) {
  const { addToCart } = useContext(CartContext);
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <>
      <Head>
        <title>Home - Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Product className="keen-slider__slide" key={product.id} >
              <Link href={`/product/${product.id}`} prefetch={false} >
                <Image src={product.imageUrl} width={520} height={480} alt="" />
              </Link>
                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>

                  <button type='button' >
                    <Handbag size={32} weight="bold" onClick={() => addToCart(product)}  />
                  </button>
                </footer>
            </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    
    return { 
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100),
      defaultPriceId: price.id,
    }
  })
  
  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
