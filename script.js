// Variables

let temp = 72
let wind_speed = 7
let humidity = 82
let uv = 1
let condition = "Sunny"
// let lat = 51.5085
// let lon = -0.1257

let search = ""
let apiKey = "dbf2ad6bc8d4b7f8bc210e9abadc43a2"
// ${search}
let currentCity = localStorage.getItem("lastCity")

let currentDate = moment().format("MMM Do YYYY")
let currentDate1 = moment().add(1, 'days').format("MMM Do")
let currentDate2 = moment().add(2, 'days').format("MMM Do")
let currentDate3 = moment().add(3, 'days').format("MMM Do")
let currentDate4 = moment().add(4, 'days').format("MMM Do")
let currentDate5 = moment().add(5, 'days').format("MMM Do")

document.getElementById("currentDate").innerHTML = currentDate
document.getElementById("currentDate1").innerHTML = currentDate1
document.getElementById("currentDate2").innerHTML = currentDate2
document.getElementById("currentDate3").innerHTML = currentDate3
document.getElementById("currentDate4").innerHTML = currentDate4
document.getElementById("currentDate5").innerHTML = currentDate5

document.getElementById("currentCity").innerHTML = currentCity


// search button = City Name
//   Pass City Name to 1st fetch
// 1st fetch = lat lon
//       Pass lat lon to 2nd fetch
// 2nd fetch = data
//           populate index with data


//   Add City Name to List

function addCity() {

  let cityName = document.getElementById('cityName').value,
    listNode = document.getElementById('cities'),
    liNode = document.createElement("li"),
    txtNode = document.createTextNode(cityName);

  liNode.appendChild(txtNode)
  listNode.appendChild(liNode)
  liNode.setAttribute("class", "list-group-item list-group-item-action")

  localStorage.setItem("lastCity", cityName)
  document.getElementById("currentCity").innerHTML = cityName

}


// fetch weather data and post to page

fetch(`https://api.openweathermap.org/geo/1.0/direct?q="San Diego"&limit=5&appid=${apiKey}`)
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    console.log(data)
    let lat = data[0].lat
    let lon = data[0].lon
    console.log(lat, lon)

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,&appid=${apiKey}`)
      .then(function (response) {
        return response.json();
      })

      .then(function (data) {
        console.log(data)
        temp = data.current.temp
        wind_speed = data.current.wind_speed
        humidity = data.current.humidity
        uv = data.current.uvi
        condition = data.current.weather[0].icon
        console.log(temp, wind_speed, humidity, uv, condition)

        // let icon = "<img src='https://openweathermap.org/img/w/01n.png'>"

        document.getElementById("currentTemp").innerHTML = temp
        document.getElementById("currentWind").innerHTML = wind_speed
        document.getElementById("currentHumidity").innerHTML = humidity
        document.getElementById("currentUv").innerHTML = uv
        document.getElementById("currentIcon").innerHTML = "<img src='https://openweathermap.org/img/w/" + condition + ".png'>"

        temp1 = data.daily[1].temp.day
        wind_speed1 = data.daily[1].wind_speed
        humidity1 = data.daily[1].humidity
        condition1 = data.daily[1].weather[0].icon
        document.getElementById("currentTemp1").innerHTML = temp1
        document.getElementById("currentWind1").innerHTML = wind_speed1
        document.getElementById("currentHumidity1").innerHTML = humidity1
        document.getElementById("currentIcon1").innerHTML = "<img src='https://openweathermap.org/img/w/" + condition1 + ".png'>"


        temp2 = data.daily[2].temp.day
        wind_speed2 = data.daily[2].wind_speed
        humidity2 = data.daily[2].humidity
        condition2 = data.daily[2].weather[0].icon
        document.getElementById("currentTemp2").innerHTML = temp2
        document.getElementById("currentWind2").innerHTML = wind_speed2
        document.getElementById("currentHumidity2").innerHTML = humidity2
        document.getElementById("currentIcon2").innerHTML = "<img src='https://openweathermap.org/img/w/" + condition2 + ".png'>"


        temp3 = data.daily[3].temp.day
        wind_speed3 = data.daily[3].wind_speed
        humidity3 = data.daily[3].humidity
        condition3 = data.daily[3].weather[0].icon
        document.getElementById("currentTemp3").innerHTML = temp3
        document.getElementById("currentWind3").innerHTML = wind_speed3
        document.getElementById("currentHumidity3").innerHTML = humidity3
        document.getElementById("currentIcon3").innerHTML = "<img src='https://openweathermap.org/img/w/" + condition3 + ".png'>"


        temp4 = data.daily[4].temp.day
        wind_speed4 = data.daily[4].wind_speed
        humidity4 = data.daily[4].humidity
        condition4 = data.daily[4].weather[0].icon
        document.getElementById("currentTemp4").innerHTML = temp4
        document.getElementById("currentWind4").innerHTML = wind_speed4
        document.getElementById("currentHumidity4").innerHTML = humidity4
        document.getElementById("currentIcon4").innerHTML = "<img src='https://openweathermap.org/img/w/" + condition4 + ".png'>"


        temp5 = data.daily[5].temp.day
        wind_speed5 = data.daily[5].wind_speed
        humidity5 = data.daily[5].humidity
        condition5 = data.daily[5].weather[0].icon
        document.getElementById("currentTemp5").innerHTML = temp5
        document.getElementById("currentWind5").innerHTML = wind_speed5
        document.getElementById("currentHumidity5").innerHTML = humidity5
        document.getElementById("currentIcon5").innerHTML = "<img src='https://openweathermap.org/img/w/" + condition5 + ".png'>"



      })
  })

// https://openweathermap.org/img/w/${weather.weather[0].icon}.png