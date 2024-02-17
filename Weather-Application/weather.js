const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const apiKey = "8195ffca59595a21d209b0fd3f3df255";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
var city;
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city){
  const response = await fetch(apiURL+ city + `&appid=${apiKey}`);

  if(response.status == 404){
    document.querySelector(".error").style.display = "block"
    document.querySelector(".weather").style.display = "none"
  }else{
    var data  = await response.json();

    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(Math.round(data.main.temp)) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  
    if(data.weather[0].main == "Clouds"){
      weathericon.src = "images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
      weathericon.src = "images/clear.png";
    }else if(data.weather[0].main =="Rain"){
      weathericon.src = "images/rain.png";
    }else if(data.weather[0].main =="Drizzle"){
      weathericon.src = "images/drizzle.png";
    }else if(data.weather[0].main =="Mist"){
      weathericon.src = "images/Mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none"
  
  }
  }



searchBtn.addEventListener("click",() =>{
  checkWeather(searchBox.value);
})


checkWeather(city);

