import React from 'react'
import './Footer.css'
import facebook from '../../assets/facebook.png'  
import instagram from '../../assets/instagram.png'  
import twitter from '../../assets/twitter.png'  
import youtube from '../../assets/youtube.png'  
const Footer = () => {
  return (
    <div className='footer'>  
      <div className="footer-icons">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={youtube} alt="" />
      </div>
      <ul>
        <li>Audio and Subtitles</li>
        <li>Audio Description</li>
        <li>Help Center</li>  
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
      </ul>
      <p className='copyright-text'>© 1997-2024 Netflix</p>
      
    </div>
  )
}

export default Footer
