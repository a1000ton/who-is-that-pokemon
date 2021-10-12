import React, { useEffect, useState } from "react";

const GuessName = ({ name }) => {
  const [inputName, setInputName] = useState("");

  useEffect(() => {
    setInputName("");
  }, [name]);

  const CheckAnswer = () => {
    if (inputName === name) alert("acertou!");
    else alert("errou??");
  };

  return (
    <>
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <span>Number of letters: {name?.length || 0}</span>
      <button onClick={() => CheckAnswer()}>Guess!</button>
    </>
  );
};

export default GuessName;
