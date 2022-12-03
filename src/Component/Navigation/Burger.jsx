import React from 'react'
import { Link } from "react-router-dom";
import './Burger.css'

const Burger = () => {
  return (
    <div className='link9'>
       <ul className="link0">
       <Link to="/">HOME</Link>
            <li className="link0">
              <Link to="/about" className="link nav0">
                About
              </Link>
            </li>
            <li className="link0">
              <Link to="/Service" className="link nav0">
                Service
              </Link>
            </li>
            <li className="link0">
              <Link to="/Pricing" className="link nav0">
                Pricing
              </Link>
            </li>
            <li className="link0">
              <Link to="/Carrers" className="link nav0">
                Carrers
              </Link>
            </li>
            <li className="link0">
              <button className="btn0">
                <Link to="/SignUp" className="link nav0">
                  Sign Up
                </Link>
              </button>
            </li>
          </ul>
    </div>
  )
}

export default Burger
