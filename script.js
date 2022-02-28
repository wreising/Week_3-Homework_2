// Variables


let temp = ""
let wind_speed = ""
let humidity = ""
let uv = ""
let condition = ""
let search = ""
let lat = 51.5085
let lon = -0.1257
let apiKey = "dbf2ad6bc8d4b7f8bc210e9abadc43a2"
let oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,daily&appid=${apiKey}`
let currentApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&exclude=hourly,daily&APPID=${apiKey}`
let geoApiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${apiKey}`

// Weather Data

fetch(oneCallUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    // console.log(data.current.temp);
    // console.log(data.current.wind_speed);
    let temp = data.current.temp
    let wind_speed = data.current.wind_speed
    let humidity = data.current.humidity
    let uv = data.current.uvi
    let condition = data.current.weather[0].main
    // console.log(temp, wind_speed, humidity, uv, condition)
    validation(temp, wind_speed, humidity, uv, condition)
  })

function validation(temp, wind_speed, humidity, uv, condition) {
  console.log(temp, wind_speed, humidity, uv, condition);
}

// .then(res => res.json())
// 4      .then(
// 5        result => {
// 6          this.setState({
// 7            data: result
// 8          });
// 9        },
// 10        error => {
// 11          console.log(error);
// 12        }
// 13      );



// fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=dbf2ad6bc8d4b7f8bc210e9abadc43a2", {
//   "method": "GET",
// })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });
// // took ,ca from toronto just to see
// fetch("https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=dbf2ad6bc8d4b7f8bc210e9abadc43a2", {
//   "method": "GET",
// })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });

let partlyCloudy = 3
let rain = 4
let thunderStorm = 5
let snow = 6

let weatherCondition = 2
let weatherCondition1 = 5
let weatherCondition2 = 1
let weatherCondition3 = 6

// set icon for currentIcon
var img = document.createElement("img");

if (weatherCondition == 1) {
  img.src = "images/sunny.jpg";
} else if (weatherCondition == 2) {
  img.src = "images/cloudy.jpg";
} else if (weatherCondition == 3) {
  img.src = "images/partlyCloudy.jpg";
} else if (weatherCondition == 4) {
  img.src = "images/rain.jpg";
} else if (weatherCondition == 5) {
  img.src = "images/thunderStorm.jpg";
} else if (weatherCondition == 6) {
  img.src = "images/snow.jpg";
}

var src = document.getElementById("currentIcon");
src.appendChild(img);

// set icon for currentIcon1
var img = document.createElement("img");

if (weatherCondition1 == 1) {
  img.src = "images/sunny.jpg";
} else if (weatherCondition1 == 2) {
  img.src = "images/cloudy.jpg";
} else if (weatherCondition1 == 3) {
  img.src = "images/partlyCloudy.jpg";
} else if (weatherCondition1 == 4) {
  img.src = "images/rain.jpg";
} else if (weatherCondition1 == 5) {
  img.src = "images/thunderStorm.jpg";
} else if (weatherCondition1 == 6) {
  img.src = "images/snow.jpg";
}

var src = document.getElementById("currentIcon1");
src.appendChild(img);

// set icon for currentIcon2
var img = document.createElement("img");

if (weatherCondition2 == 1) {
  img.src = "images/sunny.jpg";
} else if (weatherCondition2 == 2) {
  img.src = "images/cloudy.jpg";
} else if (weatherCondition2 == 3) {
  img.src = "images/partlyCloudy.jpg";
} else if (weatherCondition2 == 4) {
  img.src = "images/rain.jpg";
} else if (weatherCondition2 == 5) {
  img.src = "images/thunderStorm.jpg";
} else if (weatherCondition2 == 6) {
  img.src = "images/snow.jpg";
}

var src = document.getElementById("currentIcon2");
src.appendChild(img);

// set icon for currentIcon3
var img = document.createElement("img");

if (weatherCondition3 == 1) {
  img.src = "images/sunny.jpg";
} else if (weatherCondition3 == 2) {
  img.src = "images/cloudy.jpg";
} else if (weatherCondition3 == 3) {
  img.src = "images/partlyCloudy.jpg";
} else if (weatherCondition3 == 4) {
  img.src = "images/rain.jpg";
} else if (weatherCondition3 == 5) {
  img.src = "images/thunderStorm.jpg";
} else if (weatherCondition3 == 6) {
  img.src = "images/snow.jpg";
}

var src = document.getElementById("currentIcon3");
src.appendChild(img);