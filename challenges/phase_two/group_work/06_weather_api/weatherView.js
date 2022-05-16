class WeatherView {

  displayWeather(data) {
    return {
      main: data['weather'][0]['main'],
      temp: data['main']['temp'],
      desc: data['weather'][0]['description'],
    }
  }
}

module.exports = WeatherView;