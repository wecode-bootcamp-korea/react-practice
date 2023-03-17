import React, { useState, useEffect } from 'react';
import './Weather.scss';

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState({});

  const weather = {
    Sunny: { name: '맑음', weather: 'sunny' },
    Clouds: { name: '흐림', weather: 'cloud' },
    Rain: { name: '비', weather: 'rain' },
    Snow: { name: '눈', weather: 'snow' },
  };

  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=37.504764090676645&lon=127.04891436754845&appid=a0ef0068d3b8477e605bbb8f5aa0f043'
    )
      .then(res => res.json())
      .then(data => {
        for (let key in weather) {
          if (data.weather[0].main === key) {
            setCurrentWeather(weather[key]);
          }
        }
      });
  }, []);

  useEffect(() => {
    alert('날씨가 변경되었습니다.');
  }, [currentWeather]);

  const changeWeather = ele => {
    setCurrentWeather(weather[ele]);
  };

  return (
    <div>
      <p>현재 날씨</p>
      <img
        alt={currentWeather.name}
        src={`./images/${currentWeather.weather}.jpg`}
      />
      <div>
        {Object.keys(weather).map((ele, idx) => {
          return (
            <button key={idx} onClick={() => changeWeather(ele)}>
              {ele}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Weather;
