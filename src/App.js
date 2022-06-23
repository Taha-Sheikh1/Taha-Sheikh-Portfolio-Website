import React from "react";
import Header from "./Components/Header/Header";
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Technologies from './Components/Technologies/Technologies';
import Resume from './Components/Resume/Resume';
import Portfolio from './Components/Portfolio/Portfolio'
import ContactForm from './Components/Contact/ContactForm';
import './App.css';



function App() {

  return (
    <React.Fragment>

       <Header />
       <Hero />
       <About />
       <Services />
       <Resume />
       <Technologies />
       <Portfolio />
       <ContactForm />
       <Footer />

    </React.Fragment>
  );

}

export default App;
