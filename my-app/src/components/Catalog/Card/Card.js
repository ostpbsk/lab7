// src/components/Catalog/Card.js

import React from 'react';
import './Card.css';

const Card = ({ image, genre, artist, releaseDate, price }) => {
  return (
    <div className="card catalog-card bg-dark text-light">
      <img src={image} className="card-img-top catalog-card-img" alt={`${artist} cover`} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{artist}</h5>
        <p className="card-text catalog-text">
          <strong>Genre:</strong> {genre}
        </p>
        <p className="card-text catalog-text">
          <strong>Release:</strong> {releaseDate}
        </p>
        <p className="card-text price">
          <strong>Price:</strong> ${price}
        </p>
        <button className="btn btn-dark mt-auto">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
