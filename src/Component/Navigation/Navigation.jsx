import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <h1 className="logo">GEWIN</h1>
      </div>
      <div className="link">
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
              <Link to="SignUp" className="btn3">
                Sign Up
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
