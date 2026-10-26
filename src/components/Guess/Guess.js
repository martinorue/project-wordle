import React from 'react';
import { range } from '../../utils';

function Guess() {
  
  const grid = range(1,6).map(column =>
    <p className="guess">
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
    </p>
    )
  return grid;
}

export default Guess;
