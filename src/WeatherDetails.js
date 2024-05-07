import React from 'react';
import AppDate from './AppDate';

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
            src={`https://openweathermap.org/img/wn/${props.data.icon}.png`}
            alt="weather icon"
          />
          <strong className="temperature">
            <span>{props.data.temperature}</span>
          </strong>
          <span className="unit">°C</span>
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