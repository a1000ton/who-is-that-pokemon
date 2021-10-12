import React, { useEffect, useState } from "react";

const GuessName = ({ name, onAnswer }) => {
  const [inputName, setInputName] = useState("");
  const [answerOnCheck, setAnswerOnCheck] = useState(false);

  useEffect(() => {
    setInputName("");
    setAnswerOnCheck(false);
  }, [name]);

  const checkAnswer = () => {
    setAnswerOnCheck(true);
    return onAnswer(inputName.toLowerCase() === name);
  };

  const buttonDisabled = !inputName || answerOnCheck;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        checkAnswer();
      }}
    >
      <input
        type="text"
        value={inputName}
        autoFocus
        onChange={(e) => setInputName(e.target.value)}
      />
      <span>Number of letters: {name?.length || 0}</span>
      <button disabled={buttonDisabled} type="submit">
        Guess!
      </button>
    </form>
  );
};

export default GuessName;
