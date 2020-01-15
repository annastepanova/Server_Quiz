import React from 'react';


const Result = ({score, correctAnswer, playAgain}) => {
    const answers = correctAnswer.map(answer => <li>{answer}</li>);
    return (
    <div className="score-board">
      <div className="score">You scored {score} correct answers!</div>
      <ul>{answers}</ul>
    <button className="play-btn" onClick={playAgain}>Play again!</button>
    </div>
    )

} 

export default Result