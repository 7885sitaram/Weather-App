
var ldn = function(){
    document.getElementById("date-time").innerHTML = new Date().toLocaleString("en-US", {
     dateStyle : "full",
     timeZone : "Asia/kolkata",
     timeStyle : "full",
     hourCycle : "h24",
     
   })

   } 

   setInterval(ldn , 1000)

// document.getElementById('date-time').innerHTML = dt;

const searchbox = document.querySelector(".inputbox");
const searchbtn = document.querySelector(".inputbtn");
const weatherimg = document.querySelector(".weather-icon");
const loc = document.querySelector(".city")
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const desc = document.querySelector(".desc");


async function checkweather(city){

    const apikey = "361a581f1265c47cb07c786549d045ed";
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`


    const data = await fetch(`${apiurl}`).then(Response => Response.json());
    
    if(data.cod === `404`){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
         document.body.style.background = "#111"
        return
    }

    else{

    if(data.weather[0].main == "Clouds"){

        weatherimg.src = "img/clouds.png"
        document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/blue-sky-background-with-soft-clouds-weather-forecast-concept_191066-3585.jpg')"

        if(data.weather[0].description == "scattered clouds" ){
            weatherimg.src = "img/fog.png"
            document.body.style.backgroundImage = "url('img/scarreted.jpg')"
        }

        if(data.weather[0].description == "few clouds" ){

            document.body.style.backgroundImage = "url('img/few.jpg')"
       }

       if(data.weather[0].description == "overcast clouds" ){
          weatherimg.src = "img/overcast.png"
        document.body.style.backgroundImage = "url('img/overcast2.jpg')"
        }

        if(data.weather[0].description == "broken clouds" ){

            document.body.style.backgroundImage = "url('img/xyz.jpg')"
        }
      
    }

    else if(data.weather[0].main == "Clear"){

         weatherimg.src = "img/clear.png"
         document.body.style.backgroundImage = "url('img/glowing-sun-clear-blue-sky-hot-summer-heat-wave-background-wonderful-123167027.webp')"
    }

    else if(data.weather[0].main == "Rain"){

        weatherimg.src = "img/rain.png"
         document.body.style.backgroundImage = "url('img/zzz.jpg')"

        if(data.weather[0].description == "moderate rain" ){

            document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ccW7d4ZYabBbqlYsCNyNwrerOs-tjZcGKw&s')"
       }

       if(data.weather[0].description == "light rain" ){

        document.body.style.backgroundImage = "url('img/lightrain.avif')"
        }


    }

    else if(data.weather[0].main == "Drizzle"){

        weatherimg.src = "img/drizzle.png"
        document.body.style.backgroundImage = "url('img/drizzzle.jpg')"
    }

    else if(data.weather[0].main == "Snow"){

        weatherimg.src = "img/snow.png"
        document.body.style.backgroundImage = "url('img/snow.jpg')"
    }

    else if(data.weather[0].main == "Haze"){

        weatherimg.src = "img/haze.png"
        document.body.style.backgroundImage = "url('img/haze.jpg')"
    }

    else if(data.weather[0].main == "Mist"){

        weatherimg.src = "img/foggy-day.png"
        document.body.style.backgroundImage = "url('img/mist.jpg')"

    }

    else if(data.weather[0].main == "Thunderstorm"){

        weatherimg.src = "img/1959333.png"
         document.body.style.backgroundImage = "url('https://cdn.britannica.com/57/150357-050-427E4C4F/lightning-discharge-field-cumulonimbus-cloud.jpg')"
    }



    loc.innerHTML = data.name;
    temp.innerHTML =`${Math.round(data.main.temp)}°C`;
    humidity.innerHTML =`${(data.main.humidity)}%`;
    wind.innerHTML =`${(data.wind.speed)}Km/h`;
    desc.innerHTML = data.weather[0].description;

    console.log(data);

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";


}
}

searchbtn.addEventListener('click' , ()=>{

    checkweather(searchbox.value);
})