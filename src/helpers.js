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
        case 1:
            return "https://openweathermap.org/img/wn/01d@2x.png";
        case 2:
            return "https://openweathermap.org/img/wn/02d@2x.png";
        case 3:
            return "https://openweathermap.org/img/wn/03d@2x.png";
        case 45:
            return "https://openweathermap.org/img/wn/50d@2x.png";
        case 48:
            return "https://openweathermap.org/img/wn/50d@2x.png";
        case 51:
        case 53:
        case 55:
        case 56:
        case 80:
        case 81:
        case 82:
        case 57:
            return "https://openweathermap.org/img/wn/09d@2x.png";
        case 61:
        case 63:
        case 65:
            return "https://openweathermap.org/img/wn/10d@2x.png";
        case 66:
        case 85:
        case 86:
        case 67:
            return "https://openweathermap.org/img/wn/13d@2x.png";
        case 71:
        case 73:
        case 75:
        case 77:
            return "https://openweathermap.org/img/wn/13d@2x.png";
        case 95:
        case 96:
        case 99:
            return "https://openweathermap.org/img/wn/11d@2x.png";
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
        city: weather.name,
        id: weather.weather[0].id,
        icon : weather.weather[0].icon,
        geoName : weather.geoName,
        geoState : weather.geoState,
        geoCountry : weather.geoCountry
    }
}

export {toTitleCase, getCurrentHour, getWeatherInterpretation, getDayName, extractInfo};