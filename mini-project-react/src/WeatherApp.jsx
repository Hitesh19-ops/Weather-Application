import "./WeatherApp.css";
import InfoBox from "./InfoBox.jsx";
import SearchBox from "./SearchBox.jsx"
import { useState } from "react";
function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
    city : "Delhi",
    feelsLike: 35.54,  
    humidity: 60,
    temMin: 31.32,
    temp: 31.32,
    tempMax: 31.32,
    weather: "scattered clouds",
});
function updateInfo(newInfo){
    setWeatherInfo(newInfo);
}
  return (
    <div className="WeatherApp">
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
export default WeatherApp;
