import Image from 'next/future/image';
import * as Dialog from '@radix-ui/react-dialog';
import { useRouter } from 'next/router';
import { Handbag } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import logoImg from '../../assets/logo.svg';
import { HeaderContainer, CartButton } from './styles';
import { Cart } from '../Cart';

export function Header() {
  const { pathname } = useRouter();
  const { cart } = useContext(CartContext);

  const showCartButton = pathname !== '/success';

  return (
    <HeaderContainer>
      <Image src={logoImg} alt=""/>

      {showCartButton && (
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <CartButton>
              {cart.length >= 1 && <span>{cart.length}</span>}
              <Handbag size={24} weight="bold"/>
            </CartButton>
          </Dialog.Trigger>

          <Cart />
        </Dialog.Root>
      )}
    </HeaderContainer>
  )
}