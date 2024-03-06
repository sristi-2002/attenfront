




import React, { useState } from 'react'
import "./Employee.css"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';

const Employee = () => {

  
  const[user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reTypePassword: ""
  })

  const handleChange = e => {
    const{name,value} = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  
  const navigate = useNavigate()

  const register = () => {
    const {name, email,password, reTypePassword} = user
    if(name && email && password && password === reTypePassword){
      axios.post("http://localhost:9002/employee", user)
      .then( res =>{
        
        console.log(res.data)
        navigate("/ProfilePage",  { state: { email: res.data.email , name: res.data.name } })
        })
    .then(err => console.log(err))
      alert("Registerd")
        }
    else{
      alert("Invalid input")
    }
   
  }
  

 return (
  <div className="Employee">
    {console.log("User", user)}
    <h1>Hello</h1>
    <input type="text" name="name" value={user.name} placeholder="Enter your Name" onChange={handleChange} autoComplete="name"></input>
    <input type="text" name="email" value={user.email} placeholder="Enter your Email-id" onChange={handleChange} autoComplete="email"></input>
    <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange} autoComplete="new-password"></input> 
    <input type="password" name="reTypePassword" value={user.reTypePassword} placeholder="Re-type your Password" onChange={handleChange} autoComplete="new-password"></input> 
     
  
   

     <div className="button" onClick={register}>Register</div> 
   
   
       
    <div>OR</div>

     <Link to="/Login">
        <button id = "Login">Login</button>
       </Link> 
    
  </div>
);

}

export default Employee







