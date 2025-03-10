const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("search-btn");
const weatherImg = document.querySelector(".weather-img");
const temp = document.querySelector(".temp");
const description = document.querySelector(".description");
const humidity = document.querySelector(".humid");
const windSpeed = document.querySelector(".wind-speed");
const weatherbody = document.querySelector(".weather-body");
const errorMsg = document.querySelector(".error-msg");

async function checkWeather(city) {
    const api_key = "9ae7515f5a400fdd2698e62f9e845d78";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data); //debugging step

        //Updating content in weather body
        temp.innerText = `${Math.round(data.main.temp - 273.15)}°C`;
        description.innerText = `${data.weather[0].description}`;
        humidity.innerText = `${data.main.humidity}%`;
        windSpeed.innerText = `${data.wind.speed}Km/hr`;

        switch (data.weather[0].main) {
            case "Clouds":
                weatherImg.src = "/weather Images/cloud.png";
                break;
            case "Clear":
                weatherImg.src = "/weather Images/clear.png";
                break;
            case "Rain":
                weatherImg.src = "/weather Images/rain.png";
                break;
            case "Mist":
                weatherImg.src = "/weather Images/mist.png";
                break;
            case "Snow":
                weatherImg.src = "/weather Images/snow.png";
                break;
        }
        weatherbody.style.display = "flex";
    }

    catch (error) {
        console.log("Error Occured", error);
        errorMsg.style.display = "flex";
        weatherbody.style.display = "none";
        return;
    }
    errorMsg.style.display = "none";
}

searchBtn.addEventListener("click", () => {
    checkWeather(inputBox.value);
    inputBox.value = "";
})


