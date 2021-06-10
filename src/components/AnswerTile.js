import React from "react"

const AnswerTile = (props) => {
  

  return(
    <div className={props.selectedStatus} onClick={props.togglePlace}>
          {props.answerBody}
 
    </div>
    
  )
}

export default AnswerTile