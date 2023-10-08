import './App.css';
import { Link, Route, Routes, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Certificates from './Components/Certificates';
import ContactUs from './Components/ContactUs';
import navBtn from './Components/images/navbtn.png';
import navicon from './Components/images/navicon.png';
import resumePDF from './Components/images/contact/S DURGA PRASAD Resume.pdf';

function App() {
  let [status, setStatus] = useState("false");
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'resume.pdf';
    link.click();
  };
  return (
    <div>
      <div className='smallNav'>
        <img src={navicon} height='70%' className='navIcon' />
        <div className='forIcon'></div>
        <button
          className='navBtn'
          onClick={() => {
            status === "true" ? setStatus("false") : setStatus("true");
          }}
        >
          <img src={navBtn} width="50vh" />
        </button>
      </div>
      <div className='ProfileNavbar row justify-content-around'>
        <NavLink
          exact
          to=''
          className='navItems col-2'
          activeClassName='active' // Add the activeClassName prop with the desired CSS class name
        >
          Home
        </NavLink>
        <NavLink
          to='skills'
          className='navItems col-2'
          activeClassName='active'
        >
          Skills
        </NavLink>
        <NavLink
          to='projects'
          className='navItems col-2'
          activeClassName='active'
        >
          Projects
        </NavLink>
        <NavLink
          to='certificates'
          className='navItems col-2'
          activeClassName='active'
        >
          Certificates
        </NavLink>
        <NavLink
          to='contactus'
          className='navItems col-2'
          activeClassName='active'
        >
          ContactUs
        </NavLink>
        <button
              onClick={handleDownloadResume}
              className="resume-download-button"
            >
              <span>Download Resume</span>
              <span className="arrow" />
            </button>
      </div>

      {/* conditional rendering */}
      {status === "true" && (
        <div className='dropdown'>
          <div className='smallnav '>
            <div className='row'>
              <NavLink
                exact
                to=''
                className='navItems col-12 p-3'
                onClick={() => {
                  status === "true"
                    ? setStatus("false")
                    : setStatus("true");
                }}
                activeClassName='active'
              >
                Home
              </NavLink>
              <NavLink
                to='skills'
                className='navItems col-12 p-3'
                onClick={() => {
                  status === "true"
                    ? setStatus("false")
                    : setStatus("true");
                }}
                activeClassName='active'
              >
                Skills
              </NavLink>
              <NavLink
                to='projects'
                className='navItems col-12 p-3'
                onClick={() => {
                  status === "true"
                    ? setStatus("false")
                    : setStatus("true");
                }}
                activeClassName='active'
              >
                Projects
              </NavLink>
              <NavLink
                to='certificates'
                className='navItems col-12 p-3'
                onClick={() => {
                  status === "true"
                    ? setStatus("false")
                    : setStatus("true");
                }}
                activeClassName='active'
              >
                Certificates
              </NavLink>
              <NavLink
                to='contactus'
                className='navItems col-12 p-3'
                onClick={() => {
                  status === "true"
                    ? setStatus("false")
                    : setStatus("true");
                }}
                activeClassName='active'
              >
                ContactUs
              </NavLink>
              <button
              onClick={handleDownloadResume}
              className="resume-download-button"
            >
              <span>Download Resume</span>
              <span className="arrow" />
            </button>
            </div>
          </div>
        </div>
      )}

      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/certificates' element={<Certificates />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
