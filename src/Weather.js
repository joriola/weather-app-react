import React, { useState } from "react";
import "./Weather.css";
import Future from "./Future";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import Icon from "./Icon";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }
  function search() {
    let apiKey = "63493f6a61b05c9dd9c1688ad634683f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-5">
            <div className="local">
              <h1>{weatherData.city}</h1>
              <ul>
                <li>
                  <FormattedDate date={weatherData.date} />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="weather">
              <Icon code={weatherData.icon} />
            </div>
            <div className="text-capitalize description">
              {weatherData.description}
            </div>
          </div>
          <div className="col-3">
            <h2>{Math.round(weatherData.temperature)}</h2>
          </div>
          <div className="col-2">
            <div className="moreInfo">
              <div className="units">
                <div className="celsius">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </div>
              </div>
              <div className="conditions">
                <ul>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {Math.round(weatherData.wind)}m/s</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="change city..."
            className="city-input"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input type="submit" value="SEARCH" className="btn btn-secondary" />
          <input
            type="button"
            value="my location"
            className="btn btn-primary"
          />
        </form>
        <Future />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
