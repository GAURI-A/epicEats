import React, { useState } from "react";
import logo from '../foodLogo.png'; // to import from outside folder to inside use ../filenae 
import { Link } from "react-router-dom"; 
const Headercomponet=()=>{
  const [btnName,setbtnName]=useState("login");
    return(
      <div className="header">
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        </div> 
        <div className="navitems">
          <ul>
            <li> <Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li> <Link to="/contact"> Contact us</Link></li>
            <li>Cart</li>
            <button className="login"
            onClick={()=>{
              btnName==="login"? setbtnName("logout"):setbtnName("login");
            }}
            >
             {btnName}
            </button>
          </ul>
        </div>
      </div>
    )
  }

 export default Headercomponet;  