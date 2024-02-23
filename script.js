//http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=5&appid={API key}
//passes in city name, returns lat & lon 

//api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt=5&appid={API key}
//passes in lat & lon, returns weather info

//test url geo api.openweathermap.org/geo/1.0/direct?q=denver&limit=5&appid=cdbb44dbf98708fea636f843b1b4d3b1

const apiKey = "cdbb44dbf98708fea636f843b1b4d3b1";

var currentWeather = document.getElementById("currentContent");
var forecast = document.getElementById("futureContent");

//event handler for searchbar
document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();
    //functionality to take in info from searchbar and insert it into fetch request
    var cityName = document.getElementById("cityInput").value;
    var fetchUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&limit=5&appid=${apiKey}`;
    displayWeather(cityName, fetchUrl);
});

//fetch request to return weather info
//add in html elements to render with info returned
function displayWeather(cityName, fetchUrl) {
    fetch(fetchUrl)
    .then(function(response) { 
        return response.json(); 
    })
    console.log(response);
    currentWeather.innerHTML = `
    <p class="subtitle">Current Weather in ${cityName}</p>
    <ul>
    <li>Temperature: </li>
    <li>Feels like </li>
    <li>Low of </li>
    <li>High of </li>
</ul>
    `
}