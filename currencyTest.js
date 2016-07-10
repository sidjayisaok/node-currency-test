//api test via node using http://fixer.io/
//exchange rates set by the European Central Bank

var request = require('request');

var argument1 = process.argv[2];

var argument2 = process.argv[3];

var myCurrency = argument1.toUpperCase();

var yourCurrency =argument2.toUpperCase();

var queryURL = "https://api.fixer.io/latest?base=" + myCurrency + "&rates=" + yourCurrency;

console.log(queryURL);

//make the request call here
request(queryURL, function(error, response, body){
  if(!error && response.statusCode === 200){
    var currencyReturn = JSON.parse(body);
    console.log("You selected " + currencyReturn["base"]);
    console.log("This is worth " + currencyReturn.rates[yourCurrency] + " " + yourCurrency);
  }
});
