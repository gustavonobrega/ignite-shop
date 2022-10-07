import { AppProps } from "next/app"
import Image from 'next/future/image'

import { CartContextProvider } from "../contexts/CartContext";
import { globalStyles } from "../styles/global"
import logoImg from '../assets/logo.svg';
import { Container, Header } from "../styles/pages/app";


globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartContextProvider>
        <Header>
          <Image src={logoImg} alt=""/>
        </Header>
        
        <Component {...pageProps} />
      </CartContextProvider>
    </Container>
  )
}

export default App
