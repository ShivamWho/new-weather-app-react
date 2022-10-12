function BackgroundImage(data) {
  let id = 0;
  if (!Array.isArray(data) && data.list[0].weather[0].id) {
    id = data.list[0].weather[0].id;
  }

  function getImageUrl(weatherId) {
    // id classification https://openweathermap.org/weather-conditions
    switch (true) {
      case weatherId >= 200 && weatherId < 300:
        document.body.classList.remove(
          'rain',
          'snow',
          'cloudy',
          'drizzle',
          'clear-day',
          'strong-wind'
        );
        document.body.classList.add('thunderstorm');
        return 'https://i.gifer.com/Rnim.gif'; // thunderstorm
      case weatherId >= 300 && weatherId < 400:
        document.body.classList.remove(
          'rain',
          'snow',
          'cloudy',
          'clear-day',
          'strong-wind',
          'thunderstorm'
        );
        document.body.classList.add('drizzle');
        return 'https://i.gifer.com/Rhhw.gif'; // drizzle
      case weatherId >= 500 && weatherId < 600:
        document.body.classList.remove(
          'snow',
          'cloudy',
          'drizzle',
          'clear-day',
          'strong-wind',
          'thunderstorm'
        );
        document.body.classList.add('rain');
        return 'https://i.gifer.com/7scx.gif'; // rain
      case weatherId >= 600 && weatherId < 700:
        document.body.classList.remove(
          'rain',
          'cloudy',
          'drizzle',
          'clear-day',
          'strong-wind',
          'thunderstorm'
        );
        document.body.classList.add('snow');
        return 'https://i.gifer.com/55D4.gif'; // snow
      case weatherId >= 700 && weatherId < 800:
        document.body.classList.remove(
          'rain',
          'snow',
          'cloudy',
          'drizzle',
          'clear-day',
          'thunderstorm'
        );
        document.body.classList.add('strong-wind');
        return 'https://i.gifer.com/604.gif'; // strong wind
      case weatherId === 800:
        document.body.classList.remove(
          'rain',
          'snow',
          'drizzle',
          'cloudy',
          'strong-wind',
          'thunderstorm'
        );
        document.body.classList.add('clear-day');
        return 'https://i.gifer.com/Lx0q.gif'; // clear day Image
      default:
        document.body.classList.remove(
          'rain',
          'snow',
          'drizzle',
          'clear-day',
          'strong-wind',
          'thunderstorm'
        );
        document.body.classList.add('cloudy');
        return 'https://i.gifer.com/fyCe.gif'; // cloudy day
    }
  }

  return getImageUrl(Number(id));
}

export default BackgroundImage;
