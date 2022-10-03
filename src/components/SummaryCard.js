import moment from 'moment'
import '../css/SummaryCard.css'
import React from 'react'

function SummaryCard({day}) {
  const day_icon = `${'http://openweathermap.org/img/wn/' + day.weather[0]["icon"]}@2x.png`
  return (
    <li className="summary-items">
        <div>
            <p className="">{Math.round(day.main.temp)}&deg;C</p>
            <p className="">
              {console.log('day', day)}
                {day.weather[0].main}
                <img src={day_icon}  alt="" />
            </p>
            <p className="">{day.weather[0].description}</p>
            <p className="">{moment(day.dt_txt).format('hh:mm a')}</p>
        </div>
    </li>
  )
}

export default SummaryCard