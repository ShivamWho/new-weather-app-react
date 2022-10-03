import React from 'react';
import moment from 'moment';
import '../css/DetailsCard.css';
import BackgroundSound from './BackgroundSound';

function DetailsCard({ weather_icon, data }) {
	const { clouds, main, weather } = data.list[0];
	return (
		<div className='details'>
			<div className='clouds'>
				<p className='celsius'>{Math.round(main.temp)}&deg;C</p>
				<div className='cloud-icon'>
					{weather[0].main}
					<img src={weather_icon} className='' alt='' />
				</div>
				<p className='des'>
					<span>{weather[0].description}</span>
				</p>
				<p className='time'>
					<span>{moment().format('dddd MMM YYYY')}</span>
				</p>
			</div>
			<div className='more-info'>
				<p className=''>
					RealFell: <span>{Math.round(main.feels_like)}&deg;C</span>
				</p>
				<p className=''>
					Humidity: <span>{main.humidity}%</span>
				</p>
				<p className=''>
					Cloud Cover: <span>{clouds.all}</span>
				</p>
				<p className=''>
					Min Temp: <span>{Math.round(main.temp_min)}&deg;C</span>
				</p>
				<p className=''>
					Max Temp: <span>{Math.round(main.temp_max)}&deg;C</span>
				</p>
			</div>
			<BackgroundSound weather={weather[0]} />
		</div>
	);
}

export default DetailsCard;
