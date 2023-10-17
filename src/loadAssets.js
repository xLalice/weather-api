import clearSky from "./assets/backgrounds/clear-sky.jpg";
import mist from "./assets/backgrounds/mist.jpeg";
import rain from "./assets/backgrounds/rain.jpg";
import clouds from "./assets/backgrounds/scattered-clouds.jpg";
import snow from "./assets/backgrounds/snow.jpeg";
import feelslikeIcon from "./assets/icons/temperature.png"
import rainIcon from "./assets/icons/rain.png";
import eyeIcon from "./assets/icons/eye.png";
import waterIcon from "./assets/icons/water.png";
import cloudIcon from "./assets/icons/cloud.png";
import windIcon from "./assets/icons/wind.png";
import timeIcon from "./assets/icons/time-save.png"
import calendarIcon from "./assets/icons/calendar.png";

export function placeIcons(){
    const feels_like = document.querySelector("#temp-icon");
    const rain = document.querySelector("#rain-icon");
    const eye = document.querySelector("#eye-icon");
    const water = document.querySelector("#water-icon");
    const clouds = document.querySelector("#cloud-icon");
    const wind = document.querySelector("#wind-icon");
    const time = document.querySelector("#time-icon");
    const calendar = document.querySelector("#calendar-icon");
    feels_like.src = feelslikeIcon;
    rain.src = rainIcon;
    eye.src = eyeIcon;
    water.src = waterIcon;
    clouds.src = cloudIcon;
    wind.src =  windIcon;
    time.src = timeIcon;
    calendar.src = calendarIcon;
}

export function updateBackground(code){
    const body = document.querySelector("body");
    let src;
    switch (code) {
        case 800:
            src = clearSky;
            break;
        case 801:
        case 802:
        case 803:
        case 804:
            src = clouds;
            break;
        case 701:
            src = mist;
            break;
        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
        case 511:
        case 520:
        case 521:
        case 522:
        case 531:
            src = rain;
            break;
        case 600:
        case 601:
        case 602:
        case 611:
        case 612:
        case 613:
        case 615:
        case 616:
        case 620:
        case 621:
        case 622:
            src = snow;
            break;
    }
    body.style.background = `url('${src}') no-repeat`;
    body.style.backgroundSize = "cover";
    return;
}
