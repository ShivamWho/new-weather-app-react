import React from 'react'
import moment from 'moment'
import '../css/DetailsCard.css'
import Sound from 'react-sound'
import Clear from '../asset/sounds/clear.mp3'
import Clouds from '../asset/sounds/clouds.mp3'
import Rain from '../asset/sounds/rain.mp3'

function DetailsCard({weather_icon, data}) {
  const {clouds, main, weather} = data.list[0]
  var sound
  if(weather[0].main === 'Clouds'){
    sound = Clouds
  }
  else if(weather[0].main === 'Rain'){
    sound = Rain
  }
  else{
    sound = Clear
  }
  return (
    <div className="details">
       <div className="clouds">
           <p className="celsius">{Math.round(main.temp)}&deg;C</p>
           <div className="cloud-icon">
            {weather[0].main}
            <img src={weather_icon} className="" alt="" />
           </div>
           <Sound
              url = {sound} 
              playStatus = {Sound.status.PLAYING}
              playFromPosition = {0}
           />
           <p className="des">{weather[0].description}</p>
           <p className="time">{moment().format("dddd MMM YYYY")}</p>
       </div>
       <div className="more-info">
           <p className="">RealFell: {Math.round(main.feels_like)}&deg;C</p>
           <p className="">Humidity: {main.humidity}%</p>
           <p className="">Cloud Cover: {clouds.all}</p>
           <p className="">Min Temp: {Math.round(main.temp_min)}&deg;C</p>
           <p className="">Max Temp: {Math.round(main.temp_max)}&deg;C</p>
       </div> 
    </div>
  )
}

export default DetailsCard