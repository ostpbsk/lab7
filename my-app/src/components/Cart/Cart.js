import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cart.css";
import Footer from "../Home/Footer/Footer";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Korn - All In The Family", price: 15.99, quantity: 1 },
    {
      id: 2,
      name: "Mitski - I Bet On Losing Dogs",
      price: 420.99,
      quantity: 2,
    },
    { id: 3, name: "Korn - Clown", price: 420.99, quantity: 1 },
  ]);

  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + amount, 1) }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return Math.ceil(
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    );
  };

  return (
    <div className="cart-page d-flex flex-column align-items-center">
      <div className="cart-container shadow p-4 mt-4 mb-4 bg-white rounded animate__animated animate__fadeInUp">
        <h2 className="text-center mb-4">Your Cart</h2>
        <ul className="list-group">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
            />
          ))}
        </ul>
        <div className="cart-total text-end mt-4">
          <h4>Total: ${calculateTotal()}</h4>
        </div>
        <button className="btn btn-success w-100 mt-3">Buy Now</button>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
