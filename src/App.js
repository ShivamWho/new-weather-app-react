import { TbMapSearch } from 'react-icons/tb'
import { TbSearch } from 'react-icons/tb'
import { useState } from 'react'
import DetailsCard from './components/DetailsCard';
import SummaryCard from './components/SummaryCard';
import { useTranslation } from 'react-i18next';
import './languages/i18n';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY
  const { t, i18n } = useTranslation();

  const [noData, setNoData] = useState(t('no-data'))
  const [searchTerm, setSearchTerm] = useState('')
  const [weatherData, setWeatherData] = useState([])
  const [city, setCity] = useState(t('unknown-location'))
  const [weatherIcon, setWeatherIcon] = useState(`http://openweathermap.org/img/wn/10n@2x.png`)
  const [currentLanguage, setLanguage] = useState('en');

  const handleChange = input => {
    const {value} = input.target
    setSearchTerm(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getWeather(searchTerm)
  }

  const handleLanguage = (event) => {
    changeLanguage(event.target.value);
  }

  const getWeather = async (location) => {
    setWeatherData([])
    let how_to_search = (typeof location === 'string') ? `q=${location}` : `lat=${location[0]}&lon=${location[1]}`

    try {
      let res = await fetch(`${'http://api.openweathermap.org/data/2.5/forecast?'+how_to_search}
      &appid=${API_KEY}&units=metric&cnt=5&exclude=hourly,minutely&lang=es`)
      let data = await res.json()
      if(data.cod != 200) {
        setNoData(t('unknown-location'))
        return
      }
      setWeatherData(data)
      setCity(`${data.city.name}, ${data.city.country}`)
      setWeatherIcon(`${'http://openweathermap.org/img/wn/' + data.list[0].weather[0]["icon"]}@4x.png`)
    } catch (error) {
      console.log(error)
    }
  }

  const changeLanguage = (value, location) => {
      i18n
          .changeLanguage(value)
          .then(() => setLanguage(value) && getWeather(location))
          .catch(err => console.log(err));
  };

  const myIP = (location) => {
    const {latitude, longitude} = location.coords
    getWeather([latitude, longitude])
  }

  return (
    <div className="container">
      <div className="blur" style={{top: '-10%', right: '0'}}></div>
      <div className="blur" style={{top: '36%', left: '-6rem'}}></div>
      <div className="content">
        <div className="form-container">
          <div className="name">
            <div className="logo">Weather App<hr></hr></div>
            <div className="city">
              <TbMapSearch />
              <p>{city}</p>
            </div>
          </div>
          <div className="search">
            <h2>{t('title')}</h2>
            <hr />
            <form className="search-bar" noValidate onSubmit={handleSubmit}>
              <input type="text" name="" id="" placeholder={t('explore')} onChange={handleChange} required/>
              <button className="s-icon">
                  <TbSearch 
                    onClick={() => {
                      navigator.geolocation.getCurrentPosition(myIP)
                    }}
                  />
              </button>
            </form>
          </div>
          
        </div>
        <div className="info-container">
          <div>
            <select className='selected-languange' value={currentLanguage} onChange={(e) => handleLanguage(e)}>
              <option selected value="en">{t('languages.en')}</option>
              <option value="es">{t('languages.es')}</option>
              <option value="fr">{t('languages.fr')}</option>
            </select>
          </div>

          {weatherData.length === 0 ? 
              <div className="nodata">
                <h1>{t('no-data')}</h1>
              </div> : 
              <>
                <h1>{t('today')}</h1>
                <DetailsCard weather_icon={weatherIcon} data={weatherData}/>
                <h1 className="title">{t('more-on')} {city}</h1>
                <ul className="summary">
                  {weatherData.list.map((days, index) =>{
                    if(index > 0){
                      return (<SummaryCard key={index} day={days} />)
                    }
                  })}
                </ul>
              </>
            }
        </div>
      </div>
    </div>
  );
}

export default App;
