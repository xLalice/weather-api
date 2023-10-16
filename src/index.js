import "./styles.css";

const apiKey = 'e1772c01e5bff1382e52d76d5faf38bd';

async function getGeoCode(city){
	let geocode = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}&units=imperial`)
    .then(response => response.json());
    let latitude = geocode[0].lat;
    let longitude = geocode[0].lon;

	return {
		latitude,
		longitude
	}
}

async function fetchCurrentWeather(city){
    let geo = await getGeoCode(city);

    let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geo.latitude}&lon=${geo.longitude}&appid=${apiKey}`)
    let response = await weather.json();
    return response;
}

async function fetchForecast(city){
	let geo = await getGeoCode(city);
	console.log(geo);

	let forecast = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${geo.latitude}&longitude=${geo.longitude}&hourly=temperature_2m,weathercode&daily=weathercode,apparent_temperature_max,apparent_temperature_min&timezone=GMT`);
	let response = await forecast.json();
	return response;
}

function extractInfo(weather){
    return {
        main_weather : weather.weather[0].description,
        temp: weather.main.temp,
        feels_like: weather.main.feels_like,
        rain: weather.rain,
        humidity: weather.main.humidity,
        visibility: weather.visibility,
        wind_speed: weather.wind.speed,
        wind_gust: weather.wind.gust,
        clouds: weather.clouds.all,
        city: weather.name
    }
}

function toTitleCase(str){
	return str.toLowerCase().split(' ').map(function(word) {
		return word.replace(word[0], word[0].toUpperCase());
	}).join(' ');
}

function getCurrentHour(hour) {
    return `${hour}:00`;
}

function getWeatherInterpretation(code) {
    switch (code) {
        case 0:
            return "Clear sky";
        case 1:
            return "Mainly clear";
        case 2:
            return "Partly Cloudy";
        case 3:
            return "Overcast";
        case 45:
            return "Fog"
        case 48:
            return "Depositing rime fog";
        case 51:
            return "Light drizzle";
        case 53:
            return "Moderate drizzle";
        case 55:
            return "Dense Drizzle";
        case 56:
            return "Light freezing drizzle"
        case 57:
            return "Dense Freezing Drizzle";
        case 61:
            return "Slight Rain";
        case 63:
            return "Moderate Rain"
        case 65:
            return "Heavy Rain";
        case 66:
            return "Light Freezing Rain";
        case 67:
            return "Heavy Freezing Rain";
        case 71:
            return "Slight Snowfall";
        case 73:
            return "Moderate Snowfall";
        case 75:
            return "Heavy Snowfall";
        case 77:
            return "Snow grains";
        case 80:
            return "Slight Rainshowers";
        case 81:
            return "Moderate Rainshowers";
        case 82:
            return "Violent Rainshowers";
        case 85:
            return "Slight Snowshowers"
        case 86:
            return "Heavy Snowshowers";
        case 95:
            return "Slight Thunderstorm"
        case 96:
        case 99:
            return "Moderate Thunderstorm";
        default:
            return "Unknown weather code";
    }
}

function getDayName(dateString) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayIndex = date.getDay(); // 0 for Sunday, 1 for Monday, etc.
    return daysOfWeek[dayIndex];
}

async function populateWeatherData(city){
    const weatherData = await fetchCurrentWeather(city);
    const weather = extractInfo(weatherData);
    if (weather.rain) {
        if (weather.rain["1h"] === undefined) {
          weather.rain = "0 mm";
        } else {
          weather.rain = `${weather.rain["1h"]} mm`;
        }
    } else {
    	weather.rain = "0 mm";
    }
    document.querySelector("#cityName").textContent = weather.city;
    document.querySelector("#temp").textContent = `${Math.round((weather.temp - 273.15) * 100) / 100}° C`;
    document.querySelector("#main-weather").textContent = toTitleCase(weather.main_weather);
    document.querySelector("#feels-like").textContent = `${Math.round((weather.feels_like - 273.15) * 100) / 100}° C`;
    document.querySelector("#precipitation").textContent = `${weather.rain}`;
    document.querySelector("#visibility").textContent = `${weather.visibility} m`;
    document.querySelector("#humidity").textContent = `${weather.humidity}%`;
    document.querySelector("#cloudiness").textContent = `${weather.clouds}%`;
    document.querySelector("#wind-speed").textContent = `${weather.wind_speed} mph`;
    document.querySelector("#wind-gust").textContent = `${weather.wind_gust} meter per second`;
}

async function populateForecastData(city){
	const forecast = await fetchForecast(city);
	console.log(forecast);
    hourlyWeatherForecast(forecast);
    dailyWeatherForecast(forecast);
	
}

function hourlyWeatherForecast(forecast){
    const hourlyForecast = document.getElementById("hourly");
    const hour = new Date().getHours();
    for (let i=0; i < 6; i++){
        const hourDiv = document.createElement("div");
        hourDiv.classList.add("flex-item");
        let hourText = document.createElement("p");
        if (i === 0){
            hourText.textContent = "Now";
        } else {
            hourText.textContent = getCurrentHour(hour+i);
        }
        const temp = document.createElement("h1");
        temp.textContent = `${Math.round(forecast.hourly.temperature_2m[hour+i])}° C`;
        const weatherCode = document.createElement("p");
        weatherCode.textContent = getWeatherInterpretation(forecast.hourly.weathercode[hour+i]);
        hourDiv.appendChild(hourText);
        hourDiv.appendChild(temp);
        hourDiv.appendChild(weatherCode);
        hourlyForecast.appendChild(hourDiv);
    }
}

function dailyWeatherForecast(forecast){
    const dailyForecast = document.getElementById("daily");
    for (let i=0; i < 6; i++){
        const daily = document.createElement("div");
        daily.classList.add("flex-item");
        let day = document.createElement("p");
        if (i === 0){
            day.textContent = "Today";
        } else {
            day.textContent = getDayName(forecast.daily.time[i]);
        }
        const temp = document.createElement("h1");
        temp.textContent = `${(Math.round(forecast.daily.apparent_temperature_max[i] + forecast.daily.apparent_temperature_min[i]))/2}° C`;
        const weatherCode = document.createElement("p");
        weatherCode.textContent = getWeatherInterpretation(forecast.daily.weathercode[i]);
        daily.appendChild(day);
        daily.appendChild(temp);
        daily.appendChild(weatherCode);
        dailyForecast.appendChild(daily);
    }
}


populateWeatherData("Rodriguez, Rizal, Philippines");

populateForecastData("Rodriguez, Rizal, Philippines");

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const city = document.querySelector("#city").value;
    populateWeatherData(city);
});
