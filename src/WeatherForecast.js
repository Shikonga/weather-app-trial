import React, { useState, useEffect } from "react";
import axios from "axios";
import DailyForecast from "./DailyForecast";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    loadForecast();
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function loadForecast() {
    const { lon, lat } = props.coordinates;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=bf54175800a55e59e6c4d6461deeef12&units=metric&exclude=current,minutely,hourly,alerts`;

    axios.get(apiUrl)
      .then(handleResponse)
      .catch(error => {
        console.error('Error fetching weather forecast:', error);
      });
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map((dailyForecast, index) => {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <DailyForecast data={dailyForecast} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    return <div>Loading forecast...</div>;
  }
}