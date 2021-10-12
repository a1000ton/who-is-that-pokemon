import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonHiddenImage from "../PokemonImage";
import GuessName from "../GuessName";

const PokemonQuiz = () => {
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonName, setPokemonName] = useState("");

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 500 + 1);
  };

  const getPokemonInfo = async () => {
    setIsHidden(true);
    const pokemonId = getRandomNumber();
    setPokemonId(pokemonId);
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    const { forms } = data;
    const { name } = forms[0];

    setPokemonName(name);
  };

  const handleAnswer = (answer) => {
    const points = answer ? 10 : -5;
    setScore(score + points);
    setAnswer(answer ? "You got it right!" : "You miss :(");
    setIsHidden(false);
  };

  useEffect(() => {
    getPokemonInfo();
  }, []);

  return (
    <div>
      <PokemonHiddenImage pokemonId={pokemonId} isHidden={isHidden} />
      <br />
      <GuessName
        name={pokemonName}
        onAnswer={(answer) => handleAnswer(answer)}
      />
      <br />
      {!isHidden && (
        <div>
          {answer} <br />
          {`The pokémon is: ${pokemonName}`}
          <br />
          <button onClick={() => getPokemonInfo()}>Ok!</button>
        </div>
      )}
      Your points: {score}
    </div>
  );
};

export default PokemonQuiz;
