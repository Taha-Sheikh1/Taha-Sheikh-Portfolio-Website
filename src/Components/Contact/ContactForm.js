import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import './Contact.css'



const ContactForm = () => {


  const [userMessage, setUserMessage] = useState({
    username: '',
    useremail: '',
    usersubject: '',
    usermessage: ''
}); 
const [Error, setError] = useState({
    NameError : false,
    EmailError : false,
    SubjectError : false,
    MessageError : false
});

const onNameChange = (evt) => {
    const Name = evt.target.value;
    if(Name.trim() === '' || isNaN(Name) === false){
        setError((prevState) => {
            return {...prevState, NameError: true}
        })
        setUserMessage((prevState) => {
            return {...prevState, username: ''}
    })
     } else {
        setError((prevState) => {
            return {...prevState, NameError: false}
        })
    setUserMessage((prevState) => {
        return {...prevState, username: Name}
    })
}
}

const onEmailChange = (evt) => {
    const Email = evt.target.value;
    if(Email.includes('@')) {
        setError((prevState) => {
            return {...prevState, EmailError: false}
        })
        setUserMessage((prevState) => {
            return {...prevState, useremail: Email}
         })
    } else {
        setError((prevState) => {
            return {...prevState, EmailError: true}
        })
        setUserMessage((prevState) => {
            return {...prevState, useremail: Email}

    })}}

    const onSubjectChange = (evt) => {
      const Subject = evt.target.value;
      if(Subject.length < 80) {
          setError((prevState) => {
              return {...prevState, SubjectError: false}
          })
          setUserMessage((prevState) => {
              return {...prevState, usersubject: Subject}
           })
      } else {
          setError((prevState) => {
              return {...prevState, SubjectError: true}
          })
          setUserMessage((prevState) => {
              return {...prevState, usersubject: Subject}
           })
      } 
  }


const onMessageChange = (evt) => {
    const Msg = evt.target.value;
    if(Msg.length < 1500) {
        setError((prevState) => {
            return {...prevState, MessageError: false}
        })
        setUserMessage((prevState) => {
            return {...prevState, usermessage: Msg}
         })
    } else {
        setError((prevState) => {
            return {...prevState, MessageError: true}
        })
        setUserMessage((prevState) => {
            return {...prevState, usermessage: Msg}
         })
    } 
    
}


const SubmitHandler = (e) => {
 e.preventDefault();

  if(userMessage.username === '' && userMessage.useremail === ''){
    setError((prevState) => {
        return {...prevState, NameError: true, EmailError: true}
    })
    return;
  }else {
    let template_params = {
      name: userMessage.username,
      email: userMessage.useremail,
      subject: userMessage.usersubject,
      message: userMessage.usermessage,
    }
    emailjs.send('service_g6ut0be', 'template_3w95r8i', template_params, 'vVJwCIJJT6cKJQBQB')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
   }, (err) => {
      console.log('FAILED...', err);
   });
  };
    setUserMessage({
       username: '',
       useremail: '',
       usersubject: '',
       usermessage: ''
   })
  
  }
  


  return (
    <div>
     <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title text-center mb-5">
          <h2>Contact</h2>
        </div>

        <div className="row mt-1">

          <div className="col-lg-4">
            <div className="info">

              <div className="email">
                <FontAwesomeIcon icon={faEnvelope} className='email-icon' />
                <h4>Email:</h4>
                <p>sheikhtaha472@gmail.com</p>
              </div>

              <div className="phone">
              <FontAwesomeIcon icon={faPhone} className='phone-icon' />
                <h4>Call:</h4>
                <p>+92 3332843681</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

            <form action="/send" method="POST" className="email-form" onSubmit={SubmitHandler}>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" onChange={onNameChange} value={userMessage.username} />
                  {Error.NameError && <p className='ValidityError'>Please Enter your Name!</p>}
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" onChange={onEmailChange} value={userMessage.useremail} />
                  {Error.EmailError && <p className='ValidityError'>Your email must include '@'</p>}
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" onChange={onSubjectChange} value={userMessage.usersubject} />
                {Error.SubjectError && <p className='ValidityError'>Please make your subject short, max characters limit reached!</p>}
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" onChange={onMessageChange} value={userMessage.usermessage}></textarea>
                {Error.MessageError && <p className='ValidityError'>Please make your message short, max characters limit reached!</p>}
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default ContactForm