import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import Guess from '../Guess/Guess';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])
  
  function handleSubmit(guess) {
    setGuesses([...guesses, guess]);
  }

  return( 
  <>
    <Guess guesses={guesses} answer={answer} />
    <GuessInput handleSubmit={handleSubmit} />
    {guesses.length  > 5 && <Banner result={result} />}
  </>
  );
}

export default Game;
