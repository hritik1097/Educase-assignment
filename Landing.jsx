import React, { useState } from 'react'
import '../Landingpage/Landing.css'


function Landing() {
 

  return (
    <div className='main'>
        <div className="content">
        <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.</p>
        </div>
      <div className="btns">
      <button className='create'>Create Account</button>
     <button className='already'>Already Registered? Login</button>
      </div>
     
    </div>
  )
}

export default Landing
