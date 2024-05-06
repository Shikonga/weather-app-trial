import React, {useState, useEffect} from 'react';
import './App.css';
import  AppDate  from './AppDate.js';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  let [city, setCity] = useState("Nairobi");
  let[weatherData,setWeatherData] = useState({})
  
  function showCity(event){
    setCity(event.target.value)
  }

  function handleResponse(response){
    setWeatherData({
   temperature: Math.round(response.data.main.temp),
   city: response.data.name,
   wind:response.data.wind.speed,
   date: new Date(response.data.dt * 1000),
   humidity: response.data.main.humidity,
   description: response.data.weather[0].description,
 });
}

function handleSearch(event) {
  event.preventDefault();
  const cityNameInput = event.target.elements.city;
  if (cityNameInput) {
    const cityName = cityNameInput.value;
    setCity(cityName);
  } else {
    console.error('City input element not found.');
  }
}
  
  
  useEffect(function() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf54175800a55e59e6c4d6461deeef12&units=metric`;
    axios.get(url).then(handleResponse)
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
  }, [city]);

  
  return (
    <div className="WeatherApp">
      <form onSubmit={handleSearch}>
        <div className='row'>
          <div className='col-9'>
          <input type="text" placeholder="Enter a city.." className="Form-Control w-100 h-100" autoFocus onChange={showCity}/>
          </div>
          <div className='col-3'>
             <input type="Submit" value="Search" className=" btn btn-primary"/>
          </div>
        </div>
       
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li> <AppDate date={weatherData.date}/></li>
        <li className='text-capitalize'>{weatherData.description}</li>
      </ul> 
      <div className='row'>
      <div className='col-6'>
      <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="weather-Newyork" />
      <strong className='temperature'><span>{weatherData.temperature}</span></strong>
      <span className='unit'>°C</span>
      </div>
      <div className='col-6'>
        <ul>
        <li>Precipitation 1%</li>
        <li>Humidity: {weatherData.humidity}</li>
        <li>Wind: {weatherData.wind}km/h</li>
        </ul>
      </div>
      </div>

    <div className='row'>


    </div>
       
    </div>
  );
}

