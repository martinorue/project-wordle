import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';


function Guess({ guesses, answer }) {
  const guessesArrayLetters = guesses.map(guess => guess.split(''));
  //${checkGuess(guesses[i])}
  return(
   <div className="guess-results">
   {range(0, NUM_OF_GUESSES_ALLOWED).map(index =>
     <p className="guess" key={index}>
      {range(0, 5).map((item,i) => 
      <span className={`cell ${checkGuess(guesses[index], answer)}`} key={i}>
        {guessesArrayLetters[index] && guessesArrayLetters[index][i]}
      </span>)}
     </p>
     )}
  </div>
)
}

export default Guess;
