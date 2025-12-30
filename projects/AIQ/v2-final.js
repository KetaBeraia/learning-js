const prompt = require('prompt-sync')();

// Air Quality Index (AQI) categorization based on input value

const input = prompt("Enter the AQI value: ");
const aqi = parseInt(input, 10);

// Validate input
if (isNaN(aqi) || aqi < 0) {
    console.log("Please enter a valid positive number.");
} else if (aqi >= 0 && aqi <= 50) {
    console.log("Good");
} else if (aqi >= 51 && aqi <= 100) {
    console.log("Moderate");
} else if (aqi >= 101 && aqi <= 150) {
    console.log("Unhealthy (Sensitive Groups)");
} else if (aqi >= 151 && aqi <= 200) {
    console.log("Unhealthy");
} else if (aqi >= 201 && aqi <= 300) {
    console.log("Very Unhealthy");
} else {
    console.log("Hazardous");
}

//this version allows user input and includes input validation and is more accurate in categorizing AQI values.