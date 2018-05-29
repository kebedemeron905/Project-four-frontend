import React, { Component } from 'react'
import { Route,
   NavLink,
   Switch,
   HashRouter} from "react-router-dom"
import {CLIENT_URL} from '../../constants'
import EventDetail from '../eventDetail/eventDetail'
import './eventList.css'
import calendar from '../calendar/calendar'





class EventList extends Component {
  state = {
    events: []
  }

  async componentDidMount() {
    try{
      const res = await fetch(`${CLIENT_URL}`)
      const events = await res.json()
      this.setState({
        events
      })
    } catch (error){
      console.log(error)
    }
  }
  render (props) {
    return (
      <HashRouter>
      <div className='eventlist-wrapper'>
        <h1 className='eventlist-header'>Upcoming Events</h1>
        {this.state.events.map(event => (
          <div key={event.pk}>
              <li><NavLink to={`/event/${event.pk}`} replace>{event.name}</NavLink></li>
              <span>{event.date}</span>
            <div className='content'>
            <Switch>
              <Route path={`/event/${event.pk}`} component={EventDetail}/>
            </Switch>
            </div>
          </div>
        ))}
      </div>
    </HashRouter>
    )
  }
}

export default EventList