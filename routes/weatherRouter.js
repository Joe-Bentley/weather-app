const express = require('express');
const router = express.Router();

const getWeather = require('../lib/getWeather');

router.get('/', (req, res) => {
    res.render('weather');
});

router.post('/', async(req, res) => {
    let city = req.body.city;
    let countryCode = req.body.countryCode;
    let data = await getWeather(city, countryCode);
    if (data.cod == '404') {
        res.render('weather', {
            err: 'The provided location cannot be found'
        });
        return;
    }
    let name = data.name;
    let description = data.weather[0].description;
    let temp = data.main.temp;
    let feels_like = data.main.feels_like;
    res.render('weather', {
        name,
        temp,
        data: {"Description" : description, "Feels like" : feels_like},
        listExists: true
    });
});

module.exports = router;
