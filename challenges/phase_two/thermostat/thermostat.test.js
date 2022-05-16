const Thermostat = require("./thermostat");

describe(Thermostat, () => {
  it("thermoat starts with an initial temperature of 20 degrees", () => {
    let thermostat = new Thermostat();
    expect(thermostat.temperature).toEqual(20);
  });

  it("increase the temperature by 1 degrees with #up", () => {
    let thermostat = new Thermostat();
    expect(thermostat.up()).toEqual(21);
  });

  it("decrease the temperature by 1 degrees with #down", () => {
    let thermostat = new Thermostat();
    expect(thermostat.down()).toEqual(19);
  });

  it("cannot decrease temperature below 10 degress", () => {
    let thermostat = new Thermostat();

    const error = () => {
      for (let i = 0; i < 11; i++) {
        thermostat.down();
      }
    };
    expect(error).toThrow("You cannot lower the temperature below 10 degrees");
  });

  it("power saving mode is on by default", () => {
    let thermostat = new Thermostat();
    expect(thermostat.powerSavingMode).toEqual(true);
  });

  it("maximum temperature is 25 degrees if power saving mode is on", () => {
    let thermostat = new Thermostat();
    const error = () => {
      for (let i = 0; i < 6; i++) {
        thermostat.up();
      }
    };
    expect(error).toThrow(
      "You cannot increase the temperature above 25 degrees in power saving mode"
    );
  });

  it("switches off power saving mode", () => {
    let thermostat = new Thermostat();
    expect(thermostat.setPowerSavingMode()).toEqual(false);
  });

  it("maxmimum temperature increased to 32 degrees whilst power saving mode is off", () => {
    let thermostat = new Thermostat();
    const increaseTemp = () => {
      for (let i = 0; i < 12; i++) {
        thermostat.up();
      }
    };
    thermostat.setPowerSavingMode(false);
    increaseTemp();
    expect(thermostat.temperature).toEqual(32);
  });

  it("cannot exceed 32 degrees whilst power saving mode is off", () => {
    let thermostat = new Thermostat();
    const increaseTemp = () => {
      for (let i = 0; i < 13; i++) {
        thermostat.up();
      }
    };
    thermostat.setPowerSavingMode(false);
    expect(increaseTemp).toThrow(
      "You cannot increase the temperature above 32 degrees"
    );
  });

  it("reset the temperature to 20 degrees", () => {
    let thermostat = new Thermostat();
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it("returns current energy usage when < 18 degrees", () => {
    let thermostat = new Thermostat();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    expect(thermostat.energyUsage()).toEqual("low-usage");
  });

  it("returns current energy usage when <= 25 degrees", () => {
    let thermostat = new Thermostat();
    const increaseTemp = () => {
      for (let i = 0; i < 5; i++) {
        thermostat.up();
      }
    };
    increaseTemp();
    expect(thermostat.energyUsage()).toEqual("medium-usage");
  });

  it("returns current energy usage when > 25 degrees", () => {
    let thermostat = new Thermostat();
    const increaseTemp = () => {
      for (let i = 0; i < 6; i++) {
        thermostat.up();
      }
    };
    thermostat.setPowerSavingMode(false);
    increaseTemp();
    expect(thermostat.energyUsage()).toEqual("high-usage");
  });
});
