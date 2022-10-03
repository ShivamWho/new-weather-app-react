import React from 'react'
import moment from 'moment'
import '../css/DetailsCard.css'
import { useTranslation } from 'react-i18next';

function DetailsCard({weather_icon, data}) {
  const {clouds, main, weather} = data.list[0]
  const { t, i18n } = useTranslation();

  return (
    <div className="details">
       <div className="clouds">
           <p className="celsius">{Math.round(main.temp)}&deg;C</p>
           <div className="cloud-icon">
            {weather[0].main}
            <img src={weather_icon} className="" alt="" />
           </div>
           <p className="des">{weather[0].description}</p>
           <p className="time">{moment().format("dddd MMM YYYY")}</p>
       </div>
       <div className="more-info">
           <p className="">{t('realFell')}: {Math.round(main.feels_like)}&deg;C</p>
           <p className="">{t('humidity')}: {main.humidity}%</p>
           <p className="">{t('cover')}: {clouds.all}</p>
           <p className="">{t('min-temp')}: {Math.round(main.temp_min)}&deg;C</p>
           <p className="">{t('max-temp')}: {Math.round(main.temp_max)}&deg;C</p>
       </div> 
    </div>
  )
}

export default DetailsCard