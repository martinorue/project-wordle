import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState(''); 
  
  function handleSetGuess(event) {
    const nextGuess = event.target.value;
    setGuess(nextGuess.toUpperCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess })
    setGuess('');
  }

  return( 
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        pattern="[A-Za-z]{5}"
        maxLength={5}
        required
        id="guess-input" 
        type="text" 
        value={guess} 
        onChange={handleSetGuess}
      />
    </form>
    );
}

export default GuessInput;
