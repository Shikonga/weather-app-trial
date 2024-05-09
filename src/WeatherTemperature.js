import React,{useState} from "react";
import './Weather.css';

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function convertFahrenheit(event) {
      event.preventDefault();
      setUnit("fahrenheit");
    }
  
    function convertCelsius(event) {
      event.preventDefault();
      setUnit("celsius");
    }
  
     
    if (unit === "celsius") {
      return (
        
        <div className="WeatherTemperature">
          <strong className="currentTemp"></strong><span>{Math.round(props.celsius)}</span>
          <span className="unit">
            °C | {" "}
            <a href="/" onClick={convertFahrenheit}>
            °F
            </a>
          </span>
        </div>
      );
    } else {
        let fahrenheit = (props.celsius * 9) / 5 + 32;
      return (
        <div className="WeatherTemperature">
          
          <span className="currentTemp">{Math.round(fahrenheit)}</span>
          <span className="unit">
            <a href="/" onClick={convertCelsius}>
              °C
            </a>{" "}
            | °F
          </span>
        </div>
        
      );
    }
  }