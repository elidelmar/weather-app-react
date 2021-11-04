import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [weatherReport, setWeatherReport] = useState(null);

  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let description = response.data.weather[0].description;
    let humidity = response.data.main.humidity;
    let wind = response.data.wind.speed;
    let iconId = response.data.weather[0].icon;
    let icon = `http://openweathermap.org/img/wn/${iconId}@2x.png`;

    setWeatherReport(
      <ul>
        <li>Temperature: {temperature} °C</li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {wind}km/h</li>
        <li>
          <img src={icon} alt="icon" />
        </li>
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "78becdd168a13a9b75d62180c6d52593";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={getCity} />
        <input type="submit" value="Search" />
      </form>
      {weatherReport}
    </div>
  );
}