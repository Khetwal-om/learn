import React from 'react'

import './Flashcard.css'

function Flashcard({ question, answerOne }) {
  return (
    <article class="flashcard">
        <div class="flashcard__question s-heading">
        {question}
        </div>
        <div class="flashcard__answer s-heading">
        {answerOne}
        </div>
    </article>      
  )
}

export default Flashcard