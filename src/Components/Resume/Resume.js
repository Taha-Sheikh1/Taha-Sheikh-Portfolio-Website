import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div>
     <section id="resume" class="resume">
      <div class="container">

        <div class="section-title">
          <h2>My Resume</h2>
        </div>

        <div class="row">
          <div class="col-lg-6">
            {/* <h3 class="resume-title">Sumary</h3>
            <div class="resume-item pb-0">
              <h4>Alice Barkley</h4>
              <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
              <p>
              <ul>
                <li>Portland par 127,Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </ul>
              </p>
            </div> */}

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Ordinary Levels (O Levels) &amp; Computer Science</h4>
              <h5>2018 - 2021</h5>
              <p><em>Fahims Schooling System, Karachi, Pakistan</em></p>
              <p>Grade/CGPA:- 9.2/10</p>
            </div>
            <div class="resume-item">
              <h4>Advance Levels (A Levels) &amp; Computer Science</h4>
              <h5>2021 - Present</h5>
              <p><em>WHALES COLLEGE, Karachi, Pakistan</em></p>
              <p>Awards:-</p>
              <ul>
                <li>Double Scholarships On Tuition Fee.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>Diploma Of Education &amp; Computer Science</h4>
              <h5>2020 - 2021</h5>
              <p><em>National Institute Of Skilled Training (NIST), Karachi, Pakistan</em></p>
              <p>Awards:- </p>
              <ul>
                <li>Certificate Of Full-Stack Development</li>
                <li>Certificate Of InternShip Completion (Front-End Developer)</li>
                <li>Certificate Of InternShip Completion (Back-End Developer)</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>Course Of Basic Programming Language(C Language)</h4>
              <h5>2021 - 2022</h5>
              <p><em>APTECH Institute Of Learning, Karachi, Pakistan</em></p>
              <p>Awards:-</p>
              <ul>
                <li>Certificate Of [C Language]</li>
              </ul>
            </div>
          </div>

          <div class="col-lg-6">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>FrontEnd Developer</h4>
              <h5>Jun 2021 - Aug 2021</h5>
              <p><em>ITSec Pvt Ltd · Internship </em></p>
              <p>
              <ul>
                <li>Optimizing the user experience.</li>
                <li>Using HTML, JavaScript and CSS to bring concepts to life. </li>
                <li>Developing and maintaining the user interface.</li>
                <li>Implementing design on mobile websites.</li>
                <li>Creating tools that improve site interaction regardless of the browser.</li>
                <li>Managing software workflow. </li>
                <li>Fixing bugs and testing for usability.</li>
              </ul>
              </p>
            </div>

            <div class="resume-item">
              <h4>BackEnd Developer</h4>
              <h5>Oct 2021 - Dec 2021</h5>
              <p><em>ITSec Pvt Ltd · Internship </em></p>
              <p>
              <ul>
                <li>Participate in the entire application lifecycle, focusing on coding and debugging.</li>
                <li>Troubleshoot and debug applications.</li>
                <li>Perform UI tests to optimize performance.</li>
                <li>Collaborate with Front-end developers to integrate user-facing elements with server side logic(Using PHP).</li>
                <li>
                Making PHP Communicate with MYSQL Database according commands received from frontend through API's.
                </li>
                <li>Making API to communicate with front-end.</li>
                <li>Gather and address technical and design requirements.</li>
                <li>Build reusable code for future use.</li>
              </ul>
              </p>
            </div>

            <div class="resume-item">
              <h4>Front-End Developer</h4>
              <h5>Oct 2021 - Present</h5>
              <p><em>Creative Squad · Full-Time</em></p>
              <p>
              <ul>
                <li>Optimizing the user experience through reacts' build in hooks and libraries/frameworks. hence, also 
 building professional, highly-scalable user interfaces.</li>
                <li>Implementing design on mobile/tablet websites.</li>
                <li>Create and test applications for websites.</li>
                <li>Making valuable-solutions in order to attract traffic on to the websites in order to gain more sales.</li>
                <li>
                Maintain and update websites according to the version changing of the libraries.
                </li>
                <li>Designing and implementing new features and functionality.</li>
                <li>Establishing and guiding the website's architecture.</li>
                <li>Making websites' design visually appealing and easy to navigate for its' users.</li>
                <li>Ensuring high-performance and availability, and managing all technical aspects of the websites.</li>
                <li>Using build-in-React-hooks in order to derive a optimizable solution for the websites' speed.</li>
                <li>Providing solutions which improves the websites' structure and design.</li>
                <li>Integrating data from various back-end services (specifically Node.js) and databases(specifically MongoDB) through RESTful API's.</li>
                <li>Integrating client reviews through APIs' from trust-pilot (consumer review website).</li>
              </ul>
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
    </div>
  )
}

export default Resume