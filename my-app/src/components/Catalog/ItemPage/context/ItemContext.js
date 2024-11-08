import React, { createContext, useState } from "react";

export const ItemContext = createContext();

const sampleData = [
  {
    id: 1,
    image: "https://i.scdn.co/image/ab67616d0000b27350d216aebaf98e8ac9947fd5",
    genre: "Metal",
    artist: "Korn - All in the family",
    releaseDate: "1998",
    price: 15.99,
  },
  {
    id: 2,
    image: "https://i.scdn.co/image/ab67616d0000b273ea5c6ae7cde0e306c58a5e41",
    genre: "Alternative",
    artist: "MSI - Prescription",
    releaseDate: "1997",
    price: 7.99,
  },
  {
    id: 3,
    image: "https://i.scdn.co/image/ab67616d0000b27368fcc49ba28db7131e60fa66",
    genre: "Indie",
    artist: "Mitski - Drunk Walk Home",
    releaseDate: "2014",
    price: 15.99,
  },
  {
    id: 4,
    image: "https://i.scdn.co/image/ab67616d0000b27329eb9ad9b9af34bbb54eb053",
    genre: "Indie",
    artist: "Mitski - I Bet On Losing Dogs",
    releaseDate: "2016",
    price: 420.99,
  },
  {
    id: 5,
    image: "https://i.scdn.co/image/ab67616d0000b27386bddc6359ffef0f9c51e56e",
    genre: "Alternative",
    artist: "MSI - Stupid MF",
    releaseDate: "1999",
    price: 420.99,
  },
  {
    id: 6,
    image: "https://i.scdn.co/image/ab67616d0000b2738cb690f962092fd44bbe2bf4",
    genre: "Rock",
    artist: "Muse - Hysteria",
    releaseDate: "2003",
    price: 420.99,
  },
  {
    id: 7,
    image: "https://i.scdn.co/image/ab67616d0000b2737153b1cf6ee990c2a9fa46cc",
    genre: "Metal",
    artist: "Korn - Clown",
    releaseDate: "1994",
    price: 420.99,
  },
  {
    id: 8,
    image: "https://i.scdn.co/image/ab67616d0000b2731c229cb7c9851fb0c67e2af8",
    genre: "Metal",
    artist: "Korn - Make Me Bad",
    releaseDate: "1999",
    price: 420.99,
  },
];

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState(sampleData);
  const [searchText, setSearchText] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedRelease, setSelectedRelease] = useState("");
  const [selectedArtist, setSelectedArtist] = useState("");

  return (
    <ItemContext.Provider
      value={{
        items,
        setItems,
        searchText,
        setSearchText,
        selectedGenre,
        setSelectedGenre,
        selectedRelease,
        setSelectedRelease,
        selectedArtist,
        setSelectedArtist,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
