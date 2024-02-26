link = "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=1867f197938602b75d1566cf3627661b";
var request = new XMLHttpRequest();
request.open('GET', link, true);
request.onload = function () {
    var obj = JSON.parse(this.response);
    console.log(obj);
    document.getElementById('weather').innerHTML = obj.weather[0].main;
    document.getElementById('location').innerHTML = obj.name;
    document.getElementById('temp').innerHTML = Math.round(obj.main.temp - 273.15);
    document.getElementById('icon').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
}
if (request.status >= 200 && request.status < 400) {
    var temp = obj.main.temp - 273.15;
}
else {
    console.log("City not found");
}
request.send();