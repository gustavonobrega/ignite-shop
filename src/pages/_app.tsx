import { AppProps } from "next/app"
import { Header } from "../components/Header";

import { CartContextProvider } from "../contexts/CartContext";
import { globalStyles } from "../styles/global"
import { Container} from "../styles/pages/app";



globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartContextProvider>
        <Header />
        
        <Component {...pageProps} />
      </CartContextProvider>
    </Container>
  )
}

export default App
