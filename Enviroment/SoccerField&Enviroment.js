class SoccerField {
    constructor(length, width, surface, weather, temperature) {
        this.length = length; // Field length (in meters)
        this.width = width;   // Field width (in meters)
        this.surface = surface; // Field surface type (grass, turf, indoor, etc.)

        this.weather = weather; // Weather conditions
        this.temperature = temperature; // Temperature (in degrees Celsius)
    }

    setWeather(weather, temperature) {
        this.weather = weather;
        this.temperature = temperature;
    }
}

// Example usage:
const soccerField = new SoccerField(105, 68, "Grass", "Sunny", 25);
console.log(`Field Length: ${soccerField.length} meters`);
console.log(`Field Width: ${soccerField.width} meters`);
console.log(`Field Surface: ${soccerField.surface}`);
console.log(`Current Weather: ${soccerField.weather}, Temperature: ${soccerField.temperature}°C`);

// Change weather conditions
soccerField.setWeather("Cloudy", 22);
console.log(`Current Weather: ${soccerField.weather}, Temperature: ${soccerField.temperature}°C`);
