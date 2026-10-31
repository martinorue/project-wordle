import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';


function Guess({ guesses, answer }) {
  const guessesArrayLetters = guesses.map(guess => guess.split(''));
  let status = [];
  console.log(status)
  return(
   <div className="guess-results">
   {range(0, NUM_OF_GUESSES_ALLOWED).map((_,index) =>
     <p className="guess" key={index}>
      {range(0, 5).map((_,i) =>
        {status = guesses[index] ? checkGuess(guesses[index], answer)[i].status : 'cell';
        return (
          <span className={status ? `cell ${status}` : 'cell'} key={i}>
            {guessesArrayLetters[index] && guessesArrayLetters[index][i]}
          </span>
        )
        }
      )}
     </p>
     )}
  </div>
)
}

export default Guess;
