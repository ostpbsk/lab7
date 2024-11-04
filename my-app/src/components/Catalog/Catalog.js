import React from 'react';
import './Catalog.css'; // Optional: Add a CSS file for Catalog-specific styles
import Topbar from './Topbar/Topbar';
import Cards from './Cards/Cards';
import Footer from '../Home/Footer/Footer';

const Catalog = () => {
  return (
    <div className="catalog-container">
      <Topbar />
      <div className="catalog-header">
        <h1 className="catalog-title">Browse Available Music</h1>
        <div className="catalog-divider"></div>
      </div>
      <Cards />
      <Footer />
    </div>
  );
};

export default Catalog;