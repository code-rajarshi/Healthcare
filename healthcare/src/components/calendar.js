import React from 'react';
import '../stylesheet/calendar.css';

const schedule = [
  { day: 'Mon', date: 25, times: ['10:00', '11:00', '12:00'], highlights: [] },
  { day: 'Tues', date: 26, times: ['08:00', '', '10:00'], highlights: ['09:00'], selected: true },
  { day: 'Wed', date: 27, times: ['12:00', '', '13:00'], highlights: [] },
  { day: 'Thurs', date: 28, times: ['10:00', '11:00', ''], highlights: ['11:00'] },
  { day: 'Fri', date: 29, times: ['', '14:00', '16:00'], highlights: [] },
  { day: 'Sat', date: 30, times: ['12:00', '14:00', '15:00'], highlights: ['12:00', '09:00'] },
  { day: 'Sun', date: 31, times: ['09:00', '10:00', '11:00'], highlights: [], disabled: true }
];

const Schedule = () => {
  return (
    <div className="schedule">
      {schedule.map((dayItem) => (
        <div
          key={dayItem.day}
          className={`day-column 
            ${dayItem.selected ? 'selected-day' : ''} 
            ${dayItem.disabled ? 'disabled-day' : ''}`}
        >
          <div className="day-name">{dayItem.day}</div>
          <div className="day-date">{dayItem.date}</div>

          {dayItem.times.map((time, index) => (
            <div
              key={index}
              className={`time-slot ${
                dayItem.highlights.includes(time) ? 'highlighted-slot' : ''
              }`}
            >
              {time || '—'}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Schedule;