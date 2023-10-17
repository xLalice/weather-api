import "./styles.css";
import { placeIcons, updateBackground } from './loadAssets';
import {toTitleCase, getCurrentHour, getWeatherInterpretation, getDayName, extractInfo} from './helpers';

const apiKey = 'e1772c01e5bff1382e52d76d5faf38bd';

async function getGeoCode(city){
	let geocode = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}&units=imperial`)
    .then(response => response.json());

	return {
		latitude : geocode[0].lat,
		longitude : geocode[0].lon,
        name : geocode[0].name,
        state: geocode[0].state,
        country: geocode[0].country
	}
}

async function fetchCurrentWeather(city){
    let geo = await getGeoCode(city);
    let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geo.latitude}&lon=${geo.longitude}&appid=${apiKey}`)
    let response = await weather.json();
    return {
        ...response,
        geoName : geo.name,
        geoState : geo.state,
        geoCountry : geo.country
    };
}

async function fetchForecast(city){
	let geo = await getGeoCode(city);
	let forecast = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${geo.latitude}&longitude=${geo.longitude}&hourly=temperature_2m,weathercode&daily=weathercode,apparent_temperature_max,apparent_temperature_min&timezone=GMT`);
	let response = await forecast.json();
	return response;
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
    updateBackground(weather.id);

    const weatherIcon = document.querySelector("#weather-icon");
    weatherIcon.src = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`

    document.querySelector("#cityName").textContent = `${weather.geoName}, ${weather.geoState}, ${weather.geoCountry}`;
    document.querySelector("#temp").textContent = `${Math.round((weather.temp - 273.15) * 100) / 100}° C`;
    document.querySelector("#main-weather").textContent = toTitleCase(weather.main_weather);
    document.querySelector("#feels-like").textContent = `${Math.round((weather.feels_like - 273.15) * 100) / 100}° C`;
    document.querySelector("#precipitation").textContent = `${weather.rain}`;
    document.querySelector("#visibility").textContent = `${weather.visibility} m`;
    document.querySelector("#humidity").textContent = `${weather.humidity}%`;
    document.querySelector("#cloudiness").textContent = `${weather.clouds}%`;
    document.querySelector("#wind-speed").textContent = `${weather.wind_speed}`;
    document.querySelector("#wind-gust").textContent = `${weather.wind_gust}`;
}

async function populateForecastData(city){
	const forecast = await fetchForecast(city);
    hourlyWeatherForecast(forecast);
    dailyWeatherForecast(forecast);
    placeIcons();
}

function hourlyWeatherForecast(forecast){
    const hourlyForecast = document.getElementById("hourly");
    hourlyForecast.innerHTML = "";
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
        const weatherCode = document.createElement("img");
        weatherCode.src = getWeatherInterpretation(forecast.hourly.weathercode[hour+i]);
        hourDiv.appendChild(hourText);
        hourDiv.appendChild(temp);
        hourDiv.appendChild(weatherCode);
        hourlyForecast.appendChild(hourDiv);
    }
}

function dailyWeatherForecast(forecast){
    const dailyForecast = document.getElementById("daily");
    dailyForecast.innerHTML = "";
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
        const weatherCode = document.createElement("img");
        weatherCode.src = getWeatherInterpretation(forecast.daily.weathercode[i]);
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
    populateForecastData(city);
});
