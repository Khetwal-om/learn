import React from 'react'

import Instructors from '../Instructors/Instructors'
import './Home.css'

import hero from '../../img/hero.jpg'


const Home = () => {
    return (
        <div className="shallow">
        <div className="home">
            <div className="home__stark">
                 Learn english with  FLASHCARDS!
            </div>
            <div className="home__picture">
                <img src={hero} alt=""/>
            </div>
        </div>
         <Instructors />
        </div>
    )
}

export default Home
