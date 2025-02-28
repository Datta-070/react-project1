import React from 'react';

import {images} from "../../constants"
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__' id="about">
    <div className='app__aboutus-overlay flex__center'>
  <img src={images.G} alt="G letter"/>
  </div>
  <div className='app__aboutus-content flex__center'>
    <div className='app__aboutus-content_about'>
      <h1 className='headtext__cormorant'>About Us</h1>
      <img src={images.spoon} alt="About_spoon" className='spoon__image'/>
      <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <button type="button" className='custom__button'>Know More</button>
    </div>

    <div className='app__aboutus-content_knife flex__center'>
      <img src={images.knife} alt="about_knife" />
    </div>

    <div className='app__aboutus-content_history'>
      <h1 className='headtext__cormorant'>Our History</h1>
      <img src={images.spoon} alt="About_spoon" className='spoon__image'/>
      <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <button type="button" className='custom__button'>Know More</button>
    </div>

  </div>
</div>
);

export default AboutUs;
