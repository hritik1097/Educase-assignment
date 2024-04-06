import React from 'react'
import "../Createaccount/Createaccount.css"


function Createaccount() {
  return (
    <div>
       <div className="main3">
      <div className="content3">
        <h1>Create your <br /> PopX account</h1>
        <p>
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
        </p>
      </div>

      <div className="input">
        <div className="name">
           <label className="namelabel" htmlFor="name">Full Name</label>
            <input placeholder="Enter email Address" type="email" name="email" id="" />
        </div>

        <div className="phone">
        <label className="phonelabel" htmlFor="phone">Phone number</label>
            <input placeholder="Enter password" type="number" name="phone" id="" />
        </div>

        <div className="email">
        <label className="emaillabel" htmlFor="email">Email address</label>
            <input placeholder="Enter email" type="email" name="password" id="" />
        </div>

        <div className="password">
        <label className="passwordlabel" htmlFor="email">Password</label>
            <input placeholder="Enter password" type="email" name="password" id="" />
        </div>

        <div className="company">
        <label className="companylabel" htmlFor="company">Comapny name</label>
            <input placeholder="Enter Company" type="text" name="company" id="" />
        </div>
        <p>Are you an Agency?</p>
        <div className="radio">
          <input type="radio" name="" id="" />
          <label htmlFor="radio">Yes</label>
          <input type="radio" name="" id="" />
          <label htmlFor="radio">No</label>

        </div>
        <button className="btn1">Create Account</button>
      </div>
    </div>
    </div>
  )
}

export default Createaccount
