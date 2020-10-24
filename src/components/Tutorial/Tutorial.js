import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
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
    console.log(this.props)
    console.log(this.state.selectedTutorial)
    
    return (
        <>
           <div className="l-heading uppercase margin-top-bottom-small">Know your teacher  <span role="img" aria-label="">🚀</span></div>
            <div class="tutor">
              <img className="tutor__image" src={imageTwo} alt=""/>
            </div>


         <div class="tags">
            <div class="tags__heading l-heading uppercase">
                tags
            </div>
        <div class="tags-item">
            {tutorials.map((tutorial) => (
                <article className="tag"
                    onClick={() => { this.onTutorialSelect(tutorial)}}>
                    <img src={tutorial.icon} alt="🚀"/>
                    <div class="tag__line"> {tutorial.title}</div>
                    </article>
            ))}
            </div>
       </div>

       <div class="lecture__container">
        <div class="l-heading uppercase margin-top-bottom-small">Lecture</div>
        <div class="lecture">
       {this.state.selectedTutorial && ( <iframe  src={`https://www.youtube.com/embed/${this.state.selectedTutorial.video}`} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)}
        </div>
       </div>
      <div class="flashcards__container">
        <div class="flashcard__header l-heading uppercase margin-top-bottom-small">
          flashcards
        </div>

     
        <div className="m-heading margin-top-bottom-small uppercase">{this.state.selectedTutorial && this.state.selectedTutorial.title}</div> 

          <div class="flashcards">   
            {this.state.selectedTutorial &&
            this.state.selectedTutorial.flashcards.map((flashcard) => (
              <Flashcard
                question={flashcard.question}
                meaningOne={flashcard.meaningOne}
              />
            ))}

      </div>        
    </div>
    </>

    )
  }
}

export default Tutorial
