import React from 'react';
import {images} from "../../constants"

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding 'id='about'>
   <div className="app__aboutus-overlay flex__center">
    <img src={images.G} alt="" />
   </div>
   <div className="app__aboutus-content flex__center">
    <div className="app__aboutus-content_about">
       <h1 className='headtext__cormorant'>AboutUs</h1>
       <img src={images.spoon} alt="spoon"  className='spoon__img' />
       <p className='p__opensans'>Our application is designed to make your restaurant journey effortless and enjoyable. Whether you're craving a delightful breakfast, a satisfying lunch, or a gourmet dinner, our app is here to cater to your culinary desires.</p>
       <button className='custom__button'>Know More</button>
    </div>
      
      <div className="app__aboutus-content_knife flex__center">
       <img src={images.knife} alt="knife" />
      </div>

      <div className="app__aboutus-content_history">
       <h1 className='headtext__cormorant'>Our History</h1>
       <img src={images.spoon} alt="spoon"  className='spoon__img' />
       <p className='p__opensans'>Our application is designed to make your restaurant journey effortless and enjoyable. Whether you're craving a delightful breakfast, a satisfying lunch, or a gourmet dinner, our app is here to cater to your culinary desires.</p>
       <button className='custom__button'>Know More</button>
    </div>

   </div>
  </div>
);

export default AboutUs;
