function formatHours(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`
}

function formatDate(timestamp) {
    let date = new Date(timestamp);
    let dayNumber = date.getDate();
    let days = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    let day = days[date.getDay()];
    let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Agust",
    "September",
    "October",
    "November",
    "December"
];
let month = months[date.getMonth()];

return `${day}, ${month} ${dayNumber}`;
}


function displayTemperature(response) {
    document.querySelector("#city").innerHTML= response.data.name + ", " + response.data.sys.country;
    document.querySelector("#date").innerHTML = formatDate(response.data.dt*1000)
    document.querySelector("#main-temp").innerHTML= Math.round(response.data.main.temp) + "°"; 
    document.querySelector("#description").innerHTML=response.data.weather[0].description;
    document.querySelector("#high-temp").innerHTML= Math.round(response.data.main.temp_max) + "°";
    document.querySelector("#low-temp").innerHTML= Math.round(response.data.main.temp_min) + "°";
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed) + "mph";
    document.querySelector("#sunset").innerHTML = formatHours(response.data.sys.sunset*1000);
    document.querySelector("#sunrise").innerHTML = formatHours(response.data.sys.sunrise*1000);
    document.querySelector("#rain").innerHTML = response.data.main.humidity + "%";
    let newIcon = document.querySelector("#main-icon");
    newIcon.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    newIcon.setAttribute("alt", response.data.weather[0].description);
}

function search(city){
let apiKey = "816a63a33af440332c05784e3d9896ea";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
}

search("London");
