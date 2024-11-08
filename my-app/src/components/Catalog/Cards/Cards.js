// Cards.js

import React, { useContext } from "react";
import Card from "../Card/Card";
import { ItemContext } from "../ItemPage/context/ItemContext";
import "./Cards.css";

const Cards = () => {
  const { items, searchText, selectedGenre, selectedRelease, selectedArtist } =
    useContext(ItemContext);

  const filteredItems = items.filter(
    (item) =>
      (searchText === "" ||
        item.artist.toLowerCase().includes(searchText.toLowerCase()) ||
        item.genre.toLowerCase().includes(searchText.toLowerCase())) &&
      (selectedGenre === "" || item.genre === selectedGenre) &&
      (selectedRelease === "" || item.releaseDate.includes(selectedRelease)) &&
      (selectedArtist === "" || item.artist.includes(selectedArtist))
  );

  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div className="col" key={item.id}>
              <Card {...item} />
            </div>
          ))
        ) : (
          <div className="no-results d-flex justify-content-center align-items-center">
            <h2>No Results Found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
