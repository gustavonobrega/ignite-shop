import Image from 'next/future/image';
import { useRouter } from 'next/router';
import { Handbag } from 'phosphor-react';
import { useContext } from 'react';

import logoImg from '../../assets/logo.svg';
import { CartContext } from '../../contexts/CartContext';
import { HeaderContainer, CartButton } from './styles';

export function Header() {
  const { pathname } = useRouter();
  const { cart } = useContext(CartContext);

  const showCartButton = pathname !== '/success';

  return (
    <HeaderContainer>
      <Image src={logoImg} alt=""/>

      {showCartButton && (
        <CartButton>
          {cart.length >= 1 && <span>{cart.length}</span>}
          <Handbag size={24} weight="bold"/>
        </CartButton>
      )}
    </HeaderContainer>
  )
}