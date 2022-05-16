class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true
  }

  up() {
    if (this.powerSavingMode == false && this.temperature <= 31) {
      return this.temperature += 1;
    } else if (this.temperature == 32) {
      throw "You cannot increase the temperature above 32 degrees";
    } else if (this.temperature == 25) {
      throw "You cannot increase the temperature above 25 degrees in power saving mode";
    } else
      return this.temperature += 1;
  }

  down() {
    if (this.temperature == 10) {
      throw "You cannot lower the temperature below 10 degrees";
    } else
      return this.temperature -= 1;
  }

  setPowerSavingMode() {
    if (this.powerSavingMode == true) {
      return this.powerSavingMode = false;
    } else 
      return this.powerSavingMode = true;
  }

  reset() {
    return this.temperature = 20;
  }

  energyUsage() {
    if (this.temperature < 18) {
      return "low-usage"
    } else if (this.temperature <= 25) {
      return "medium-usage"
    } else
      return "high-usage"
  }

  getTemperature() {
    return this.temperature;
  }

}

module.exports = Thermostat;