import React from "react";
import '../App.css';

const Weather = (props) => {
    const {weather} = props;

if(!weather) {
    return <p>Yükleniyor...</p>;
}

    return (
        <div className="App-header">
              <h3>{weather.name}</h3>
              <p>{weather.main.temp}C° </p>
              <p>{new Date(weather.dt * 1000).toLocaleDateString()}</p>
        </div>
    )
}

export default Weather;