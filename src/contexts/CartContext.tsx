import { createContext, ReactNode, useEffect, useState } from "react";

interface CartContextProviderProps {
  children: ReactNode;
}

 interface CartContextData {}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) { 

  return (
    <CartContext.Provider value={{  }} >
      {children}
    </CartContext.Provider>
   )
}