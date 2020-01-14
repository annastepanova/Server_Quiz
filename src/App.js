import React, {Component} from 'react'
import quizService from "./quizService"
import './App.css'

class ServerQuiz extends Component {

  state = {
    questionBank: []
  }

  getQuestions = () => {
    quizService().then(question => {
      this.setState({
        questionBank: question
      })
    })

  }

  componentDidMount() {
    this.getQuestions()
  }

  render() {
    return (
      <div className="container">
        <div className="title">ServerQuiz</div>
        {this.state.questionBank.length > 0 && this.state.questionBank.map(({ question, answers, correct, questionId }) => <h4 key={questionId}>{question}</h4>)}
      </div>
    )
  }
}

export default ServerQuiz;
