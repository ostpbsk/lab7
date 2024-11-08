import React from "react";
import "./CartItem.css";

const CartItem = ({ item, updateQuantity }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="cart-item-details">
        <span className="fw-bold">{item.name}</span>
        <span className="text-muted">${item.price}</span>
      </div>
      <div className="cart-item-quantity d-flex align-items-center">
        <button
          className="btn btn-dark btn-sm me-2"
          onClick={() => updateQuantity(item.id, -1)}
        >
          -
        </button>
        <span className="quantity-text">{item.quantity}</span>
        <button
          className="btn btn-dark btn-sm ms-2"
          onClick={() => updateQuantity(item.id, 1)}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
