const apiKey = require('./apiKey')
const got = require('got');

class WeatherApi {
    fetchWeatherData = (city, callback) => {
        let weatherdata = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
        got(weatherdata).then((response) => {
        console.log(callback(JSON.parse(response.body)));
        });
    }
}

module.exports = WeatherApi;