import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContaxt";
import cartremove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { cartItems, all_products, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-formate-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e, i) => {
        if (cartItems[e.id] > 0) {
          return (
            <div id={e.id} key={i}>
              <div className="cartitems-formate">
                <img src={e.image} alt="" />
                <p>{e.name}</p>
                <p> INR{e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>INR{e.new_price * cartItems.id}</p>
                <img
                  className="cartitems-remove-icon"
                  onClick={()=> removeFromCart(e.id)}
                  src={cartremove_icon}
                  alt=""
                />
              </div>
            </div>
          );
        }else{
          return null;
        }
      })}
      <div className="cartitms-down">
        <div className="cartitems-total">
          <h1>Cat Total</h1>
          <div>
            <div className="cartitems-totl-item">
              <p>SubTotal</p>
              <p>0</p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItems;