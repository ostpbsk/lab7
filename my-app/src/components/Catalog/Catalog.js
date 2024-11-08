import React from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Topbar/Topbar";
import Cards from "./Cards/Cards";
import Footer from "../Home/Footer/Footer";
import ItemPage from "./ItemPage/ItemPage";
import { ItemProvider } from "./ItemPage/context/ItemContext";
import "../Catalog/Catalog.css";

const Catalog = () => {
  return (
    <div className="catalog-container">
      <ItemProvider>
        <Topbar />
        <div className="catalog-header">
          <h1 className="catalog-title">Browse Available Music</h1>
          <div className="catalog-divider"></div>
        </div>
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="item/:itemId" element={<ItemPage />} />{" "}
          {/* Adjusted path */}
        </Routes>
      </ItemProvider>
      <Footer />
    </div>
  );
};

export default Catalog;
