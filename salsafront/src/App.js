import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header'
import EventList from './components/eventList/eventList.js'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={EventList} />
          {/* <Route path='/events/new' component={EventFormpage} /> */}
        </Switch>

      </div>
    )
  }
}

export default App
