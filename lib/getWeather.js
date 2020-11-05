const fetch = require('node-fetch');
require('dotenv').config();


const getWeather = async(city, countryCode) => {
    let data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=${process.env.APPID}`);
    return await data.json();
}

getWeather();

module.exports = getWeather;