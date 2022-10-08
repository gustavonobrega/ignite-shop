import Image from 'next/future/image';
import { Handbag } from 'phosphor-react';
import { useContext } from 'react';

import logoImg from '../../assets/logo.svg';
import { CartContext } from '../../contexts/CartContext';
import { HeaderContainer, CartButton } from './styles';

export function Header() {
  const { cart } = useContext(CartContext);

  return (
    <HeaderContainer>
      <Image src={logoImg} alt=""/>

      <CartButton>
        {cart.length >= 1 && <span>{cart.length}</span>}
        <Handbag size={24} weight="bold"/>
      </CartButton>
  </HeaderContainer>
  )
}