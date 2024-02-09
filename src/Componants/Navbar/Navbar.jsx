import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContaxt";
import dropdown_menu from '../Assets/drop_down.jpeg'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {totalCartIem} = useContext(ShopContext)

  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    console.log(menuRef);
    e.target.classList.toggle('open')
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Shopper logo" />
        <p>SHOPPER</p>
      </div>
      <img onClick={dropdown_toggle} className="nav-dropdown" src={dropdown_menu} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to={"/"}>
            Shop
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to={"/mens"}>
            Mens
          </Link>{" "}
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to={"/womens"}>
            Womens
          </Link>{" "}
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to={"/kids"}>
            Kids
          </Link>{" "}
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to={"/login"}>
          <button> Login</button>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/cart"}>
          <img src={cart_icon} alt="cart icon" />
        </Link>
        <div className="nav-cart-count">{totalCartIem()}</div>
      </div>
    </div>
  );
};
export default Navbar;
