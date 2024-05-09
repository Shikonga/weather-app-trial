import React, {useState} from 'react';
import WeatherDetails from './WeatherDetails';
import WeatherForecast from './WeatherForecast';
import './Weather.css';
import axios from "axios"
import DailyForecast from './DailyForecast';


export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let[weatherData,setWeatherData] = useState({ready: false})
  
  
  function handleResponse(response){
    setWeatherData({
   ready:true,     
   coordinates: response.data.coord,     
   temperature: Math.round(response.data.main.temp),
   city: response.data.name,
   wind:response.data.wind.speed,
   date: new Date(response.data.dt * 1000),
   humidity: response.data.main.humidity,
   icon: response.data.weather[0].icon,
   description: response.data.weather[0].description,
   precipitation: {
    rain: response.data.rain && response.data.rain['1h'] ? response.data.rain['1h'] : 0,

  }
 });
}

function handleSearch(event) {
  event.preventDefault();
  search()
}
function showCity(event){
    setCity(event.target.value)
  }

function search () {
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf54175800a55e59e6c4d6461deeef12&units=metric`;
axios.get(url).then(handleResponse);
     }


  if (weatherData.ready){
    return (
    <div className="WeatherApp">
      <form onSubmit={handleSearch}>
        <header>
          <input type="text" placeholder="Enter a city.." className="Form-Control searchCity" onChange={showCity}/>
          <button className='buttonSearch'>Search</button>
        </header>
      </form>
      <WeatherDetails data={weatherData} />
      <WeatherForecast coordinates={weatherData.coordinates} /> 
      </div>
    );
} else {
    search();
    return "Loading...";
}
}

