import React from "react";
import Hero from "../Componants/Hero/Hero";
import Popular from "../Componants/Popular/Popular";
import Offers from "../Componants/Offers/Offers";
import NewCollections from "../Componants/NewCollections/NewCollections";
import NewsLetter from "../Componants/NewsLetter/NewsLetter";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};
export default Shop;
