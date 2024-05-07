import React from 'react';
import AppDate from './AppDate';
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <AppDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
          <img className='WeatherIcon'
            src={`https://openweathermap.org/img/wn/${props.data.icon}.png`}
            alt="weather icon"
          />
          <WeatherTemperature celsius={props.data.temperature}/>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation 1%</li>
            <li>Humidity: {props.data.humidity}</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}