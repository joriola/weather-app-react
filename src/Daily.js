import React from "react";

export default function Daily(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="Daily">
      <img
        src={`/images/${props.data.weather[0].icon}.png`}
        alt={props.data.weather[0].description}
        className="img-fluid"
      />
      <div className="day">{day()}</div>
      <div className="temp">
        <span className="high">{maxTemp()}</span>
        <span className="low"> | {minTemp()}</span>
      </div>
    </div>
  );
}
