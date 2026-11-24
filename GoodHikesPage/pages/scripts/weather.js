//function to fetch and display 5 day weather content
function loadWeather(latitude, longitude) {

    //Open-Mateo weather API url with coordinates for location and parameters
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weather_code,precipitation_probability_max&temperature_unit=fahrenheit&timezone=auto&forecast_days=5`;
        //fetch api request and convert response to json
        fetch(url)
            .then(response => response.json())
            .then(json => {

                //get daily weather data from json response
                const daily = json.daily;

                //loop and create a weather card for each day
                for (let i = 0; i < daily.time.length; i++) {
                    const article = document.createElement("article");
                    article.className = "weather-card";
                    article.innerHTML = `
                        <h4>${daily.time[i]}</h4>
                        <p><strong>High:</strong> ${daily.temperature_2m_max[i]}°F</p>
                        <p><strong>Low:</strong> ${daily.temperature_2m_min[i]}°F</p>
                        <p><strong>Precipitation:</strong> ${daily.precipitation_probability_max[i]}%</p>
                    `;

                    //append back to forecast container
                    forecast.appendChild(article);
                }
            });
}

