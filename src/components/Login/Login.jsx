//...........

import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css";

import { Link, useNavigate} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const user = { email: email, password: password }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    const {email,password} = user
    if(email && password ){
      axios.post("https://attenback-1.onrender.com/Login", user)
      .then( res =>{
         
        console.log(res.data)
        navigate("/ProfilePage",  { state: { email: res.data.email, name: res.data.name} })
        })
    .then(err => console.log(err))
      alert("Logged in")
         }
    else{
      alert("Invalid input")
    }
   
    alert('Internal server error. Please try again later.');
    
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="button"> <button type="submit">Login</button></div>
       
      </form>
      <div>OR</div>
     
     <Link to="/Employee">
         <button id = "Register">Register</button>
        </Link> 
    </div>
  );
};

export default Login;











