import Image from 'next/future/image'

import { HomeContainer, Product,  } from '../styles/pages/home'

import camiseta1 from '../assets/camisetas/Shirt.png'
import camiseta2 from '../assets/camisetas/Shirt-1.png'
import camiseta3 from '../assets/camisetas/Shirt-2.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} width={520} height={480} alt="" />
      
        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta2} width={520} height={480} alt="" />
      
        <footer>
          <strong>Camiseta 2</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta3} width={520} height={480} alt="" />
      
        <footer>
          <strong>Camiseta 2</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
