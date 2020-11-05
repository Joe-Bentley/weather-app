const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const getWeather = require('./lib/getWeather');
const bodyParser = require('body-parser');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials')
}));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', '.hbs');

app.get('/', async(req,res) => {
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

app.get('/weather', (req, res) => {
    res.render('weather');
});

app.post('/weather', async(req, res) => {
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
        data: {description, temp, feels_like},
        listExists: true
    });
});

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(3000, () => {
console.log("Listening to port 3000");
});