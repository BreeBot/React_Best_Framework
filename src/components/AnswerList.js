import React, {useState} from "react"
import AnswerTile from "./AnswerTile"



const AnswerList = (props) => {
  const [selectedPlace, setSelectedPlace] = useState(null)

  let answersList = props.data.question.answers.map(answer =>{

    const togglePlace = () => {
      // debugger
      setSelectedPlace(answer.id)
    }

    let selectedStatus = ""

    if (selectedPlace === answer.id) {
      selectedStatus = "selected"
    }

    return(
      <AnswerTile 
       answerBody = {answer.body}  
       answer={answer}
       togglePlace={togglePlace}
       selectedStatus={selectedStatus}
      />
    )
  })

  let message = ""

  if (selectedPlace === props.data.question.correctAnswerId) {
    message = "Correct!"
  }else if (selectedPlace !== props.data.question.correctAnswerId && selectedPlace !== null){
    message = "Incorrect, Loser!"
  }

  return(
    <div>
      <h1>
        {props.data.question.body}
      </h1>
      <h3>
      {answersList}
      </h3>
      <h4>{message}</h4>
    </div>
    

  )
}

export default AnswerList