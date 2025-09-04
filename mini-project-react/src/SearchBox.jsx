import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "340d3f919f4d5d2f9af213bc98d2bd7c";
    async function getWeatherInfo(){
    try{
     let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
     //console.log(response);
     let jsonResponse = await response.json();
     //console.log(jsonResponse);
     let result = {
        city : city,
        temp: jsonResponse.main.temp,
        temMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
     };
     console.log(result);
     return result;
    }catch(error){
       throw error;
    }
};

    function handleChange(event){
        setCity(event.target.value);
        setError(false)
    };
     
     async function handleSubmit(event){
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    }catch(error){
       setError(true);
    }
};
    return(
        <div className="SearchBox">
        {/* <h3>Search for the weather</h3> */}
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="filled" required value={city} onChange={handleChange}/>
        <br/><br/>
        <Button variant="contained" type="submit">Search</Button>
        {error && <p style={{color:"red"}}>No such place exists!</p>}
        </form>
        </div>
    )
}
export default SearchBox;