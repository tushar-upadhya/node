let link =
  "https://api.openweathermap.org/data/2.5/weather?q=hathras&appid=6959d5fc0b14b59907cb4c351dbc72f2";

let request = new XMLHttpRequest();
request.open("GET", link, true);
request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    let obj = JSON.parse(this.response);
    console.log("obj:", obj);
  } else {
    console.log("city data is not available");
  }
};

request.send();
