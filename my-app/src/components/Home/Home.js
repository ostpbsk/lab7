import React from 'react';
import Hero from './Hero/Hero';
import Cards from './Cards/Cards';
import FeaturedSection from './FeaturedSection/FeaturedSection';
import Footer from './Footer/Footer';

function Home() {
  return (
    <div>
      <Hero />
      <Cards />
      <FeaturedSection />
      <Footer />
    </div>
  );
}

export default Home;