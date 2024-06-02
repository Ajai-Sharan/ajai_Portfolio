import React from 'react';
import "./Home.css";
// import DevIcon from './dev.svg'; // replace './dev.svg' with the actual path of your SVG file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faDev, faInstagram, faReact } from '@fortawesome/free-brands-svg-icons';
import BannerImage from '../images/banner.jpg'
import TypeWritter from './TypeWritter';


function Home() {
  return (
    <div className="home">
      
      <div className='home_title'>

      <p id="title">
        Hello I am <i><FontAwesomeIcon icon={faDev} /></i> 
      </p>
      <p id="name">
        Ajai Sharan Velmurugan
      </p>
      <p id="developer">
      <TypeWritter 
      text = {[
        "A PASSIONATE SOFTWARE DEVELOPER",
        "MERN DEVELOPER"
      ]}
      typingSpeed = {100}
      deletingSpeed = {50}
      duration={1000}
      />
      </p>
      </div>

      <div className='home_img'>
      <img src={BannerImage} alt="banner.jpg" />
      </div>
    </div>
  );
}

export default Home;