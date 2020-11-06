const express = require('express');
const router = express.Router();

const getWeather = require('../lib/getWeather');



router.get('/', async(req,res) => {
    let data = await getWeather("Mold", "UK");
    let name = data.name;
    let temp = data.main.temp;
    let feels_like = data.main.feels_like;
    res.render('index', {
        name, 
        temp,
        data: {temp, feels_like}
    });
});

module.exports = router;