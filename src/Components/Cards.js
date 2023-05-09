import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Experience</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/touch.png'
             
              // label='Adventure'
              path='https://www.touch.com.lb/autoforms/portal/touch'
              title= "TOUCH • Call Center Agent"
              time="November 2022 • February 2023" 
              coverImg="touch.png"
              location= "Beirut • Lebanon"
           />
            <CardItem
              src='images/IPT.png'
             
              // label='Luxury'
              path='https://iptpowertech.com/'
              title= "IPT POWERTECH • Intern"
              time="July • August 2022" 
              coverImg="touch.png"
              location= "Beirut • Lebanon"
            />
             <CardItem
              src='images/Ogero.jpg'
              
              // label='Mystery'
              path='https://www.ogero.gov.lb/'
              title= "OGERO • Intern"
              time="June • August 2021" 
              coverImg="touch.png"
              location= "Beirut • Lebanon"
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
