import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact from './images/contact/contact-illustration.gif';
import resumePDF from './images/contact/S DURGA PRASAD Resume.pdf';
import icon from './images/contact/resume-icon.jpg';
import './styles/ContactUs.css';

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form);
    emailjs
      .sendForm('service_9pjsv0k', 'template_k03ndme', form.current, 'vas-CPusWoNonYl9o')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <div>
      <div className="contactUsTop"></div>
      <div className="contact-container">
        <div className="contact-gif-container p-4">
          <img src={contact} alt="no gif" className="contact-gif" />
        </div>
        <div className="contact-form-container">
          <div className="mt-5 mx-3 pt-5">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <label htmlFor="mailid" className="form-label">
                Email
              </label>
              <input type="email" name="mailid" id="mailid" className="form-input" />
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input type="text" name="subject" id="subject" className="form-input" />
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea name="message" id="message" className="form-textarea" />
              <input type="submit" value="Send" className="form-submit" />
              {/* <img src={icon} className="resume-icon" width="40%"></img>
              <button
              onClick={handleDownloadResume}
              className="resume-download-button"
            >
              <span>Download Resume</span>
              <span className="arrow" />
            </button> */}
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
