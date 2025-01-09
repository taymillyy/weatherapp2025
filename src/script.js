function displayWeather(response){
    // Get and display temperature in Fahrenheit
    let temperature = document.querySelector("#temperature");
     temperature.innerHTML = Math.round(response.data.temperature.current);
     let city = document.querySelector("#city");
     city.innerHTML= response.data.city;
       
     // Get and display humidity description
     let humidity = document.querySelector ("#humidity");
     humidity.innerHTML = response.data.temperature.humidity + "%";

// Get and display wind speed
     let windSpeed = document.querySelector("#wind");
     windSpeed.innerHTML = Math.round(response.data.wind.speed) + "km/h";

   // Get and display weather description
     let description = document.querySelector("#weather-description");
     description.innerHTML = response.data.condition.description;

     let currentTime = document.querySelector("#current-time");
     let date = new Date(response.data.time  * 1000);
     currentTime.innerHTML = displayDate(date);

     // Get and display weather icon
     let icon =document.querySelector("#icon");
     icon.innerHTML = `<img src="${response.data.condition.icon_url}" id="icon" />`;
    

     getForecast(response.data.city);
    }

// Function to display current date and time in the format "Day, Hours:Minutes" 
function displayDate(date){
let hours = date.getHours();
let minutes = date.getMinutes();
if (minutes < 10) { minutes = "0" + minutes; };
if (hours < 10) { hours = "0" + hours; };

let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = daysOfWeek[date.getDay()];
return `${day} ${hours} : ${minutes}`;
}


// Function to get weather data for a given city and display it 
function displayCity (city){
    let apiKey = "ae7b90f5bo7b8e38ebb290dt472f4b1b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
   
    axios.get(apiUrl).then(displayWeather);
}
//
function showCity(event){
    event.preventDefault();
    let text = document.querySelector("#text-form");
  
    displayCity(text.value);
}

let form = document.querySelector("#form");
form.addEventListener("submit", showCity);

// Display weather for Chicago by default 
displayCity("Chicago");

// Function to display weather forecast for the next 5 days
function displayForecast(response){
    console.log(response.data);

let foreHtml = "";

// Add forecast for the next 5 days

response.data.daily.forEach(function (day, index) {
   if (index < 5) {
    foreHtml = foreHtml +
      ` 
    <div class="forcast-day">
     <div class="weather-date"> ${formatDate(day.time)}</div>
      <div > 
      <img src="${day.condition.icon_url}" class="forcast-icon"/>
        </div>
      <div class="weather-temp">
       <div class="weather-temps"> <strong> ${Math.round(day.temperature.maximum)}° </strong> 
       </div>
       <div class="weather-temps"> ${Math.round(day.temperature.minimum)}°
       </div>
         </div>
 </div>
 `;
}});
let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = foreHtml
}

function formatDate(timestamp){
let date = new Date(timestamp * 1000);
let day =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
return day[date.getDay()];
}
// Call the function to display the weather forecast for the next 5 days
displayForecast();

function getForecast(city){
    let apiKey = "ae7b90f5bo7b8e38ebb290dt472f4b1b";
    let apiUrl= `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;
axios.get(apiUrl).then(displayForecast);
}
