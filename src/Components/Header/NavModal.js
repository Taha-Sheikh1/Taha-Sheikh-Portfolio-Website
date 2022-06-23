import React from 'react';
import './NavModal.css';

const NavModal = ({ToggleBar}) => {

  const ClickedHandler = () => {
    ToggleBar(false)
  }

  return (
    <div>

<div className='container-fluid Navbar'>

  <ul className="nav flex-column ms-5 ">
  
  <li><a href='#home' className='scrollto active' onClick={ClickedHandler}>Home</a></li>
  <li><a href='#about' className='scrollto active' onClick={ClickedHandler}>About</a></li>
  <li><a href='#services' className='scrollto active' onClick={ClickedHandler}>Services</a></li>
  <li><a href='#resume' className='scrollto active' onClick={ClickedHandler}>Resume</a></li>
  <li><a href='#technologies' className='scrollto active' onClick={ClickedHandler}>Technologies</a></li>
  <li><a href='#portfolio' className='scrollto active' onClick={ClickedHandler}>Portfolio</a></li>
  
  </ul>   
  <a href='#contact' className='contact-btn' onClick={ClickedHandler}>Contact Us</a>

 </div>
    </div>
  )
} 


export default NavModal;