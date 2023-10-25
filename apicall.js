const apiKey = 'YOUR_API_KEY';
const location = 'Dumfries, US'; // E.g., 'New York, US'
const apiUrl = 'https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=T4X7K5unTCkpTAmf4BW2mtXJs3xSOJXo';

fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        const locationElement = document.getElementById('location');
        const temperatureElement = document.getElementById('temperature');
        const conditionElement = document.getElementById('condition');

        // Access the relevant weather data
        const timeline = data.data.timelines[0];
        const temperature = timeline.intervals[0].values.temperature_2m;
        const weatherCode = timeline.intervals[0].values.weathercode;

        locationElement.textContent = location;
        temperatureElement.textContent = temperature + '°C';
        conditionElement.textContent = getWeatherCondition(weatherCode);
    })
    .catch((error) => {
        console.error('Error fetching weather data: ' + error);
    });

function getWeatherCondition(weatherCode) {
    // Define a function to map Tomorrow.io weather codes to human-readable conditions
    switch (weatherCode) {
        case 0:
            return 'Clear';
        case 1:
            return 'Partly Cloudy';
        case 2:
            return 'Cloudy';
        // Add more cases as needed
        default:
            return 'Unknown';
    }
}