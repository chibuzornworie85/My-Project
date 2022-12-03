import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import img10 from "../../Images/icon-hamburger.svg";

const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <h1 className="logo">GEWIN</h1>
      </div>
      <div className="link">
        <div className="link1">
          <ul className="link">
            <li className="link">
              <Link to="/about" className="link nav">
                About
              </Link>
            </li>
            <li className="link">
              <Link to="/Service" className="link nav">
                Service
              </Link>
            </li>
            <li className="link">
              <Link to="/Pricing" className="link nav">
                Pricing
              </Link>
            </li>
            <li className="link">
              <Link to="/Carrers" className="link nav">
                Carrers
              </Link>
            </li>
            <li className="link">
              <button className="btn2">
                <Link to="/SignUp" className="btn3">
                  Sign Up
                </Link>
              </button>
            </li>
          </ul>
        </div>
        <div className="burger">
          <Link to="/Burger">< img src={img10} alt="An Image"/></Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
