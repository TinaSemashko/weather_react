import React, { useState } from "react";
import axios from "axios";
import ShowWeather from "./ShowWeather.js";
import Forecast from "./Forecast.js";

import "./Main.css";

export default function Main(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const apiKey = "1e0dcb1b35c33c85c8f53ba10ee78100";

  function showWeather(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function getStyleBackgraung(codeIcon) {
    const codeMapping = {
      "01d": "weather_sun",
      "01n": "weather_clear_night",
      "02d": "weather_few_clouds_day",
      "02n": "weather_few_clouds_night",
      "03d": "weather_scattered_clouds_day",
      "03n": "weather_scattered_clouds_night",
      "04d": "weather_broken_clouds_day",
      "04n": "weather_broken_clouds_night",
      "09d": "weather_shower_rain_day",
      "09n": "weather_shower_rain_night",
      "10d": "weather_rain_day",
      "10n": "weather_rain_night",
      "11d": "weather_thunderstorm_day",
      "11n": "weather_thunderstorm_night",
      "13d": "weather_snow_day",
      "13n": "weather_snow_night",
      "50d": "weather_mist_day",
      "50n": "weather_mist_night",
    };
    return codeMapping[codeIcon];
  }

  function showCurrWeather() {
    function handlePosition(position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      let apiUrlGeo = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric`;

      function showCurrWeatherData(response) {
        showWeather(response);
      }

      axios.get(`${apiUrlGeo}&appid=${apiKey}`).then(showCurrWeatherData);
    }

    navigator.geolocation.getCurrentPosition(handlePosition);
  }

  if (weatherData.ready) {
    return (
      <div className={getStyleBackgraung(weatherData.icon)}>
        <div className="row">
          <div className="col">
            <form className="form" onSubmit={handleSubmit}>
              <div class="input-group">
                <input
                  type="search"
                  className="form-control "
                  placeholder="Enter a city.."
                  autoFocus="on"
                  onChange={updateCity}
                />

                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />

                <button
                  type="button"
                  id="buttCurr"
                  class="btn btn-warning"
                  onClick={showCurrWeather}
                >
                  Current
                </button>
              </div>
            </form>
          </div>
        </div>

        <ShowWeather data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
