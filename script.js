//http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=5&appid={API key}
//passes in city name, returns lat & lon 

//api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt=5&appid={API key}
//passes in lat & lon, returns weather info

//key: cdbb44dbf98708fea636f843b1b4d3b1

var submit = document.getElementById("submit");
// var cityName = document.getElementById("cityName").innerText;
// console.log(cityName);
var logName = function () {
    var cityName = document.getElementById("cityName").value;
    localStorage.setItem("currentCity", cityName);
    console.log(cityName);
};


