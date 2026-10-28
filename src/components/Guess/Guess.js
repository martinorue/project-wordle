import React from 'react';
import { range } from '../../utils';

function Guess({ guesses }) {
  const guessesArrayLetters = guesses.map(guess => guess.split(''));
  
  return(
   
   <div className="guess-results">
   {range(0,6).map(index =>
     <p className="guess" key={index}>
      {range(0,5).map((item,i) => 
      <span className="cell" key={i}>
        {guessesArrayLetters[index] && guessesArrayLetters[index][i]}
      </span>)}
     </p>
     )}
  </div>
)
}

export default Guess;
