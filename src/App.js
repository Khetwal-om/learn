import React, { Component } from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Instructors from './components/Instructors/Instructors'
import Tutorials from './components/Tutorials/Tutorials'

import './App.css'


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Instructors} />
            <Route path="/:instructor" exact component={Tutorials} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App