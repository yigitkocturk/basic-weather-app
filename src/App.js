//
import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import { usePosition } from 'use-position';
import Weather from './components/weather';

function App() {

const [weather,setWeather] = useState();
const {latitude,longitude} = usePosition();

const getWeatherData= async (lat,lon) => {
  const key = process.env.REACT_APP_WEATHER_API_KEY;
  const lang = navigator.language.split("-")[0];
  try {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`);
    setWeather(data);
  } catch {
    alert("Veri alınırken bir hata oluştu.");
  }
  
}

  useEffect(()=>{
    latitude && longitude && getWeatherData(latitude,longitude);

  },[latitude,longitude])



  return (
    <div className='App-header'>
     <h2>Hava Durumu</h2>
     <Weather  weather={weather}/>
    </div>
  );
}

export default App;
