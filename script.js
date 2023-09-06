const input_box =document.querySelector(".input-box");
const searchbtn =document.getElementById(".searchbtn");
const weather_images =document.querySelector(".weather-images");
const temperature =document.querySelector(".temperature");
const description =document.querySelector(".description");
const humidity =document.getElementById(".humidity");
const wind_speed =document.getElementById(".wind-speed");
const location_not_found =document.querySelector('.location-not-found');
const weather_body= document.querySelector('.weather-body');

 async function checkWeather(city){
    const api_key="8830d1d1ac583ec5fc28fd5e38a22ea1";
    const url="https://api.openweathermap.org/data/2.5/weather?q=$"+city+"&appid=$"+api_key;

    const weather_data= await fetch('${url}').then
    (response => response.json() );

    if (weather_data.cod ==='404') {
        location_not_found.style.display="flex";
        weather_body.style.dislay="none";
        console.log("error");
        return;
    }
    location_not_found.style.display="none";
weather_body.style.display ="flex";
    temperature.innerHTML ='${Math.round(weather_data.main.temp-273.15)}°C';

    description.innerHTML ='${(weather_data.weather[0].description}';

        humidity.innerHTML ='${(weather_data.main.humidity} %';

        wind_speed.innerHTML ='${(weather_data.wind.speed} Km/H';

        switch(weather_data.weeather[0].main){
            case 'Clouds':
                break;
            weather_images.src="cloud images.jpeg";
            case 'Clear':
            weather_images.src="Clear sky images.jpeg";
            break;
            case 'Rain':
            weather_images.src="rain.jpeg";
            break;
            case 'mist':
            weather_images.src="mist images.jpeg";
            break;
            case 'Snow':
            weather_images.src="snow.jpeg";
            break;
        }

console.log(weather_data);

        
}

searchbtn.addEventListener('click',()=>{
    checkWeather(input_box.value);
});