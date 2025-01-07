function displayWeather(response){
    let temperature = document.querySelector("#temperature");
     temperature.innerHTML = Math.round(response.data.temperature.current);
  
}
function displayCity (city){
    let apiKey = "ae7b90f5bo7b8e38ebb290dt472f4b1b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
   
    axios.get(apiUrl).then(displayWeather);
}

function showCity(event){
    event.preventDefault();
    let text = document.querySelector("#text-form");
    let city = document.querySelector("#city");
    city.innerHTML= text.value;
    displayCity(text.value);
}

let form = document.querySelector("#form");
form.addEventListener("submit", showCity);


