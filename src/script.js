function showCity(event){
    event.preventDefault();
    let text = document.querySelector("#text-form");
    let city = document.querySelector("#city");
    city.innerHTML= text.value;
}

let form = document.querySelector("#form");
form.addEventListener("submit", showCity);