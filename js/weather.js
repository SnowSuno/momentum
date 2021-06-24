const API_KEY = "dad468b1aab47ecfe264ad00a4bac711";


function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        /** @param data.weather.main */
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            
            weather.innerText = data.weather[0].main;
            city.innerText = data.name;
        });

}
function onGeoError() {

}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
console.log(TODOS_KEY);