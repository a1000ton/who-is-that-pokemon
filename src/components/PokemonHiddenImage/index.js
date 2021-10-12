import React from "react";
import { imgUrl } from "./constants";
import styled from "styled-components";
import backgroundImage from "../../assets/background.png";

const PokemonHiddenImage = ({ pokemonId }) => {
  const BlankImage = styled.div`
    width: 960px;
    height: 540px;
    position: absolute;
    opacity: 100%;
    z-index: 2;
  `;

  const PokemonImage = styled.img`
    filter: brightness(0);
    position: absolute;
    z-index: 1;
  `;

  const BackgroundImage = styled.img`
    width: 960px;
    height: 540px;
    position: absolute;
  `;

  const getPokemonUrl = (number) => {
    const urlPokemonNumber = ("00" + number).slice(-3);
    return `${imgUrl}/${urlPokemonNumber}.png`;
  };

  return (
    <div style={{ height: "540px" }}>
      <BlankImage />
      <PokemonImage src={getPokemonUrl(pokemonId)} />
      <BackgroundImage src={backgroundImage} />
    </div>
  );
};

export default PokemonHiddenImage;
