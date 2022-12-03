import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="footer1">
        <div className="col-2">
            <h5 className="yes">Company</h5>
            <ul>
                <li><a href="#About Us" className="nav1">About Us</a></li>
                <li><a href="#Contact" className="nav1">Contact</a></li>
                <li><a href="#Teams" className="nav1">Teams</a></li>
                <li><a href="#Careers" className="nav1">Careers</a></li>
                <li><a href="#Blog" className="nav1">Blog</a></li>
                <li><a href="#Press" className="nav1">Press</a></li>
            </ul>
        </div>

        <div className="col-2">
            <h5 className="yes">Services</h5>
            <ul>
                <li><a href="#Contact" className="nav1">Contact</a></li>
                <li><a href="#Teams" className="nav1">Teams</a></li>
                <li><a href="#Careers" className="nav1">Careers</a></li>
                <li><a href="#Press" className="nav1">Press</a></li>
            </ul>
        </div>

        <div className="col-2">
            <h5 className="yes">Address</h5>
            <ul>
                <li><a href="#Contact" className="nav1">Contact</a></li>
                <li><a href="#Press" className="nav1">Press</a></li>
            </ul>
        </div>

        <div className="col-2">
            <h5 className="yes">Social Media</h5>
            <ul>
                <li><a href="#Contact" className="nav1">Contact</a></li>
                <li><a href="#Teams" className="nav1">Teams</a></li>
                <li><a href="#Blog" className="nav1">Blog</a></li>
                <li><a href="#Press" className="nav1">Press</a></li>
            </ul>
        </div>

        <div className="col-2">
            <h5 className="yes">Support</h5>
            <ul>
                <li><a href="#Contact" className="nav1">Contact</a></li>
                <li><a href="#Teams" className="nav1">Teams</a></li>
            </ul>
        </div>

        
    </div>
        </div>
        
    <div className="copy">
        <div className="para">
            <div className="pit">
            <p>&copy; 2022 Spendit. All Right Revererd</p>
            </div>
        <div className="pls">
        <p>Term of Use</p>
        <p>Privacy Policy</p>
        <p>Support@Gewin.com</p>
        <p>+2349135997163</p>
        </div>    
        </div>
    </div>

    </>
  )
}

export default Footer
