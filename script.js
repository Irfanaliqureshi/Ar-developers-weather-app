const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-deatials');
const error404 = document.querySelector('.not-found');
const cityHide = document.querySelector('.city-hide');

search.addEventListener('click', () => {
    const APIKey = '4454c16b55a40b8c692685669291f7d5';
    const city = document.querySelector('.search-box input').value;

    if (city == '')
        return;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}').then(response => response.json()).then(json => {
        if (json.cod == '400px') {
            cityHide.textContent = city;
            container.computedStyleMap.height = '400px';
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active');
            return;
        }

        const image = document.querySelector('.weather-box img');
        const temprature = document.querySelector('.weather-box .temprature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-deatails .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        if (cityHide.textContent == city) {
            return;
        }


        else {
            cityHide.textContent = city;
            container.style.height = '555px';
            container.classList.add('active');
            weatherDetails.classList.add('active');
            error404.classList.remove('active');

            setTimeout(()=>{
                container.classList.remove('active');

            },2500);

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png ';
                    break;
    
                case 'Rain':
                    image.src = 'images/rain.png ';
                    break;
    
                case 'Snow':
                    image.src = 'images/snow.png ';
                    break;
    
                case 'Clouds':
                    image.src = 'images/cloud.png ';
                    break;
    
                case 'Mist':
                    image.src = 'images/mist.png ';
                    break;
    
                case 'haze':
                    image.src = 'images/mist.png ';
                    break;
    
                default:
                    image.src = 'images/cloud.png';
    
                 }
            temprature.innerHTML = '${parentInt(json.main.temp)}<span>°C</span>';
            description.innerHTML = '${json.weather[0].description}';
            humidity.innerHTML = '${json.main.humidity}%';
            wind.innerHTML = '${parseInt(json.wind.speed)}Km/h';

            const infoweather = document.querySelector('.info-weather');
            const infohumidity = document.querySelector('.info-humidity');
            const infowind = document.querySelector('.info-wind');

            const elCloneinfoWeather= infoweather.cloneNode(true);
            const elCloneinfoHumidity= infohumidity.cloneNode(true);
            const elCloneinfoWind= infowind.cloneNode(true);

            elCloneinfoWeather.id= 'clone-info-weather';
            elCloneinfoWeather.classList.add('active-clone');

            elCloneinfoHumidity.id= 'clone-info-humidity';
            elCloneinfoHumidity.classList.add('active-clone');

            elCloneinfoWind.id= 'clone-info-wind';
            elCloneinfoWind.classList.add('active-clone');

            setTimeout(() =>{

                infoweather.insertAdjacentElement("afterend",elCloneinfoWeather);
                infohumidity.insertAdjacentElement("afterend",elCloneinfoHumidity);
                infowind.insertAdjacentElement("afterend",elCloneinfoWind);


            }, 2200);

            const cloneinfoweahter=document.querySelectorAll('.info-weather.active-clone'))[0];
            const cloneinfoweather=cloneinfoweather[0];

            const cloneinfohumidity=document.querySelectorAll('.info-humidity.active-clone');
            const cloneinfohumidityFirsts=cloneinfohumidity[0];

            const cloneinfowind=document.querySelectorAll('.info-wind.active-clone');
            const cloneinfowindFirsts=cloneinfowind[0];

            if(elCloneinfoWeather> 0){
                cloneinfoweatherFirsts.classList.remove('active-clone');
                cloneinfohumidityFirsts.classList.remove('active-clone');
                cloneinfowindFirsts.classList.remove('active-clone');

                setTimeout (() => {
                    cloneinfoweatherFirsts.remove();
                    cloneinfohumidity.remove();
                    cloneinfowindFirsts.remove();

                },2200);

            }





        }

        

    });

});
