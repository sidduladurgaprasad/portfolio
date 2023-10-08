import React, { useEffect, useState } from 'react';
import './styles/Certificates.css';

import c1 from './images/certificates/1.png';
import c2 from './images/certificates/7.jpeg';
import c3 from './images/certificates/3.jpg';
import c4 from './images/certificates/2.jpg';
import c5 from './images/certificates/5.jpeg';
import c6 from './images/certificates/6.jpeg';
import c7 from './images/certificates/4.jpg';

import m1 from './images/certificates/m1.jpeg';
import m2 from './images/certificates/m2.jpg';
import m3 from './images/certificates/m3.jpg';

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const courseCertificates = [
    {
      icon: c1,
      name: 'Deep Learning Workshop',
    },
    {
      icon: c2,
      name: 'Git Training',
    },
    {
      icon: c3,
      name: 'Android App Development',
    },
    {
      icon: c4,
      name: 'The Complete Web Developer Course',
    },
    {
      icon: c5,
      name: 'Programming with Python 3.X',
    },
    {
      icon: c6,
      name: 'Big Data Computing',
    },
    {
      icon: c7,
      name: 'Data Structures and Algorithms',
    },
  ];

  const meritCertificate = [
    {
      icon: m1,
      name: 'CBIT Hacktoberfest Hackathon',
    },
    {
      icon: m2,
      name: 'My Big Idea Hackathon',
    },
    {
      icon: m3,
      name: 'Convergence Project Contest',
    },
  ];

  const handleCertificateClick = (certificate, index) => {
    setSelectedCertificate(certificate);
    setCurrentIndex(index);
  };

  const closeExpandedCertificate = () => {
    setSelectedCertificate(null);
    setCurrentIndex(null);
  };



  return (
    <div className="background">
      <div className="certificateTop"></div>
      <div className="bg-white">
        <h3 className="text-center titles">Course Completion Certificates</h3>
        <div className="container my-5">
          <div className="row justify-content-around">
            {courseCertificates.map((certificate, index) => (
              <div
                key={index}
                className={`col-10 col-md-5 col-lg-5 text-center eachCourseCertifiate ${
                  selectedCertificate === certificate ? 'expanded' : ''
                }`}
                onClick={() => handleCertificateClick(certificate, index)}
              >
                <img src={certificate.icon} width="100%" alt="Certificate" />
                <p className="bg-black text-white mt-4 mb-0">{certificate.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-black text-white">
        <h3 className="text-center titles">Merit Certificates</h3>
        <div className="container my-5">
          <div className="row justify-content-around">
            {meritCertificate.map((certificate, index) => (
              <div
                key={index}
                className={`col-10 col-md-5 col-lg-5 text-center eachMeritCertificate ${
                  selectedCertificate === certificate ? 'expanded' : ''
                }`}
                onClick={() => handleCertificateClick(certificate, index)}
              >
                <img src={certificate.icon} width="100%" alt="Certificate" />
                <p className="mt-4 mb-0">{certificate.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedCertificate && (
        <div className="expanded" onClick={closeExpandedCertificate}>
          <button className="closeButton" onClick={closeExpandedCertificate}>
            X
          </button>
          <img src={selectedCertificate.icon} alt="Expanded Certificate" />
        </div>
      )}
    </div>
  );
}

export default Certificates;
