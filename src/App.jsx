import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const search=()=>{
    const apiKey="2b3d5b677810e747f84a916a739c0924";
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2b3d5b677810e747f84a916a739c0924&units=metric`)

      .then(response => response.json())
      .then(data => {
        setWeather({
          city:data.name,
          temp:data.main.temp,
          condition:data.weather[0].main
        });
        console.log(data);
      });
  };
const[city, setCity] = useState("");
const[weather, setWeather] = useState(null);
  return (
    <>
    <h1>Weather App</h1>
    <div className="search-bar">
    <input id="in" type="text" placeholder='Enter the name of the city'
    value={city} onChange={(event) => setCity(event.target.value)}
    />
 <button onClick={search}>Search</button>
</div>
    {weather && (
      <div className="weather-result">
        <h2>{weather.city}</h2>
        <p>Teperature: {weather.temp}°C</p>
        <p>Condition: {weather.condition}</p>
      </div>
    )}
    </>
  );
}

export default App
