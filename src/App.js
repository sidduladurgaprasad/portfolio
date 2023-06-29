import './App.css';
import { Link, Route, Routes} from 'react-router-dom';
import {useState, useEffect} from 'react';

import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Certificates from './Components/Certificates';
import navBtn from './Components/images/navbtn.png';
import navicon from './Components/images/navicon.png';

function App() {

  let [status,SetStatus] = useState("false");



  return (
    <div>
      <div className='smallNav'>
        <img src={navicon} height='70%' className='navIcon'/>
        <div className='forIcon'></div>
        <button className='navBtn' onClick={()=> {status==="true" ? SetStatus("false") : SetStatus("true")}} ><img src={navBtn} width="50vh" /></button>
      </div>
      <div className='ProfileNavbar row justify-content-around'>
            <Link to='' className='navItems col-2'>Home</Link>
            <Link to='skills'  className='navItems col-2 '>Skills</Link>
            <Link to='projects'  className='navItems col-2'>Projects</Link>
            <Link to='certificates'  className='navItems col-2'>Certificates</Link>
      </div>

      {/* conditional rendering */}
      {
          (status === "true") &&  
          <div className='dropdown'>
            <div className='smallnav '>
              <div className='row'>
                  <Link to='' className='navItems col-12 p-3' onClick={()=> {status==="true" ? SetStatus("false") : SetStatus("true")}}>Home</Link>
                  <Link to='skills'  className='navItems col-12 p-3' onClick={()=> {status==="true" ? SetStatus("false") : SetStatus("true")}}>Skills</Link>
                  <Link to='projects'  className='navItems col-12 p-3' onClick={()=> {status==="true" ? SetStatus("false") : SetStatus("true")}}>Projects</Link>
                  <Link to='certificates'  className='navItems col-12 p-3' onClick={()=> {status==="true" ? SetStatus("false") : SetStatus("true")}}>Certificates</Link>
              </div>
            </div>
          </div>
        }

      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/certificates' element={<Certificates/>}/>
      </Routes>
    </div>
   
  );
}

export default App;
