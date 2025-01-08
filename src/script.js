function displayWeather(response){
    let temperature = document.querySelector("#temperature");
     temperature.innerHTML = Math.round(response.data.temperature.current);
     let city = document.querySelector("#city");
     city.innerHTML= response.data.city;
       
     // Get and display humidity description
     let humidity = document.querySelector("#humidity");
     humidity.innerHTML = response.data.temperature.humidity;

// Get and display wind speed
     let windSpeed = document.querySelector("#wind");
     windSpeed.innerHTML = Math.round(response.data.wind.speed) + " mph";
  
}
function displayCity (city){
    let apiKey = "ae7b90f5bo7b8e38ebb290dt472f4b1b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
   
    axios.get(apiUrl).then(displayWeather);
}

function showCity(event){
    event.preventDefault();
    let text = document.querySelector("#text-form");
  
    displayCity(text.value);
}

let form = document.querySelector("#form");
form.addEventListener("submit", showCity);

// Display weather for Chicago by default 
displayCity("Chicago");
