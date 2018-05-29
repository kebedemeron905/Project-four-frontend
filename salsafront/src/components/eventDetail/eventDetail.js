import React, { Component } from 'react'
import { Route, Link } from "react-router-dom"
import {CLIENT_URL} from '../../constants'
import './eventDetail.css'



class EventDetail extends Component {
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
    let event = ''
    if (this.state.events.length > 0) {
    event = (this.state.events.filter(event => `/event/${event.pk}` === this.props.location.pathname)[0])
    // console.log((this.state.events.filter(event => `/event/${event.pk}` === this.props.location.pathname))) 
    }
    return (
      <div className='eventDetail-wrapper'>
        <h1 className='eventDetail-header'></h1>
          <div key={event.pk}>
              <h3>{event.name}</h3>
              <span>{event.date}</span>
              <span>{event.time_start}-{event.time_end}</span>
              <span>{event.location}</span>
              <span>{event.details}</span>
              <span>{event.event_site}</span>
      </div>
       
      </div>
    )
 }
}

export default EventDetail