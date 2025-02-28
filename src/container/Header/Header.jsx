import React from 'react';
import {SubHeading} from '../../components';
import {images} from '../../constants';

import './Header.css';

const Header = () => (
  <div className="app__header aoo__wrapper section__padding" id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the New Flavor" />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <button type="button" className='custom__button'>Explore Menu</button>
      </div>

      <div className='app__wrapper-img'>
      <img src={images.welcome} alt="Welcome" />
      </div>
  </div>
);

export default Header;
