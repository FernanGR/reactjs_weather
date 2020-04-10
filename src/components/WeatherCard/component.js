import React from 'react';
import styled from '@emotion/styled';

import Location from './Location';
import Icon from './Icon';
import Condition from './Condition';

const WeatherCard = (props) => {

  let highColor = 0;
  let lowColor = 0;
  let bg = null;

  if(props.temp >12){
    highColor = (1 -(props.temp-12)/28)*255;
    lowColor = highColor - 150;
    bg = ` linear-gradient(to top,
      rgb(255,${highColor},0),
      rgb(255,${lowColor},0)
     )`;
  }else if(props.temp <=12){
    highColor = (1 -(props.temp+20)/32)*255;
    lowColor = highColor - 150;
    bg = ` linear-gradient(to top,
      rgb(0,${highColor},255),
      rgb(0,${highColor},255)
     )`;
  }
  const Card = styled.div`
      margin: 0 auto ;
      padding-top:  10px;
      padding-bottom: 20px;
      background: ${bg};
      width: 200px;
      height: 240px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      border-radius: 15px;
    /*  display: inline-block;*/

`


  return(
    <Card className="card">
        <Location />
        <Icon />
        <Condition />
    </Card>
  );
}
export default WeatherCard;
