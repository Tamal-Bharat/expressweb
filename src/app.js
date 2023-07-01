const express = require('express');
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8081;

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../templates'));
hbs.registerPartials(path.join(__dirname, '../templates/partials'));

app.get('/', (request, response)=>{
    response.render('htmls/index');
});

app.get('/about', (request, response)=>{
    response.render('htmls/about');
});

app.get('/weather', (request, response)=>{
    response.render('htmls/weather');
});

app.get('*', (request, response)=>{
    response.render('htmls/404_error');
});

app.get('/weather', (request, response)=>{
    response.send(`Welcome to my weather page`);
});

app.listen(port, (error)=>{
    if(error == null || error == undefined){
        console.log(`Application running at port ${port}`);
    }
    else{
        console.log(`ERROR: ${error}`);
    }    
});