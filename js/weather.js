
async function getForecast() {
  const apiKey = 'bac6956ebfefd0d846dfada45bf7f346';
  const lat = 44.7866; // Latitude for Belgrade
const lon = 20.4489; // Longitude for Belgrade
const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);

if (!response.ok) {
    console.error('Failed to fetch weather data:', response.statusText);
    return;
}

const data = await response.json();
console.log('Forecast Data:', data);
updateForecast(data);
}

function updateForecast(data) {
const weeklyForecast = document.getElementById('weekly-forecast');
weeklyForecast.innerHTML = '';

// Group data by day
const days = {};
data.list.forEach(entry => {
    const date = new Date(entry.dt * 1000);
    const day = date.toLocaleDateString('en-US', { weekday: 'short' });

    if (!days[day]) {
        days[day] = [];
    }

    days[day].push(entry);
});

// Create forecast elements
for (const day in days) {
    const forecastDay = document.createElement('div');
    forecastDay.classList.add('forecast-day');

    const entries = days[day];
    const avgTemp = entries.reduce((sum, entry) => sum + entry.main.temp, 0) / entries.length;
    const icon = entries[0].weather[0].icon;
    const description = entries[0].weather[0].description;

    forecastDay.innerHTML = `
        <p>${day}</p>
        <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon">
        <p>${Math.round(avgTemp)}°C</p>
        <p>${description}</p>
    `;

    weeklyForecast.appendChild(forecastDay);
}
}

document.addEventListener('DOMContentLoaded', (event) => {
getForecast();
});
