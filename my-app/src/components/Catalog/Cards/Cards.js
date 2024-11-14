

import React from 'react';
import Card from '../Card/Card';
import './Cards.css';

const sampleData = [
  {
    id: 1,
    image: 'https://i.scdn.co/image/ab67616d0000b27350d216aebaf98e8ac9947fd5',
    genre: 'Metal',
    artist: 'Korn - All in the family',
    releaseDate: '1998',
    price: 15.99,
  },
  {
    id: 2,
    image: 'https://i.scdn.co/image/ab67616d0000b273f1ad059f340b79a88f85ae64',
    genre: 'Pop',
    artist: 'White Town - Your Woman',
    releaseDate: '1997',
    price: 7.99,
  },
  {
    id: 3,
    image: 'https://i.scdn.co/image/ab67616d0000b27368fcc49ba28db7131e60fa66',
    genre: 'Indie',
    artist: 'Mitski - Drunk Walk Home',
    releaseDate: '2014',
    price: 15.99,
  },
  {
    id: 4,
    image: 'https://i.scdn.co/image/ab67616d0000b27329eb9ad9b9af34bbb54eb053',
    genre: 'Indie',
    artist: 'Mitski - I bet on losing dogs',
    releaseDate: '2016',
    price: 420.99,
  },
  {
    id: 5,
    image: 'https://i.scdn.co/image/ab67616d0000b27386339e6cd71cc2a167451ee5',
    genre: 'Rock',
    artist: 'The Door - People are strange',
    releaseDate: '1967',
    price: 420.99,
  },
  {
    id: 6,
    image: 'https://i.scdn.co/image/ab67616d0000b2738cb690f962092fd44bbe2bf4',
    genre: 'Rock',
    artist: 'Muse - Hysteria',
    releaseDate: '2003',
    price: 420.99,
  }
];

const Cards = () => {
  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {sampleData.map((item) => (
          <div className="col" key={item.id}>
            <Card {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
