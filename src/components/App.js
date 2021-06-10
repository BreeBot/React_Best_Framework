import React from 'react'
import AnswerList from './AnswerList'

const App = (props) => {
  debugger
  return (
    <div className="grid-container app">
      <h1 className="title"></h1>
      <AnswerList
      data = {props.data}

      />
    </div>
  )
}

export default App
