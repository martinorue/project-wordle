import React from 'react';
import { range } from '../../utils';

function Guess({ guesses }) {
  const guessesArrayLetters = guesses.map(guess => guess.split(''));
  console.log({guessesArrayLetters})
  return(
  <div className="guess-results">
  {range(0,5).map(index =>
    <p className="guess" key={index}>
      {guesses.map((g, i) => g.split('').forEach((l, i) => <span className="cell">{l[i]}</span>))}
      {/* <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span> */}
    </p>
    )}
  </div>)
}

export default Guess;
