import React, { useState } from 'react'

const QuestionBox = ({ question, options }) => {
  const [answer, setAnswer] = useState(options)

  return (
    <div className="question-box">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button key={index} className="answer-btn"
        onClick={() => setAnswer([text])}
        >{text}</button>

      ))}
    </div>
  )
}

export default QuestionBox 
