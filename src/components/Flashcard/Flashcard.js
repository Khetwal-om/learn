import React from 'react'

import './Flashcard.css'

function Flashcard({ question, meaningOne }) {
  return (
    <article class="flashcard">
        <div class="flashcard__question s-heading">
        {question}
        </div>
        <div class="flashcard__answer s-heading">
        {meaningOne}
        </div>
    </article>      
  )
}

export default Flashcard