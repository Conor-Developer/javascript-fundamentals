const WeatherApi = require('./weatherApi')
const WeatherView = require('./weatherView')

class Weather {
  constructor(api = new WeatherApi, weatherView = new WeatherView) {
    this.api = api;
    this.weatherView = weatherView
  }

  fetch(city) {
    this.api.fetchWeatherData(city, (callback) => {
      this.data = callback;
    })
  }

  getRepoData() {
    return this.data
  }

  displayWeather() {
    return this.weatherView.displayWeather(this.data);
  }

}

module.exports = {
  Weather : Weather,
  weatherApi : WeatherApi,
  weatherView : WeatherView,};
