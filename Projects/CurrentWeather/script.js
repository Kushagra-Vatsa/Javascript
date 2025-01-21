const input=document.querySelector("input");
const btn=document.getElementById("btn");
const icon=document.querySelector(".icon");
const weather=document.querySelector(".weather");
const description=document.querySelector(".description");
const temperature=document.querySelector(".temperature");

function getWeather(city) {
    const apiKey = '2c5a26c918adb593a77547fb23fc2ca7'; // Replace this with your actual API key if needed
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data =>{
            console.log(data)
            const iconCode=data.weather[0].icon;
            icon.innerHTML=`<img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon"/>`

            const weatherCity=data.name;
            const weatherCountry=data.sys.country;
            weather.innerHTML=`${weatherCity},${weatherCountry}`


            let weatherTemp = data.main.temp;
            weatherTemp = weatherTemp - 273; // Convert Kelvin to Celsius
            weatherTemp = parseFloat(weatherTemp.toFixed(2)); // Round to 2 decimal places
            temperature.innerHTML = `${weatherTemp}\u00B0C`;

            const weatherDescription=data.weather[0].description;

            description.innerHTML = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);

        })
        .catch(error => console.error('Error fetching weather data:', error.message));
}

btn.addEventListener('click',function(){
    let city=input.value;
    getWeather(city)
})