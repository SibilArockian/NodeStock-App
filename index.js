//Stock Market Portfolio App by Sibil Arockian 

const express = require('express')
const app = express()
const exphbs = require('express-handlebars');
const path = require('path');
const request = require('request');

const PORT = process.env.port || 5000;

//API key Welcome to Alpha Vantage! Your dedicated access key is: OQOCVU5FVU5CFOS8. Please record this API key at a safe place for future data access.

request('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=OQOCVU5FVU5CFOS8', {json: true}, (err, res, body) => {
	if(err){return console.log(err);}
	console.log(body);
	if(res.statusCode == 200){
		console.log(body);
	};
});




//Set Handlebars Middleware

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


//Set handlebar routes
app.get('/', function (req, res){
    res.render('home', {
    	stuff: "This is stuff..."
    });
});

//create about page route
app.get('/about.html', function (req, res){
    res.render('about');
});


//Set static folder
app.use(express.static(path.join(__dirname, 'public')));



app.listen(PORT, () => console.log('Server Listening on port ' + PORT));
