import React, { createContext, useState } from "react";
import all_products from "../Componants/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    // console.log(cartItems);
  };
  const removeFromCart = (iteId) => {
    setCartItems((prev) => ({ ...prev, [iteId]: prev[iteId] - 1 }));
  };

  const totalCartIem = () => {
    let totalCartItem = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalCartItem += cartItems[item];
      }
    }
    return totalCartItem;
  };

  const gettotalCartAmount = () => {
    let totalCartAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let cartinfo = all_products.find((product) => product.id === +item);
        totalCartAmount += cartinfo.new_price * cartItems[+item];
      }
    }
    return totalCartAmount;
  };

  const contextValue = {
    totalCartIem,
    gettotalCartAmount,
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
