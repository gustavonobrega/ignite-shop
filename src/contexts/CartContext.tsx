import { createContext, ReactNode, useEffect, useState } from "react";

interface CartContextProviderProps {
  children: ReactNode;
}

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  defaultPriceId: string;
}

 interface CartContextData {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
 }

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) { 
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(product: Product) {
    setCart(state => [...state, product])
  }

  function removeFromCart(productId: string) {
    setCart(state => state.filter(product => product.id !== productId));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }} >
      {children}
    </CartContext.Provider>
   )
}