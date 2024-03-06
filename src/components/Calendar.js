// Calendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AttendanceCalendar = () => {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
    // Here, you can perform any action you want with the selected dates
    // For example, you can mark attendance for the selected dates
    console.log('Selected Dates:', dates);
  };

  return (
    <div>
      <h2>Attendance Calendar</h2>
      <Calendar
        onChange={handleDateChange}
        value={selectedDates}
        selectRange={true}
      />
      <p>Selected Dates:</p>
      <ul>
        {selectedDates.map((date, index) => (
          <li key={index}>{date.toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default AttendanceCalendar;
