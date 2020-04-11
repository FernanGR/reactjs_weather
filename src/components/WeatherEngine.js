import React, {useState, useEffect} from 'react';

import WeatherCard from "./WeatherCard/component";

const WeatherEngine = ({location}) => {
const [query, setQuery] = useState('');
const [weather, setWeather] = useState({
  temp: null,
  city: null,
  condition: null,
  country: null
});


const getWeather = async (q) => {
  const apiRes = await fetch
  (`http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=37869e478effbcdde9a2e9adc326d2bd`
  );
  const resJSON = await apiRes.json();
  setWeather({
    temp:resJSON.main.temp,
    city: resJSON.name,
    condition:resJSON.weather[0].main,
    country:resJSON.sys.country
  });};

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query)
   };

useEffect(() => {
  getWeather(location)
},[location])



  return (
    <div className="App">
    <WeatherCard
    temp={weather.temp}
    condition = {weather.condition}
    city={weather.city}
    country={weather.country} />

    <form>
      <input
        value = {query} onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={e=>handleSearch(e)}> Search</button>
    </form>
    </div>
  );
}

export default WeatherEngine;
