import React, { Component } from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Tutorials from './components/Tutorials/Tutorials'

import './App.css'
import Home from './components/Home/Home'


class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:instructor" exact component={Tutorials} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App