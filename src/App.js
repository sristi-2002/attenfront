// App.js
import React from 'react';
// import AttendanceCalendar from './components/Calendar';
import Employee from './components/Employee/Employee';
import Login from './components/Login/Login';
import Signup from "./components/Signup/Signup";
import ProfilePage from './Pages/ProfilePage';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
function App() {

  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <div className="App">

           {/* <Employee/>  
            <Login/>       */}
        {/* <Signup/> */}



     
 
     
      <Router>

        
        <Routes>
           <Route path="/" element={<Employee/>}/> 
           <Route path="/Login" element={<Login/>}/> 
           <Route path="/Employee" element={<Employee/>}/> 
          <Route path = "/ProfilePage" element = {<ProfilePage/>}/>
        </Routes>
      </Router> 
       
    </div>
  );
}

export default App;
