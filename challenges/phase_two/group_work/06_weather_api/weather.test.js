const Weather = require('./weather')

describe(Weather, () => {

  it('gets all the weather data', () => {
    const mockedApi = {
      fetchWeatherData: (cityName, callback) => {
        callback(
          {"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"stations","main":{"temp":13.76,"feels_like":12.76,"temp_min":11.95,"temp_max":15.94,"pressure":1031,"humidity":60},"visibility":10000,"wind":{"speed":4.63,"deg":90},"clouds":{"all":20},"dt":1651156447,"sys":{"type":2,"id":2019646,"country":"GB","sunrise":1651120692,"sunset":1651173454},"timezone":3600,"id":2643743,"name":"London","cod":200}
        );
      }
    }

    const weather = new Weather(mockedApi);

    weather.fetch('London');

    expect(weather.getRepoData()).toEqual(
      {"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"stations","main":{"temp":13.76,"feels_like":12.76,"temp_min":11.95,"temp_max":15.94,"pressure":1031,"humidity":60},"visibility":10000,"wind":{"speed":4.63,"deg":90},"clouds":{"all":20},"dt":1651156447,"sys":{"type":2,"id":2019646,"country":"GB","sunrise":1651120692,"sunset":1651173454},"timezone":3600,"id":2643743,"name":"London","cod":200}
    )
  });


  it('gets specific weather data from the WeatherView class', () => {
    const mockedApi = {
      fetchWeatherData: (cityName, callback) => {
        callback(
          {"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"stations","main":{"temp":13.76,"feels_like":12.76,"temp_min":11.95,"temp_max":15.94,"pressure":1031,"humidity":60},"visibility":10000,"wind":{"speed":4.63,"deg":90},"clouds":{"all":20},"dt":1651156447,"sys":{"type":2,"id":2019646,"country":"GB","sunrise":1651120692,"sunset":1651173454},"timezone":3600,"id":2643743,"name":"London","cod":200}
        );
      }
    }
   
    const mockedWeatherView = {
      displayWeather: (data) => {
        return {
          main: data['weather'][0]['main'],
          temp: data['main']['temp'],
          desc: data['weather'][0]['description'],
        }
      }
    }

    const weather = new Weather(mockedApi, mockedWeatherView);

    weather.fetch('London');

    expect(weather.weatherView.displayWeather(weather.data)).toEqual(
      {
        temp: 13.76,
        main: 'Clouds',
        desc: 'few clouds',
    }
    )
  });
});