import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartList = useSelector((state) => state.cartList);
  const totalAmount = useSelector((state) => state.totalAmount);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartList.map((item, index) => (
        <div key={index}>
          <p>{item.name} - ${item.price}</p>
        </div>
      ))}
      <p>Total Amount: ${totalAmount}</p>
      <Link to="/payment">Proceed to Payment</Link>
    </div>
  );
}

export default Cart;


