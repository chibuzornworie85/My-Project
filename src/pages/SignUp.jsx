import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/SignUp.css'

const SignUp = () => {
  return (
    <div>
        <div className="button">
        <div className="quick"><Link to='/'><button>HOME</button></Link></div>
        <h1 className='hap'>Create new account</h1>
            <div className="button0">
                <div className="bot" >
                <input type="First name" placeholder='First name' className='pit1' />
                </div>
                <div className="bot" >
                <input type="Last name" placeholder='Last name' className='pit1' />
                </div>
                <div className="bot">
                <input type="Email" placeholder='Email'className='pit1'  />
                </div>
                <div className="bot" >
                <input type="Password" placeholder='Password' className='pit1'/>
                </div>
            </div>
            <div className="bat">
            <button className='bot1'><a>Sign In</a></button>
            </div>
        </div>
    </div>
  )
}

export default SignUp