/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// CartPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cart }) => {
  return (
    <div>
      <h1>Cart Page</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((cartItem) => (
            <div key={cartItem.id}>
              <p>{cartItem.title}</p>
            </div>
          ))}
          <Link to="/">Go back to Products</Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
