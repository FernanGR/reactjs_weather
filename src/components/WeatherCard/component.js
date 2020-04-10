import React from 'react';
import { styled } from '@emotion/styled';

const WeatherCard = (props) => {
  return(
    <div className="card">
      <div className="location">
        <h1 className='city'>Sydney</h1>
        <h3 className='country'> AU</h3>
      </div>
        <img className='icon' src="./img/Mostly Cloudy-2x.png" alt= "Weather Icon" />
        <h1 className='temp'>20 ºC</h1>
        <h3 className= 'condition'>Clouds</h3>
    </div>

  );
}
export default WeatherCard;
