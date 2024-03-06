

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../components/EmpName/EmpName.css';
import 'react-calendar/dist/Calendar.css'; 
import { useLocation } from 'react-router-dom';
import axios from 'axios'

const ProfilePage = () => {
 
  const [selectedDate, setSelectedDate] = useState(null);
  const [attendance, setAttendance] = useState([]);
  const location = useLocation();
  const email = location.state && location.state.email;
  const name = location.state && location.state.name;
  const selectedDates = location.state && location.state.selectedDates;

  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const renderTileContent = ({ date, view }) => {
    if (
        view === 'month' &&
        selectedDate &&
        date.toDateString() === selectedDate.toDateString()
    ) {
        return <div className="selected-marker"></div>;
    }
    return null;
};

const markAttendance = () => {
  if (selectedDate) {

      const selectedDateUTC = new Date(selectedDate.toUTCString());
      axios.post("http://localhost:9002/ProfilePage", { email: email, selectedDate: selectedDateUTC })
          .then(res => {
              console.log("Selected date added to backend:", res.data);
             
              setAttendance([...attendance, selectedDateUTC]);
              setSelectedDate(null); 
          })
          .catch(error => {
              console.error("Error adding selected date to backend:", error);
          });
  }
};


  return (
    <div>
      <h1>Profile Page</h1>
      
      <div>
        <h2>Hello, {name}!</h2>
        <p>Welcome, {email}!</p>
        <p>Select a date:</p>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileContent={renderTileContent}
          selectRange={false} 
        />
        <button onClick={markAttendance}>Mark Attendance</button>
      </div>
      <div>
        <h3>Attendance:</h3>
        {attendance.length > 0 ? (
          <ul>
            {attendance.map((date, index) => (
              <li key={index}>{date.toDateString()}</li>
            ))}
          </ul>
        ) : (
          <p>No attendance marked yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;








