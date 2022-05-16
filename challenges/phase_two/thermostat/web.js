const express = require('express');
const Thermostat = require('./thermostat')
const app = express();
const port = 3000;

const thermostat = new Thermostat

app.get('/temperature', (req, res) => {
    const temperature = (JSON.stringify(thermostat.getTemperature()))
    res.send(temperature)
  });
  
app.post('/up', (req, res) => {
    thermostat.up();
  });

app.post('/up', (req, res) => {
    thermostat.down();
  });

app.delete('/temperature', (req, res) => {
    thermostat.reset();
 })

 app.post('/togglepsm', (req, res) => {
     thermostat.setPowerSavingMode();
 })

 app.get('/thermostatinfo', (req, res) => {
    const information = (JSON.stringify(thermostat.thermostatinformation()))
    res.send(information)
 })
  
console.log(`Server listening on localhost:${port}`);
app.listen(port);