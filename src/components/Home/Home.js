import React from 'react'

import Instructors from '../Instructors/Instructors'
import './Home.css'



const Home = () => {
    return (
        <div className="shallow">
        <div className="home">
            {/* <div className="home__stark">
                 Learn english with  FLASHCARDS!
            </div>
            <div className="home__picture">
                <img src={hero} alt=""/>
            </div> */}
        </div>
        <div className="margin-top-bottom-small"></div>
         <Instructors />
        </div>
    )
}

export default Home
