import React, { useEffect } from 'react';
import fullpage from 'fullpage.js';
import './Main.css';

const Main = () => {

  useEffect(() => {
    new fullpage("#fullPage", {
      autoScrolling: true,
      navigation: true,
      navigationTooltips: ['Home', 'About', 'Contact', 'Intro', 'Info', 'Footer'],
      showActiveTooltip: true,

    });
  }, []);

  return (

    <div id='fullPage'>


    <div className="section home">
        <div className='logo'></div>
        <div className='homeContent'>
        <h1>Experience the Thrill of Belote, the Card Game Masterpiece!</h1>
        <p>Belote: Where Strategy Meets Fun</p>
     <div className='qrSection'>
          <a href="#"> <div className='qrCode'></div> </a>
         <div className='socialMedia'>
          <a href="#"><div className='apple'></div></a>
          <a href="#"> <div className='android'></div></a>
         </div>
     </div>
   </div>
 </div>



      <div className="section about">
        <p>Section 2</p>
      </div>
      <div className="section contact">
        <p>Section 3</p>
      </div>
      <div className="section intro">
        <p>Section 4</p>
      </div>
      <div className="section info">
        <p>Section 5</p>
      </div>
      <div className="section footer">
        <p>Section 6</p>
      </div>
    </div>

  );
};

export default Main;
