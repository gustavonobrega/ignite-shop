import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import Image from 'next/future/image';
import { X } from 'phosphor-react';
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';

import { CloseButton, Content, CartItem, ImageContainer, ConfirmOrder } from "./styles"

export function Cart() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => {
      const price = item.price.slice(3)
      const formattedPrice = parseFloat(price.replace(',', '.'))

      return acc += formattedPrice
  }, 0)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post('/api/checkout',{
        cart
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {

      setIsCreatingCheckoutSession(false);

      alert('Falha ao redirecionar ao checkout');
    }
  }

  return (
    <Dialog.Portal>
      <Content>

        <CloseButton>
          <X size={24} weight="bold"/>
        </CloseButton>

        <Dialog.Title>
          Sacola de compras
        </Dialog.Title>

        <ul>
          {cart.map(product => (
            <CartItem key={product.id}>
              <ImageContainer>
                <Image src={product.imageUrl} width={95} height={95} alt="" />
              </ImageContainer>
          
              <div>
                <p>{product.name}</p>
                <span>{product.price}</span>
                <button type='button' onClick={() => removeFromCart(product.id)} >Remover</button>
              </div>
            </CartItem>
          ))}
        </ul>

        <ConfirmOrder>
          <div>
            <span>Quantidade</span>
            <span>{cart.length} itens</span>
          </div>
          <div>
            <strong>Valor total</strong>
            <strong>{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(total)}
            </strong>
          </div>

          <button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession || cart.length <= 0}>Finalizar compra</button>
        </ConfirmOrder>
      </Content>
    </Dialog.Portal>
  )
}