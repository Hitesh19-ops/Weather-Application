import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/Sunny';
function InfoBox({info}) {
//const INIT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjv-GMfwNvkLIdGz5nbued2u320Kwo8CdFUQ&s";

  // let info = {
  //   city : "Delhi",
  //   feelsLike: 35.54,
  //   humidity: 60,
  //   temMin: 31.32,
  //   temp: 31.32,
  //   tempMax: 31.32,
  //   weather: "scattered clouds",
  // };

const HOT_URl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjv-GMfwNvkLIdGz5nbued2u320Kwo8CdFUQ&s";
const COLD_URl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfZc9RkbmlSWHNslO18ZYRV4EX_OpboyG1g&s";
const RAIN_URl = "https://i.pinimg.com/736x/e1/35/49/e1354991a3e0880bb67d90f17db74da4.jpg";
    return(
    <div className="InfoBox">
      {/* <h1>Weather Info - {info.weather}</h1> */}
      <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image = {info.humidity>80 ? RAIN_URl: info.temp>15 ? HOT_URl : COLD_URl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} {info.humidity>80 ? <ThunderstormIcon/> : info.temp>15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.temMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  );
}
export default InfoBox;
