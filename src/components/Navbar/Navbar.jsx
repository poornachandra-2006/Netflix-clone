// ...existing code...
import React, { use, useRef } from 'react'
import { useEffect } from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search-icon.svg'
import bell from '../../assets/bell.png'
import circle from '../../assets/circle.png'
import down from '../../assets/down.png'
import { logout } from '../../firebase';
const Navbar = () => {

  const navref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navref.current.classList.add('navbar-dark');
      } else {
        navref.current.classList.remove('navbar-dark');
      }
    });
  }, []);
  
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchIcon} alt="Search" className='icons' />
        <p>Children</p>
        <img src={bell} alt="Notifications" className='bellicon'  />
        <div className="navbar-profile">
           <img src={circle} alt="Notifications" className='profile' />
           <img src={down} alt="Notifications" className='profile' />
           <div className="dropdown">
            <p onClick={() => {logout()}}>sign out</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
