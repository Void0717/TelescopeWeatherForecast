const apiKey = 'YOUR_API_KEY';
const location = 'Dumfries, VA, US'; // E.g., 'New York, US'
const apiUrl = `https://api.tomorrow.io/v4/weather/forecast?location={location}&apikey=T4X7K5unTCkpTAmf4BW2mtXJs3xSOJXo`;

fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        const locationElement = document.getElementById('location');
        const temperatureElement = document.getElementById('temperature');
        const conditionElement = document.getElementById('condition');

        locationElement.textContent = data.name;
        temperatureElement.textContent = data.main.temp;
        conditionElement.textContent = data.weather[0].description;
    })
    .catch((error) => {
        console.error('Error fetching weather data: ' + error);
    });
