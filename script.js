const Api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const ApiKey = "68f81386fd795a495b46926237451f07";
const searchbox = document.querySelector(".search-box") 
const btn = document.querySelector(".search-btn") 
let image = document.querySelector(".image-weather")

async function Weather(city){
                let res = await fetch(Api + city + `&appid=${ApiKey}`);
                if(res.status==404){
                    document.querySelector(".error").style.display = "block"
                    document.querySelector(".details").style.display = "none"
                }
                else{


                    let data = await res.json();
                    console.log(data)
    
                    document.querySelector(".temp h3").innerHTML = data.name;
                    document.querySelector(".wind h1").innerHTML = `${data.wind.speed}Km/h`;
                    document.querySelector(".temp h1").innerHTML = Math.round(data.main.temp) + "C";
                    document.querySelector(".hum h1").innerHTML = data.main.humidity + "%";
                    document.querySelector(".pressure h1").innerHTML = data.main.pressure  + "hPa";
                    document.querySelector(".wet-img h3").innerHTML = data.weather[0].description;
    
                    
                    
                    if (data.weather[0].icon == "11d"){
                        image.src = "images/day/thunder.png";
                    }
                    else if (data.weather[0].icon == "09d"){
                        image.src = "images/day/shower.png";
                    }
                    else if (data.weather[0].icon == "10d"){
                        image.src = "images/day/rain.png";
                    }
                    else if (data.weather[0].icon == "13d"){
                        image.src = "images/day/snow.png";
                    }
                    else if (data.weather[0].icon == "50d"){
                        image.src = "images/day/mist.png";
                    }
                    else if (data.weather[0].icon == "01d"){
                        image.src = "images/day/clear.png";
                    }
                    else if (data.weather[0].icon == "02d"){
                        image.src = "images/day/fewclouds.png";
                    }
                    else if (data.weather[0].icon == "03d" || "03n"){
                        image.src = "images/day/scarted.png";
                    }
                    else if (data.weather[0].icon == "04d" || "04n"){
                        image.src = "images/day/broken.png";
                    }
                    else if (data.weather[0].icon == "02d"){
                        image.src = "images/day/fewclouds.png";
                    }
                   
                    // document.querySelector(".cont").style.display = "block"

                    // document.querySelector(".error").style.display = "none"
                }
                

                // if(data.name==undefined){
                //     alert("please Spell correct")
                // }
}   
btn.addEventListener("click", ()=>{
    
    Weather(searchbox.value);
})

searchbox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      btn.click();
    }
  });


