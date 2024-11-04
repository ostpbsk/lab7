import React from 'react';
import './Navbar.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import Catalog from '../Catalog/Catalog';
import Home from '../Home/Home';

const Navbar = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">VibeWave</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink 
                  to="/" 
                  className="nav-link custom-nav-link" 
                  end
                >
                  Home
                </NavLink> 
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/catalog" 
                  className="nav-link custom-nav-link"
                >
                  Catalog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/cart" 
                  className="nav-link custom-nav-link"
                >
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

function Cart() {
  return <h2>Cart</h2>;
}

export default Navbar;
