import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContaxt";
import cartremove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const {gettotalCartAmount, cartItems, all_products, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cards-lists">
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
                <img src={e.image} alt=""className="cartitems-product-item" />
                <p>{e.name}</p>
                <p> ₹ {e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>₹ {e.new_price * cartItems[e.id]}</p>
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
      </div>
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cat Total</h1>
          <div>
            <div className="cartitems-totl-item">
              <p>SubTotal</p>
              <p>₹ {gettotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-totl-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-totl-item">
              <p><strong>Total</strong></p>
              <p>₹ {gettotalCartAmount()}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo cade, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo Code"/>
            <button>Submite</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItems;