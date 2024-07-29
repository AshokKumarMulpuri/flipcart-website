import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './header.css';

const Header = () => {
  const cartList = useSelector((state) => state.cartList);

  return (
    <>
    <div id="header">
      <h1>FlipCart</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cart">Cart: <span>{cartList.length}</span></NavLink>
      </div>
    
    </>
  );
}

export default Header;
