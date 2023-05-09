import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/3.mp4' autoPlay   muted />
      
      <h1 >IF WE ARE NOT PRODUCTIVE, WHAT ARE WE?! WHAT IS OUR PURPOSE IF NOT TO SERVE 
                        AS ADVOCATES FOR OTHERS AND MAKE A LASTING IMPACT IN THIS EVER-EVOLVING WORLD? </h1>
                 <h1 >Hi! I'M AHMAD ITANI <br/>A COMMUNICATION ENGINEER & WEB DEV ENTHUSIAST  </h1>
                <h1 >WELCOME TO MY PAGE! THIS IS WHERE I HAVE THE OPPORTUNITY TO INTRODUCE MYSELF AND SHARE MY BACKGROUND,
                     SO THAT YOU CAN GET TO KNOW ME BETTER</h1>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
