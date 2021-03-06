import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import EventList from '../eventList/eventList'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

const Calendar = props => (
  <div>
    <BigCalendar
      // events={EventList}
      startAccessor='startDate'
      endAccessor='endDate'
    />
  </div>
)

export default Calendar
