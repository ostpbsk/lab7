import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section text-white py-5">
      <div className="container text-center hero-content">
        <h1 className="display-4 animated-heading">Discover & Own the Music You Love</h1>
        <p className="lead mt-3 animated-subtext">
          Welcome to VibeWave, your go-to platform for exclusive music clips from artists around the world. Find your favorite tracks, support the artists, and own high-quality music at the best prices.
        </p>
        <div className="mt-4">
          <button className="btn btn-dark btn-lg me-3 animated-button">Browse Music Clips</button>
          <button className="btn btn-outline-light btn-lg animated-button">Become a Member</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
