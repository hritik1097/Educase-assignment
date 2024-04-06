import React from "react";
import "../Signinpage/Signin.css";

function Signin() {
  return (
    <div className="main2">
      <div className="content2">
        <h1>Sign in to your <br /> PopX account</h1>
        <p>
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
        </p>
      </div>

      <div className="input2">
        <div className="email">
           <label className="emaillabel" htmlFor="email">Email Address</label>
            <input placeholder="Enter email Address" type="email" name="email" id="" />
        </div>

        <div className="password">
        <label className="passwordlabel" htmlFor="email">Password</label>
            <input placeholder="Enter password" type="email" name="password" id="" />
        </div>
        <button className="btn2">Login</button>
      </div>
    </div>
  );
}

export default Signin;
