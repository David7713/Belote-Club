import React, { useEffect } from 'react';
import fullpage from 'fullpage.js';

//Styles//
import './Main.css';
import './../styles/Home/Home.css'
import './../styles/About/About.css'
import './../styles/Contact/Contact.css'
import './../styles/Intro/Intro.css'
import './../styles/Info/Info.css'
import './../styles/Footer/Footer.css'

//Assets//
import firstImage from '../assets/firstImage.png'
import secondImage from '../assets/secondImage.png'
import thirdImage from '../assets/thirdImage.png'
import fourthImage from '../assets/fourthImage.png'
import telegramImage from '../assets/telegram.png'
import appStoreImage from '../assets/Appstore.png'
import playMarketImage from '../assets/Playmarket.png'
import logo from '../assets/logo.svg'


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
        <div className='logo' >
          <img src={logo}></img>
        </div>
        <div className='homeContent'>
          <h1 className='homeTextHeader'>Experience the Thrill of Belote, the Card Game Masterpiece!</h1>
          <p className='homeTextParagraph'>Belote: Where Strategy Meets Fun</p>
          <div className='linksSection'>
            <a href="https://t.me/BeloteClub" target="_blank" > <div className='telegram'>
              <img  className='telegram' src={telegramImage}></img></div> </a>
            <div className='socialMedia'>
              <a href="#" ><div className='appStore'> <img className='appStore' src={appStoreImage}></img></div></a>
              <a href="#"> <div className='playMarket'>
                <img  className="playMarket" src={playMarketImage}></img></div></a>
            </div>
          </div>
        </div>
      </div>



      <div className="section about">
        <div className='aboutContent'>
          <div className='phoneVertical'> <img className='verticalPhoneImage' src={firstImage} alt="Belote" /></div>
          <div className='aboutTextContent'>
            <h2 className='aboutTextHeader'>Your ultimate Belote companion, anytime, anywhere!</h2>
            <p className='aboutTextParagraph'> Explore the magical universe of Belote, where <br></br>strategy meets excitement, and friendships are formed with every<br></br> card played! Immerse yourself in the vibrant history of Belote, where every move tells a story, and <br></br>the thrill of outplaying your opponents awaits.</p>

          </div>
        </div>
      </div>







      <div className="section contact">
        <div className='contactContent'>
          <div className='phoneHorizontal'> <img className='horizontalPhoneImage' src={secondImage} alt="Belote" /></div>
          <div className='contactTextContent'>
            <h2 className='contactTextHeader'>Join the Belote community and play like a pro</h2>
            <p className='contactTextParagraph'>Step into the mesmerizing realm of Belote, where <br></br>strategy fuses with excitement, and camaraderie is built with every<br></br> card played! Immerse yourself in the cultural heritage of Belote, where every move resonates, and <br></br>the thrill of outsmarting your opponents awaits.</p>

          </div>
        </div>
      </div>








      <div className="section intro">
        <div className='introContent'>
          <div className='introTextContent'>
            <h2 className='introTextHeader'>Belote Master: Your Ultimate Companion, Anytime, Anywhere!</h2>
            <p className='introTextParagraph'> Discover the captivating world of Belote, where <br></br>strategy meets excitement, and friendships are forged through every<br></br> card played!Immerse yourself in the rich tradition of Belote, where every move counts, and <br></br>the thrill of outsmarting your opponents brings.</p>
          </div>
          <div className='phoneVertical'> <img className='verticalPhoneImage' src={thirdImage} alt="Belote" /></div>
        </div>
      </div>











      <div className="section info">
        <div className='infoContent'>
          <div className='phoneVertical'> <img className='verticalPhoneImage' src={fourthImage} alt="Belote" /></div>
          <div className='infoTextContent'>
            <h2 className='infoTextHeader'>Ace of Belote: Your Action-Packed Companion, Anytime, Anywhere!</h2>
            <p className='infoTextParagraph'> Dive into the captivating universe of Belote, where <br></br>strategy converges with excitement, and friendships are woven with every<br></br> card played! Immerse yourself in the rich tapestry of Belote, where every move matters, and <br></br>the exhilaration of outplaying your opponents awaits.</p>

          </div>
        </div>

      </div>













      <div className="section footer">
        <div className='footerContent'>
          <div className="footerTextContent">
            <h1 className='footerTextHeader'>Discover the Excitement of Belote, the Ultimate Card Game Adventure!</h1>
            <p className='footerTextParagraph'>Play Anytime, Anywhere: No need to wait for a card-playing partner or gather a group of friends. Our app allows you<br></br> to enjoy Belote whenever and wherever you want,right from the palm of your hand.</p>
          </div>
          <div className='linksSection'>
          <a href="https://t.me/BeloteClub" target="_blank" > <div className='telegram'>
              <img  className='telegram' src={telegramImage}></img></div> </a>
            <div className='socialMedia'>
            <a href="#" ><div className='appStore'> <img className='appStore' src={appStoreImage}></img></div></a>
              <a href="#"> <div className='playMarket'>
                <img  className="playMarket" src={playMarketImage}></img></div></a>
            </div>
          </div>
          <p className='allRightsReservedSection'>All Rights Reserved © Belote Club 2023</p>
        </div>

      </div>


    </div>

  );
};

export default Main;
