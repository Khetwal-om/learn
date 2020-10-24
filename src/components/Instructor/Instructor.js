import React from 'react'
import { NavLink } from 'react-router-dom'
import './Instructor.css'

function Instructor({ name, imageOne, tutorialNumbers }) {
  return (
    <>
      <NavLink to={`/${name}/`}> 
      <article class="instructor">
        <img class="instructor__image" src={imageOne} alt=""/>
        <div class="instructor__information margin-top-bottom-small">
         <h2 class="instructor__name uppercase">{name}</h2>
         <span role="img" aria-label="">🎀</span>
       </div>
      </article>
      </NavLink>
    </>
  )
}

export default Instructor

