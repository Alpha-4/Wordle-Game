import React, { useEffect, useState } from "react";
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from "../../constants";
import Popup from "./Popup";

function GameDisplay({ guess, answer, setRestart }) {
  const [allGuess, setAllGuess] = useState([]);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    if (guess.trim() === "") return;
    if (guess === answer || allGuess.length >= NUM_OF_GUESSES_ALLOWED - 1)
      setEnd(true);
    const lst = [...allGuess, guess];
    setAllGuess(lst);
  }, [guess]);

  const emptyGrid = () => {
    const grid = [];
    for (let i = allGuess.length; i < NUM_OF_GUESSES_ALLOWED; i++) {
      const row = [];
      for (let j = 0; j < WORD_LENGTH; j++) {
        const key = `${i}-${j}`;
        row.push(<span className="cell" key={key}></span>);
      }
      // Each row is wrapped in a <p> element
      grid.push(
        <p className="guess" key={i}>
          {row}
        </p>
      );
    }
    return grid;
  };

  const calStyleClass = (word, index) => {
    //choices --> "cell correct" : "cell misplaced" :"cell incorrect"
    if (answer[index] === word[index]) return "cell correct";
    else if (answer.includes(word[index])) return "cell misplaced";
    else return "cell incorrect";
  };

  //handle game round end
  const handleComplete = () => {
    setAllGuess([]);
    setEnd(false);
    setRestart(true);
  };

  return (
    <div className="guess-results">
      {
        //render based on size
        allGuess.length === 0
          ? emptyGrid()
          : allGuess.map((element, index) => {
              return (
                <p className="guess" key={index}>
                  {element.split("").map((char, posn) => {
                    return (
                      <span
                        className={calStyleClass(element, posn)}
                        key={index + posn}
                      >
                        {char}
                      </span>
                    );
                  })}
                </p>
              );
            })
      }
      {
        //remaining empty grids to render
        allGuess.length !== 0 ? emptyGrid() : null
      }
      {
        // check if end
        end ? <Popup guess={allGuess.length} onClose={handleComplete} /> : null
      }
    </div>
  );
}

export default GameDisplay;
