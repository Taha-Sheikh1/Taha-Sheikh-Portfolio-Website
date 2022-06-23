import React from 'react';
import CreativeSquad from '../../assets/CS.PNG';
import SmartTech from '../../assets/smart tech sols.PNG';
import FoodAPP from '../../assets/food app.PNG'
import './Portfolio.css';


const Portfolio = () => {
  return (
    <div>

    <section className='portfolio' id='portfolio'>
    <div className='container'>

    <div className='section-title'>
     <h2>Recent Work</h2>
    </div>
    <div className='row gx-0 gy-3'>
    {/* <div className="card-group gx-5"> */}
    <div className="card col-sm-12 col-lg-4">
  <img className="card-img-top" src={CreativeSquad} alt="Card" />
  <div className="card-body">
    <h5 className="card-title">Creative Squad</h5>
    <p className="card-text">Creative Squad is a team of talented individuals aware of the current marketing trends ready to make use of analytics to provide its clients with the best ROI and effective marketing solutions.</p>
    <a rel="noreferrer" href="https://creativesquadagency.herokuapp.com/" target="_blank" className="LiveDemo">Live Preview</a>
  </div>
</div>

   <div className="card col-sm-12 col-lg-4">
  <img className="card-img-top" src={SmartTech} alt="Card" />
  <div className="card-body">
    <h5 className="card-title">Smart Tech Solutions</h5>
    <p className="card-text">STS is helping startups and enterprises alike to compete in the digital age by partnering with them to imagine, design, build, and deliver innovative mobile and digital products.</p>
    <a rel="noreferrer" href="https://smarttechsolutions.herokuapp.com/" className="LiveDemo" target="_blank">Live Preview</a>
  </div>
</div>

   <div className="card col-sm-12 col-lg-4">
  <img className="card-img-top" src={FoodAPP} alt="Card" />
  <div className="card-body">
    <h5 className="card-title">Food Ordering Application</h5>
    <p className="card-text">Food Ordering Application is a personal/practice project. This application is held responsible for holding clients' orders information and store it in firebase real-time database.</p>
    <a rel="noreferrer" href="https://foodmealsapplication.herokuapp.com/" className="LiveDemo" target="_blank">Live Preview</a>
  </div>
</div>
</div>
</div>

 {/* </div> */}
</section>

    </div>
  )
}

export default Portfolio