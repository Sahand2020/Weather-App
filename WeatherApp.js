let cityInput = document.getElementById("cityInput");
let addInput = document.getElementById("add");
let cityOutput = document.getElementById("cityOutput");
let desOutput = document.getElementById("description");
let tempOutput = document.getElementById("temp");
let windOutput = document.getElementById("wind");

const apiKey = "3e216d1cb2cbf69c95e6031f234c3702";

function convertToCelsius(value) {
  return (value - 273).toFixed(0);
}

async function GetWeather() {
  let weatherResult = await (
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`
    )
  ).json();

  setInfo(weatherResult);
}

function setInfo(data) {
  var cityName = data["name"];
  var description = data["weather"][0]["description"];
  var temp = data["main"]["temp"];
  var wind = data["wind"]["speed"];

  cityOutput.innerHTML = `City : ${cityName}`;
  desOutput.innerHTML = `Description : ${description}`;
  tempOutput.innerHTML = `Temperature : ${convertToCelsius(temp)}`;
  windOutput.innerHTML = `Wind Speed : ${wind} Km/h`;
}

function RemoveInput() {
  if (cityInput.value == "") {
    cityOutput.innerHTML = "City";
    desOutput.innerHTML = "Description";
    tempOutput.innerHTML = "Temperature";
    windOutput.innerHTML = "Wind Speed";
  }
}

cityInput.addEventListener("blur", RemoveInput);

addInput.addEventListener("click", GetWeather);
