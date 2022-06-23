import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faBook, faEnvelopeCircleCheck, faAddressBook, faSquareShareNodes} from '@fortawesome/free-solid-svg-icons';
import './About.css';
import { faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons'


const About = () => {
  return (
    <div>

    <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">

      <div className='section-title'>
       <h2>About</h2>
      </div>

        <div className="row no-gutters">
          <div className="content col-xl-5 d-flex align-items-stretch">
            <div className="content">
              <h3>Who Am I ?</h3>
              <p>
              An adept, full-stack web-mobile application developer. Striving to reform modern designs to the level best of my abilities while ensuring the utmost content and satisfaction. Affiliated with the web development and mobile application industry for the past few years, I have aspired to tackle modern designs and complex solutions repeatedly to make my work stand out. Certified in Full Stack, Mobile Development, Web Development, and CMS Development, and proficient in. I seek complex challenges to portray my futuristic and adaptive insight to overachieve every time.
              </p>
              <a href="#resume" className="about-btn"><span>Resume </span> <FontAwesomeIcon icon={faChevronRight} className='ChevronRight' /></a>
            </div>
          </div>
          <div className="col-xl-7 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">

                <div className="col-md-6 icon-box">
                <FontAwesomeIcon icon={faBook} className='about-icons' />
                  <h4>Academic Journey ?</h4>
                  <p>Qualified in Ordinary and Advanced Level by Cambridge Assessment International Education in Computer Science centric disciplines, I am currently en route to my Bachelor’s in Computer Science.</p>
                </div>

                <div className="col-md-6 icon-box">
                  <FontAwesomeIcon icon={faEnvelopeCircleCheck} className='about-icons' />
                  <h4>How to Reach out to me?</h4>
                  <p>Send me an email at 'sheikhtaha472@gmail.com'</p>
                </div>

                <div className="col-md-6 icon-box">
                <FontAwesomeIcon icon={faAddressBook} className='about-icons' />
                  <h4>Contact Number ?</h4>
                  <a href='tel: 03332843681</p> '>Contact me @ +92-3332-843681</a>
                </div>
                
                <div className="col-md-6 icon-box">
                  <FontAwesomeIcon icon={faSquareShareNodes} className='about-icons' />
                  <h4>Social Media Accounts ?</h4>
                  <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/taha-sheikh-5888a6202/'><FontAwesomeIcon icon={faLinkedin} className='linkedin-about' /></a>
                  <a rel="noreferrer" target="_blank" href='https://github.com/Taha-Sheikh1'><FontAwesomeIcon icon={faGithub} className='ms-2 github-about' /></a>
                </div>
                
              </div>
            </div> 
          </div>
        </div>

      </div>
    </section>
    
    </div>
  )
}



export default About;