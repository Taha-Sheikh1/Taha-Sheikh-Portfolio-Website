import React from 'react';
import TahaSheikh from './TahaSheikh.png'
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons'
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div>

    <section id="home">
    <div className="container" data-aos="zoom-in" data-aos-delay="100">
    <div className='row gx-0'>

    <div className='col-lg-5 d-flex flex-column justify-content-center'>
    <h1>Taha Sheikh</h1>
   <p>
    <Typewriter
    options={{
    strings: ['Iam Frontend Developer.', 'Iam JavaScript Developer.', 'Iam ReactJS Developer.'],
    autoStart: true,
    loop: true,
    }} />
    </p>
    <div className='social-links'>
      <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/taha-sheikh-5888a6202/'><FontAwesomeIcon icon={faLinkedin} className='hero-linkedin' /></a>
      <a rel="noreferrer" target="_blank" href='https://github.com/Taha-Sheikh1'><FontAwesomeIcon icon={faGithub} className='hero-github' /></a>
    </div>
    </div>

    <div className='col-lg-7 d-flex align-items-around'>
    <img src={TahaSheikh} className='img-fluid logo' alt='Taha Sheikh' />
    </div>

    </div>
    </div>
  </section>

    </div>
  )
}

export default Hero;

