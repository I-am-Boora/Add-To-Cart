import React from "react";
import { useSelector } from "react-redux";
// import '../custom.css'
import { AiFillShopping } from "react-icons/ai";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Cart from "../component/Cart";
const Navbar = () => {
  const result = useSelector((state) => state.cartData.length);
 
  return (
    <div className="navbar">
      <Link to="/cart">
        
        <AiFillShopping className="cart-icon" />
        <div className="cart-counter">
          <span>{result}</span>
        </div>
      </Link>
      <Link to ='/'>Home</Link>
      
    </div>
  );
};

export default Navbar;
