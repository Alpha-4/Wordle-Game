import React, { useState } from "react";
import GameDisplay from "./GameDisplay";

function GuessInput({ answer, setRestart }) {
  const [guess, setGuess] = useState("");
  const [pass, setPass] = useState("");
  const onSubmit = (e) => {
    //prevent form submit behavior
    e.preventDefault();

    //check for input length
    if (guess.trim().length !== 5) {
      alert("Please enter string of length 5. ;)");
      return;
    }

    //clear input
    setGuess("");
    setPass(guess);
  };

  const onChange = (e) => {
    const input = e.target.value.toUpperCase().replace(/[^a-zA-Z]/g, "");
    setGuess(input);
  };

  return (
    <>
      {<GameDisplay guess={pass} answer={answer} setRestart={setRestart} />}
      <form className="guess-input-wrapper" onSubmit={onSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" type="text" onChange={onChange} value={guess} />
      </form>
    </>
  );
}

export default GuessInput;
