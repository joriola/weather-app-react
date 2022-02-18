import React, { useState } from "react";
import "./Weather.css";
import Search from "./Search";
import Future from "./Future";
import axios from "axios";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Tuesday",
      time: "10:00",
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-5">
            <div className="local">
              <h1>{weatherData.city}</h1>
              <ul>
                <li>{weatherData.date}</li>
                <li>Last updated: {weatherData.time} local time</li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="weather">
              <img src="/" alt="cloudy" />
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
        <Search />
        <Future />
      </div>
    );
  } else {
    let apiKey = "63493f6a61b05c9dd9c1688ad634683f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
