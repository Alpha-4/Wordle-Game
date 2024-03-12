import React, { useState, useEffect } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";

function Game() {
  const [ans, setAns] = useState(sample(WORDS));
  const [restart, setRestart] = useState(false);

  useEffect(() => {
    if (!restart) return;
    // Pick a random word on every pageload.
    const answer = sample(WORDS);
    // To make debugging easier, we'll log the solution in the console.
    setAns(answer);
    setRestart(false);
  }, [restart]);

  if (!restart) console.info({ ans });

  return (
    <>
      <GuessInput answer={ans} setRestart={setRestart} />
    </>
  );
}

export default Game;
