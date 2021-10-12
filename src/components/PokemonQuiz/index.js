import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonHiddenImage from "../PokemonHiddenImage";
import GuessName from "../GuessName";

const PokemonQuiz = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonName, setPokemonName] = useState("");

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 151 + 1);
  };

  const getPokemonInfo = async () => {
    const pokemonId = getRandomNumber();
    setPokemonId(pokemonId);
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    const { forms } = data;
    const { name } = forms[0];

    setPokemonName(name);
  };

  useEffect(() => {
    getPokemonInfo();
  }, []);

  return (
    <div>
      <PokemonHiddenImage pokemonId={pokemonId} />
      <br />
      <GuessName name={pokemonName} />
      <br />
      <button onClick={() => getPokemonInfo()}>Recarregar</button>
    </div>
  );
};

export default PokemonQuiz;
