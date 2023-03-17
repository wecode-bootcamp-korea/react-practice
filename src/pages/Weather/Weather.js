import React, { useState, useEffect } from 'react';
import './Weather.scss';

const Weather = () => {
  const weather = {
    Sunny: { name: '맑음', weather: 'sunny' },
    Clouds: { name: '흐림', weather: 'cloud' },
    Rain: { name: '비', weather: 'rain' },
    Snow: { name: '눈', weather: 'snow' },
  };

  // fetch(
  //   'https://api.openweathermap.org/data/2.5/weather?lat=37.504764090676645&lon=127.04891436754845&appid=a0ef0068d3b8477e605bbb8f5aa0f043'
  // )
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //   });

  return (
    <div>
      <p>현재 날씨</p>
      <img />
      <div>
        <button>Sunny</button>
        <button>Clouds</button>
        <button>Rain</button>
        <button>Snow</button>
      </div>
    </div>
  );
};

export default Weather;
