//http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=5&appid={API key}
//passes in city name, returns lat & lon 

//api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt=5&appid={API key}
//passes in lat & lon, returns weather info

const apiKey = "cdbb44dbf98708fea636f843b1b4d3b1";
var cityName = document.getElementById("cityInput").value;
var currentWeather = document.getElementById("currentContent");
var forecast = document.getElementById("futureContent");

//event handler for searchbar
//functionality to take in info from searchbar and insert it into fetch request

//fetch request to return weather info
//add in html elements to render with info returned