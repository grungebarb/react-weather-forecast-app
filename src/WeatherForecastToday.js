import React from "react";
import "./WeatherForecastToday.css"

export default function WeatherForecastToday(props) {
  function maxTemperature() {
    return `${Math.round(props.data.temp.max)}º`;
  }
  function minTemperature() {
    return `${Math.round(props.data.temp.min)}º`;
  }
  function sunriseTime() {
    let sunriseHour = (new Date(props.data.sunrise * 1000)).getHours();
    if (sunriseHour < 10) {
      sunriseHour = `0${sunriseHour}`;
    }
    let sunriseMinute = (new Date(props.data.sunrise * 1000)).getMinutes();
    if (sunriseMinute < 10) {
      sunriseMinute = `0${sunriseMinute}`;
    }
    let sunrise = `${sunriseHour}:${sunriseMinute}h`;
    return sunrise;
  }
  function sunsetTime() {
    let sunsetHour = (new Date(props.data.sunset * 1000)).getHours();
    if (sunsetHour < 10) {
      sunsetHour = `0${sunsetHour}`;
    }
    let sunsetMinute = (new Date(props.data.sunset * 1000)).getMinutes();
    if (sunsetMinute < 10) {
      sunsetMinute = `0${sunsetMinute}`;
    }
    let sunset = `${sunsetHour}:${sunsetMinute}h`;
    return sunset;
  }
  return (
    <div className="WeatherForecastToday">
      <h1>Today's Weather</h1>
      <div className="row wrapper">
        <div className="col temperature">
          <div>
            <img src={`./icons/icon_${props.data.weather[0].icon}.png`} alt={props.data.weather[0].description}  className="weather-icon"/>
          </div>
          <div>
            Maximum: {maxTemperature()}
          </div>
          <div className="min-temp">
            Minimum: {minTemperature()}
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <img src="./icons/sunrise.png" alt="🌄" />
              {sunriseTime()}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img src="./icons/sunset.png" alt="🌆" />
              {sunsetTime()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}