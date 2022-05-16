const Weather = require('./weather')

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

const weather = new Weather.Weather();

rl.question('Which city? ', (city) => {
  weather.fetch(city)
  // weather.displayWeather();
  rl.close();
});
