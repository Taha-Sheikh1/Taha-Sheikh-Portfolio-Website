import React from 'react';
import APIImage from '../../assets/API.png';
import BootStrap from '../../assets/bootstrap.png';
import HtmlImage from '../../assets/html.png';
import CSSImage from '../../assets/css.png';
import JavaScript from '../../assets/js.png';
import ReactImage from '../../assets/react.png';
import ReduxImage from '../../assets/redux.png';
import SAGAImage from '../../assets/Redux-Saga.png';
import THUNKImage from '../../assets/thunk.png';
import FirebaseImage from '../../assets/Firebase.png';
import ExpressImage from '../../assets/expressJS.png';
import NodeImage from '../../assets/node.png'
import './Technologies.css';



const Technologies = () => {
  return (
    <div>
    
<section id="technologies" className="section-bg">

<div className="container">

  <div className="section-title">
     <h2>Technologies</h2>
  </div>

  <div className="row g-0 tech-wrap" data-aos="zoom-in" data-aos-delay="100">

    <div className="col-lg-3 col-md-4 col-xs-6">
      <div className="tech-logo">
      <img src={APIImage} className="img-fluid" alt="" />
      </div>
    </div>

    <div className="col-lg-3 col-md-4 col-xs-6">
      <div className="tech-logo">
      <img src={BootStrap} className="img-fluid" alt="" />
      </div>
    </div>

    <div className="col-lg-3 col-md-4 col-xs-6">
      <div className="tech-logo">
      <img src={HtmlImage} className="img-fluid" alt="" />
      </div>
    </div>

    <div className="col-lg-3 col-md-4 col-xs-6">
      <div className="tech-logo">
      <img src={CSSImage} className="img-fluid" alt="" />
      </div>
    </div>

    <div className="col-lg-3 col-md-4 col-xs-6">
      <div className="tech-logo">
      <img src={JavaScript} className="img-fluid" alt="" />
      </div>
    </div>

    <div className="col-lg-3 col-md-4 col-xs-6">
      <div className="tech-logo">
      <img src={ReactImage} className="img-fluid" alt="" />
      </div>
    </div>

    <div className="col-lg-3 col-md-4 col-xs-6">
      <div className="tech-logo">
      <img src={ReduxImage} className="img-fluid" alt="" />
      </div>
    </div>

    <div className="col-lg-3 col-md-4 col-xs-6">
      <div className="tech-logo">
      <img src={SAGAImage} className="img-fluid" alt="" />
      </div>
    </div>

    <div className="col-lg-3 col-md-4 col-xs-6">
      <div className="tech-logo">
      <img src={FirebaseImage} className="img-fluid" alt="" />
      </div>
    </div>

    <div className="col-lg-3 col-md-4 col-xs-6">
      <div className="tech-logo">
      <img src={ExpressImage} className="img-fluid" alt="" />
      </div>
    </div>

    <div className="col-lg-3 col-md-4 col-xs-6">
      <div className="tech-logo">
      <img src={NodeImage} className="img-fluid" alt="" />
      </div>
    </div>

    <div className="col-lg-3 col-md-4 col-xs-6">
      <div className="tech-logo">
      <img src={THUNKImage} className="img-fluid" alt="" />
      </div>
    </div>

  </div>

</div>

</section>




    </div>
  )
}

export default Technologies;