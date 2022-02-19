import React from "react";
import Icon from "./Icon";

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
    let date = new Date(props.date.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="Daily">
      <Icon code={props.data.weather[0].icon} size={64} />
      <div className="day">{day()}</div>
      <div className="temp">
        <span className="high">{maxTemp()}</span>
        <span className="low"> | {minTemp()}</span>
      </div>
    </div>
  );
}
