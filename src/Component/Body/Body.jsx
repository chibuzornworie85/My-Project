import React from 'react'
import './Body.css'
import img1 from "../../Images/img-lap.webp"
import img2 from "../../Images/blue-kids.jpg"
import { Link } from 'react-router-dom'

const Body = () => {
  return (
    <div className='al'>
      <div className="map">
      <div className="al3">
      <img src={img1} alt="This is an image" style={{

      }} />
      </div>
      <div className="al1">
        <div className="tip">
        <h3 className="tex">LEARN MORE ABOUT US</h3>
      <p className='tex1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Veritatis vel nesciunt, numquam, cum atque voluptatum libero <br /> quae consectetur illum nostrum consequatur dolorum  corrupti ex ab <br /> velit deserunt quidem modi blanditiis? adipisicing elit. Sunt sequi atque <br /> repellendus repellat illo officiis nobis minima incidunt koiu ytdcvb nmkjhgf </p>
      <div className="btn1">
      <button className='btn'><Link to='SignUp' >SIGN UP </Link></button>
      </div>
        </div>
      </div>
      </div>
      <div className="al2">
        <div className="tip">
        <h3 className="tex">HOW IT WORK</h3>
      <p className='tex1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Veritatis vel nesciunt, numquam, cum atque voluptatum libero <br /> quae consectetur illum nostrum consequatur dolorum  corrupti ex ab <br /> velit deserunt quidem modi blanditiis? adipisicing elit. Sunt sequi atque <br /> repellendus repellat illo officiis nobis minima incidunt koiu ytdcvb nmkjhgf </p>
      <div className="btn1">
      <button className='btn'><Link to='More' >MORE</Link></button>
      </div>
        </div>
      <div className="img1">
      <img src={img2} alt="This is an image" />
      </div>
      </div>
    </div>
  )
}

export default Body
