import "./styles.css";

async function fetchCurrentWeather(city){

    let apiKey = 'e1772c01e5bff1382e52d76d5faf38bd';

    let geocode = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}&units=imperial`)
    .then(response => response.json());
    let latitude = geocode[0].lat;
    let longitude = geocode[0].lon;


    let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
    .then(response => response.json());
    return weather;
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

async function populateData(city){
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
      console.log(weather)
    document.querySelector("#cityName").textContent = weather.city;
    document.querySelector("#temp").textContent = `${Math.round((weather.temp - 273.15) * 100) / 100}°`;
    document.querySelector("#main-weather").textContent = toTitleCase(weather.main_weather);
    document.querySelector("#feels-like").textContent = `${weather.feels_like}°`;
    document.querySelector("#precipitation").textContent = `${weather.rain}`;
    document.querySelector("#visibility").textContent = `${weather.visibility} m`;
    document.querySelector("#humidity").textContent = `${weather.humidity}%`;
    document.querySelector("#cloudiness").textContent = `${weather.clouds}%`;
    document.querySelector("#wind-speed").textContent = `${weather.wind_speed} mph`;
    document.querySelector("#wind-gust").textContent = `${weather.wind_gust} meter per second`;
}

populateData("Rodriguez, Rizal, Philippines");

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const city = document.querySelector("#city").value;
    populateData(city);
});
