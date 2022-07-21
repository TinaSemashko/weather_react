import React, { useState } from "react";
import axios from "axios";
import ShowWeatherAll from "./ShowWeatherAll";

export default function Weather(props) {
  let apiKey = "1e0dcb1b35c33c85c8f53ba10ee78100";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric`;
  let [temp, setTemp] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function showWeather(response) {
    setDescription(response.data.weather[0].description);
    setTemp(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showWeather);

  return (
    <div>
      <ShowWeatherAll
        city={props.city}
        temp={Math.round(temp)}
        description={description}
        humidity={humidity}
        wind={wind}
        icon={icon}
      />
    </div>
  );
}
