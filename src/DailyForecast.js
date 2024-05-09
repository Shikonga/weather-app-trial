import React from "react";
import './Weather.css';


export default function DailyForecast(props) {
  function maxTemperature() {
    return `${Math.round(props.data.temp.max)}°`;
  }

  function minTemperature() {
    return `${Math.round(props.data.temp.min)}°`;
  }

  function day() {
    const date = new Date(props.data.dt * 1000);
    const dayIndex = date.getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[dayIndex];
  }

  function getIconUrl(iconCode) {
    return `http://openweathermap.org/img/wn/${iconCode}.png`;
  }

  return (
    <div className="daySection">
      <div className="WeatherForecast-day">{day()}</div>
      <img src={getIconUrl(props.data.weather[0].icon)} alt="Weather icon" />
      <div className="WeatherForecast-temperatures">
        <strong><span className="WeatherForecast-temperature-max">{maxTemperature()}</span></strong> <span className="WeatherForecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
    
  );
}