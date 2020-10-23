import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Flashcard from '../Flashcard/Flashcard'


import './Tutorial.css'

class Tutorial extends Component {
  state = {
    selectedTutorial: null
  }
  componentDidMount() {
    this.setState({
      selectedTutorial: this.props.tutorials[0]
    })
  }
  onTutorialSelect = (tutorial) => {
    this.setState({
      selectedTutorial: tutorial
    })
  }
  render() {
    const { title, tutorials ,imageTwo} = this.props
    console.log(this.state.selectedTutorial)
    return (
        <div className="container">
           <div class="tutor">
            <article class="tutor">
            <img 
            class="tutor__image"
            src={imageTwo} alt=""/>
            <div class="tutor__information">
                <h2 class="tutor__name">{title}</h2>
                <span role="img" aria-label="">🎀</span>
            </div>
            </article>
          </div>    


         <div class="tags">
            <div class="tags__heading l-heading uppercase">
                tags
            </div>
        <div class="tags-item">
            {tutorials.map((tutorial) => (
                <article className="tag"
                    onClick={() => { this.onTutorialSelect(tutorial)}}>
                    <img src="./nature.svg" alt=""/>
                    <div class="tag__line"> {tutorial.title}</div>
                    </article>
            ))}
            </div>
       </div>
        
       <div class="lecture__container">
        <div class="l-heading uppercase margin-top-bottom-small">Lecture</div>
        <div class="leture">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/1jDoMFD3oGs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
       </div>
      <div class="flashcards__container">
        <div class="flashcard__header l-heading uppercase margin-top-bottom-small">
          flashcards
        </div>
          <div class="flashcards">
   
            {/* {this.state.selectedTutorial && this.state.selectedTutorial.title} */}
            {this.state.selectedTutorial &&
            this.state.selectedTutorial.flashcards.map((flashcard) => (
              <Flashcard
                question={flashcard.question}
                meaningOne={flashcard.meaningOne}
              />
            ))}

      </div>        
    </div>
    </div>

    )
  }
}

export default Tutorial
