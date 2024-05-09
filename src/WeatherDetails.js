import React from 'react';
import AppDate from './AppDate';
import './Weather.css';
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      <div className='WeatherAppData'>
      <h1>{props.data.city}</h1>
      <ul className='WeatherTempDetails'>
        <li>
          <AppDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      </div>
      <div className="row temperature-input">
        <div className="col-7">
          
          <img className='WeatherIcon'
            src={`https://openweathermap.org/img/wn/${props.data.icon}.png`}
            alt="weather icon"
          />
          <WeatherTemperature celsius={props.data.temperature}/>
        
        </div>
        <div className="col-5 description">
          <ul>
            <li>Precipitation:<strong className='precipitation'> {props.data.precipitation.rain}mm</strong></li>
            <li>Humidity: <strong className='humidity'>{props.data.humidity}%</strong></li>
            <li>Wind: <strong className='wind'>{props.data.wind} km/h </strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
}