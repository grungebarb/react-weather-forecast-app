import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    return `${Math.round(props.data.temp.max)}º`;
  }
  function minTemperature() {
    return `${Math.round(props.data.temp.min)}º`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="day">
        {day()}
      </div>
      <div className="weather-icon">
        <img src={`./icons/icon_${props.data.weather[0].icon}.png`} alt={props.data.weather[0].description} />
      </div>
      <div className="temperatures">
        <span className="max-temp">{maxTemperature()}</span>
        <span className="min-temp">{minTemperature()}</span>
      </div>
    </div>
  );
}