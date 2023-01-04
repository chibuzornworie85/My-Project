import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

class Navigation extends Component {
  state = { clicked: false };
  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }
  render() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <h1 className="logo">GEWIN</h1>
      </div>
      <div className="link">
        <div className="link1">
        <div className={this.state.clicked ? "link1 active" : "link1"}>
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
        </div>
        
      </div>
      <div id="mobile" onClick={this.handleClick}>
              <i
                id="bar"
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
    </div>
  );
};
};

export default Navigation;
