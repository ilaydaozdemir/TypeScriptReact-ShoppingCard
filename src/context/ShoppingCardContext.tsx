import { ReactNode, createContext, useContext, useState } from "react";
type ShoppingCardProviderProps = {
  children: ReactNode;
};
type CardItem = {
  id: number;
  quantity: number;
};
type ShoppingCardContext = {
  openCart: () => void;
  closeCart: () => void;
  getItem: (id: number) => number;
  increaseCart: (id: number) => void;
  decreaseCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CardItem[];
};
const ShoppingCardContext = createContext({} as ShoppingCardContext);
export function useShoppingCard() {
  return useContext(ShoppingCardContext);
}

export function ShoppingCardProvider({ children }: ShoppingCardProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CardItem[]>([]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  function getItem(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCart(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCart(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity == 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id: number) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }
  return (
    <ShoppingCardContext.Provider
      value={{
        getItem,
        increaseCart,
        decreaseCart,
        removeFromCart,
        cartQuantity,
        cartItems,
        openCart,
        closeCart,
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
}
