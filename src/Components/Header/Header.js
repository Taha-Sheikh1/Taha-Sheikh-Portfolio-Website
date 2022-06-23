import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Scrollspy from 'react-scrollspy'
import './Header.css';
import NavModal from './NavModal';
import Icon from '../../assets/TahaSheikh.png'

const Header = () => {

  const [ToggleNav, setToggleNav] = useState(false)
  const TogglebarHandler = (e) => {
    e.preventDefault();
    setToggleNav(prevState => !prevState)
  }

  return (
    <div>

    <header id='header' className='fixed-top d-flex align-items-center mt-0 mb-5'>

    <div className='container d-flex align-items-center'>
      <h1 className='logo me-auto'><a href='#home'>
      <img src={Icon} className='img-fluid rounded-circle border border-dark' alt='Taha Sheikh Icon' />
      </a></h1>
      <a href='index.html' className='logo me-auto'><img src='assets/img/logo.png' alt='' /></a>
      <nav id='navbar' className='navbar order-last order-lg-0'>
        <Scrollspy items={['home', 'about', 'services', 'resume', 'technologies', 'portfolio', 'contact']} currentClassName='ActiveClass' scrolledPastClassName='DefaultClass'>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#resume'>Resume</a></li>
          <li><a href='#technologies'>Technologies</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
        </Scrollspy> 
        
         
      </nav> 
      { !ToggleNav ? <FontAwesomeIcon icon={faBars} className='mobile-nav' onClick={TogglebarHandler} />  : <FontAwesomeIcon icon={faXmark} className='mobile-nav' onClick={TogglebarHandler} />  }
      <a href='#contact' className='get-started-btn scrollto'>Contact Me</a>
      
    </div>

  </header>

  {ToggleNav ?  <NavModal ToggleBar={setToggleNav} /> : null}

    </div>
  )
}

export default Header