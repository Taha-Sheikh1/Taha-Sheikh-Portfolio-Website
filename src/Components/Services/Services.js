import React from 'react';
import UiIcon from '../../assets/ui.png';
import WebIcon from '../../assets/web development.png';
import eComImage from '../../assets/ecom.png';
import OptImage from '../../assets/opt.png';
import TestingImage from '../../assets/test.png';
import DeployImage from '../../assets/deploy.png';
import './Services.css';



const Services = () => {
  return (
    <div>
     <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Services</h2>
        </div>
        

        <div class="row gy-4">

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="icon">
              <img src={UiIcon} alt='UI/UX Icon' className='img-fluid' /> 
              </div> 
              <h4>Designing(UI/UX) Concepts Implementation</h4>
              <p>UI brings together concepts from <strong>interaction design, visual design, and information architecture.</strong> Implementating those concepts by extracting color schemas/content then converting it in a fully scalable web application.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box iconbox-orange ">
              <div class="icon">
              <img src={WebIcon} alt='UI/UX Icon' className='img-fluid' /> 
              </div> 
              <h4>Web Applications Development</h4>
              <p>I create successful responsive web apps that are fast, easy to use, and built with best practices. For this I make good use of JavaScript's framework <strong>(ReactJS)</strong> to glisten the UI of the application. In order to make my application work effectively i make use of <strong>Redux</strong> framework for complex state management.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box iconbox-pink">
              <div class="icon">
              <img src={eComImage} alt='UI/UX Icon' className='img-fluid' /> 
              </div> 
              <h4>eCommerce Businesses(B2C) Development</h4>
              <p>B2C <strong>business-to-consumer</strong> ecommerce, also called retail ecommerce, is a business model that involves sales between online businesses and consumers. I have couple of years of experience of building eCommerce enterprises from scratch. I mostly make use of CMS including <strong>(Shopify/Wordpress/Woocommerce)</strong> to build these eCommerce businesses. </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-yellow">
              <div class="icon">
              <img src={OptImage} alt='UI/UX Icon' className='img-fluid' /> 
              </div> 
              <h4>Optimization/Speed Enhancements</h4>
              <p>When it comes to Web Development, <strong>optimization</strong> plays a vital role. Since, i build web Applications using <strong>ReactJS</strong>, in order to optimize the speed of react apps i make use of react's built-in hooks<strong>(useMemo, useCallBack)</strong>, so, that the unusual renders are paused which eventually increase the speed of the web application. Using server-side-rendering language <strong>(NextJs)</strong> for better SEO of the application. </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box iconbox-red">
              <div class="icon">
                <img src={TestingImage} alt='UI/UX Icon' className='img-fluid' /> 
              </div>
              <h4>Web Application Testing </h4>
              <p>Application testing refers to the process of testing any software application using scripts, tools, or any <strong>test automation frameworks</strong> in order to identify errors. I make use of <strong>Jest</strong> library to test my react applications, so, that my applications are bug-free.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box iconbox-teal">
              <div class="icon">
              <img src={DeployImage} alt='UI/UX Icon' className='img-fluid' /> 
              </div>
              <h4>Web Application Deployment</h4>
              <p>Deployment is the mechanism through which applications, modules, updates, and patches are delivered from developers to users. I make use of <strong>HEROKU, NETLIFY & AWS</strong> for the deployment of my web applications.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Services