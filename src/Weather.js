import React, {useState} from "react";
import axios from 'axios';
import "./Weather.css";
import "./App.css";

export default function Weather() {
    let [city, setCity] = useState("");
    let [data, setData] = useState(null);
  
    function handleSubmit(event) {
      event.preventDefault();
      let apiKey = "5f68aa65e1a9a27ce8d4d2eebf53b5a9";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(url).then(showData);
    }
  
    function updateCity(event) {
      setCity(event.target.value);
    }
  
    function showData(response) {
      setData({
        city: response.data.name,
        temperature: response.data.main.temp,
        date: "Last updated at: Sept 18, Sun, 22 : 15",
        description: response.data.weather[0].description,
        imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        wind: response.data.wind.speed,
        pressure: response.data.main.pressure,
        humidity: response.data.main.humidity,
        sunrise: response.data.sys.sunrise,
        sunset: response.data.sys.sunset
      });
    }
  
    let form = (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-7">
              <input
                type="search"
                placeholder="Enter town here"
                className="form-control"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input className="btn btn-primary" type="submit" value="SEARCH" />
            </div>
          </div>
        </form>
        <button className="button">TEMPERATURE BY GEO</button>
      </div>
    );
  
    if (data) {
      return (
        <div className="Weather">
          {form}
          <div className="row">
            <div className="col-4">
              <h1>{data.city}</h1>
              <ul>
                <li className="date">{data.date}</li>
                <li>{data.description}</li>
              </ul>
              <strong className="cityTemp">
                {Math.round(data.temperature)}{" "}
              </strong>
              <span className="units">°C | °F</span>
            </div>
            <div className="col-3 current-img">
              <img className="current" src={data.imgUrl} alt={data.description} />
            </div>
            <div className="col-3">
              <ul className="additional-info">
                <li>Wind: {data.wind} m/s</li>
                <li>Pressure: {data.pressure} hPA</li>
                <li>Humidity: {data.humidity}%</li>
                <li>Sunrise: {data.sunrise} am</li>
                <li>Sunset: {data.sunset} pm</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return form;
    }
  }
  