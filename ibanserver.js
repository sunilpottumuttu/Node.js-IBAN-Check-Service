//use ful URLS: http://www.tbg5-finance.org/?ibancheck.shtml

//learning url for node js
//http://visionmedia.github.com/masteringnode/
//http://www.nodebeginner.org/#finding-a-place-for-our-server-module
//http://stackoverflow.com/questions/5625569/include-external-js-file-in-node-js-app
//http://stackoverflow.com/questions/8590042/parsing-query-string-in-node-js
//http://stackoverflow.com/questions/8659692/node-js-express-send-data-form
//http://stackoverflow.com/questions/10112730/get-posted-data-from-form

// 1. Create a webserver (name it server.js)
// 2. Read the incoming request in webserver
// 3. download the javascript code from http://www.tbg5-finance.org/ibancheck.shtml 
// 4. Save the downloaded code into a file (iban.js)
// 5. In the sever.js call iban.js
// 6. open browser 



var checkiban = require('E:/mynodework/checkiban.js');
var http=require('http');
var util=require('util');
var querystring=require('querystring');


//var http = require('http');
var url = require('url');


//Invalid Iban Numbers
//http://localhost:8888/?iban=111



//Valid Iban Numbers
//http://localhost:8888/?iban=AL47212110090000000235698741
//http://localhost:8888/?iban=AD1200012030200359100100
//http://localhost:8888/?iban=AE070331234567890123456
//http://localhost:8888/?iban=AT611904300234573201
//http://localhost:8888/?iban=AZ21NABZ00000000137010001944
//http://localhost:8888/?iban=BA391290079401028494
//http://localhost:8888/?iban=BE68539007547034
//http://localhost:8888/?iban=BA391290079401028494

// Configure  IBAN HTTP server to respond with to all requests.
var server = http.createServer(function (request, response) 
{
	var queryData = url.parse(request.url, true).query;
	response.writeHead(200, {"Content-Type": "text/plain"});
	//if (queryData.name) 
	if (queryData.iban) 
	{
		var i = queryData.iban;
		var result = checkiban.checkiban(i);
		response.end(queryData.iban + '   is' + result);	
		//response.end('hello' + queryData.iban + '\n');
		//response.end('Hello ' + queryData.name + '\n');
	} 
	else 
	{
		response.end("Hello, This is IBAN Server\n");
	}
});

// Listen on port 8888, IP defaults to 127.0.0.1
server.listen(8888);

