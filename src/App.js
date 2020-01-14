import React, {Component} from 'react'
import quizService from "./quizService"
import QuestionBox from "./QuestionBox"
import './App.css'

class App extends Component {

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
        {this.state.questionBank.length > 0 && this.state.questionBank.map(({ question, answers, correct, questionId }) => (
        <QuestionBox key={questionId} question={question} options={answers}/>
        )
    )
  }
  </div>
    )
}
}

export default App
