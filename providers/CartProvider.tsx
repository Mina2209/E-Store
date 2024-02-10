"use client";

import { CartContextProvider } from "@/hooks/useCart";

interface CartProductType {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProductType> = ({ children }) => {
  return (
    <div>
      <CartContextProvider>{children}</CartContextProvider>
    </div>
  );
};

export default CartProvider;
