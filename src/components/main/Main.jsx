import React, { useEffect } from 'react';
import fullpage from 'fullpage.js';
import './Main.css';
import firstImage from '../assets/firstImage.png'
import secondImage from '../assets/secondImage.png'
import thirdImage from '../assets/thirdImage.png'
import fourthImage from '../assets/fourthImage.png'
import {BiLogoTelegram} from  'react-icons'


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
        <div className='logo' ></div>
        <div className='homeContent'>
        <h1 className='homeTextHeader'>Experience the Thrill of Belote, the Card Game Masterpiece!</h1>
        <p className='homeTextParagraph'>Belote: Where Strategy Meets Fun</p>
     <div className='linksSection'>
          <a href="https://t.me/BeloteClub" target="_blank" > <div className='telegram'></div> </a>
         <div className='socialMedia'>
          <a href="#" ><div className='appStore'> </div></a>
          <a href="#"> <div className='playMarket'></div></a>
         </div>
     </div>
   </div>
 </div>



  <div className="section about">
   <div className='aboutContent'>
     <div className='phoneVertical'> <img className='verticalPhoneImage' src={firstImage} alt="Belote" /></div>
         <div className='aboutTextContent'>
          <h2 className='aboutTextHeader'>Your ultimate Belote companion, anytime, anywhere!</h2>
          <p className='aboutTextParagraph'> Discover the captivating world of Belote, where <br></br>strategy meets excitement, and friendships are forged through every<br></br> card played!Immerse yourself in the rich tradition of Belote, where every move counts, and <br></br>the thrill of outsmarting your opponents brings.</p>
        </div>
     </div> 
  </div>







      <div className="section contact">
        <div className='contactContent'>
        <div className='phoneHorizontal'> <img className='horizontalPhoneImage' src={secondImage}alt="Belote" /></div>
        <div className='contactTextContent'>
        <h2 className='contactTextHeader'>Join the Belote community and play like a pro</h2>
        <p className='contactTextParagraph'>Discover the captivating world of Belote, where <br></br>strategy meets excitement, and friendships are forged through every<br></br> card played!Immerse yourself in the rich tradition of Belote, where every move counts, and <br></br>the thrill of outsmarting your opponents brings<br></br> unparalleled satisfaction</p>
        </div>
        </div>
      </div>








      <div className="section intro">
        <div className='introContent'>
        <div className='introTextContent'>
          <h2 className='introTextHeader'>Your ultimate Belote companion, anytime, anywhere!</h2>
          <p className='introTextParagraph'> Discover the captivating world of Belote, where <br></br>strategy meets excitement, and friendships are forged through every<br></br> card played!Immerse yourself in the rich tradition of Belote, where every move counts, and <br></br>the thrill of outsmarting your opponents brings.<br></br> unparalleled satisfaction</p>
        </div>
        <div className='phoneVertical'> <img className='verticalPhoneImage' src={thirdImage} alt="Belote" /></div>
        </div>
      </div>










      
  <div className="section info">
      <div className='infoContent'>
     <div className='phoneVertical'> <img className='verticalPhoneImage' src={fourthImage} alt="Belote" /></div>
         <div className='infoTextContent'>
          <h2 className='infoTextHeader'>Your ultimate Belote companion, anytime, anywhere!</h2>
          <p className='infoTextParagraph'> Discover the captivating world of Belote, where <br></br>strategy meets excitement, and friendships are forged through every<br></br> card played!Immerse yourself in the rich tradition of Belote, where every move counts, and <br></br>the thrill of outsmarting your opponents brings.</p>
        </div>
     </div>

  </div>













 <div className="section footer">   
    <div className='footerContent'>
        <h1 className='footerHeaderText'>Experience the Thrill of Belote, the Card Game Masterpiece!</h1>
        <p className='footerTextParagraph'>Play Anytime, Anywhere: No need to wait for a card-playing partner or gather a group of friends. Our app allows you<br></br> to enjoy Belote whenever and wherever you want,right from the palm of your hand.</p>
     <div className='linksSection'>
          <a href="https://t.me/BeloteClub" target="_blank"> <div className='telegram'></div> </a>
         <div className='socialMedia'>
          <a href="#"><div className='appStore'> </div></a>
          <a href="#"> <div className='playMarket'></div></a>
        </div>
     </div>
     <p className='allRightsReservedSection'>All Rights Reserved © Belote Club 2023</p>
  </div>

 </div>


    </div>

  );
};

export default Main;
