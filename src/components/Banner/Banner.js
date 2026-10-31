import React from 'react';

const happyBanner = 
(<div className="happy banner">
  <p>
    <strong>Congratulations!</strong> Got it in
    <strong>3 guesses</strong>.
  </p>
</div>)

const sadBanner = 
(
  <div className="sad banner">
    <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
  </div>
)



function Banner({ result }) {
  return <div>banner</div>;
}

export default Banner;
