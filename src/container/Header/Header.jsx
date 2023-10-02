import React from 'react';
import {SubHeading} from '../../components'

import './Header.css';
import images from '../../constants/images';

const Header = () => (
 
   <div className="app__haader app__wrapper section__padding" id='#home'>
    <div className="app__wrapper-info">
     <SubHeading title="Chase the new flavour"/>
     <h1 className='app_header-h1'>The key to find Dining</h1>
     <p className='p__cormorant' style={{margin:'2rem 0'}}>Welcome to our restaurant! We have been serving delicious food to our customers for over 20 years. Our mission is to provide a comfortable and enjoyable dining experience for everyone who visits us.</p>
     <button className='custom__button'> Explore Menu</button>
     </div>
     <div className="app__wrapper-img">
      <img src={images.welcome} alt="header img" />

   
    </div>
 
   
  
  </div>
);

export default Header;
