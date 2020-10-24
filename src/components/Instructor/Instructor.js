import React from 'react'
import { Link } from 'react-router-dom'
import './Instructor.css'

function Instructor({ name, imageOne, tutorialNumbers }) {
  return (
    <>
      <Link to={`/${name}`} > 
      <article class="instructor">
        <img class="instructor__image" src={imageOne} alt=""/>
        <div class="instructor__information margin-top-bottom-small">
         <h2 class="instructor__name uppercase">{name}</h2>
         <span role="img" aria-label="">🎀</span>
       </div>
      </article>
      </Link>
    </>
  )
}

export default Instructor

