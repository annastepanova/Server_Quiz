import React, {Component} from 'react'
import quizService from "./quizService"
import QuestionBox from "./QuestionBox"
import Result from "./Result"
import './App.css'

class App extends Component {

  state = {
    questionBank: [],
    score: 0,
    responses: 0,
    correctAnswer: []
  }

  getQuestions = () => {
    quizService().then(question => {
      this.setState({
        questionBank: question
      })
    })

  }

  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({score: this.state.score + 1})
      this.setState({ correctAnswer: [...this.state.correctAnswer, answer] })
    }
    this.setState({responses: this.state.responses < 5 ? this.state.responses + 1 : 5})
  }

  playAgain = () => {
    this.getQuestions()
    this.setState({score: 0, responses: 0})
    this.setState({ correctAnswer: [] })
  }

  componentDidMount() {
    this.getQuestions()
  }

  render() {
    return (
      <div className="container">
        <div className="title">ServerQuiz</div>
        {this.state.questionBank.length > 0 && this.state.responses < 5 && this.state.questionBank.map(({ question, answers, correct, questionId }) => (
        <QuestionBox key={questionId} question={question} options={answers} 
        selected={answer => this.computeAnswer(answer, correct)}
        />
        )
    )
  }
  {this.state.responses === 5 ? (<Result score={this.state.score} playAgain={this.playAgain} correctAnswer={this.state.correctAnswer}/>) : null}
  </div>
    )
}
}

export default App
