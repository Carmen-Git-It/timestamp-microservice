// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/:d/api", (res, req) => {
  res.send({"d": req.params.d});
});
/*
app.get("/api/:date", (res, req) => {
  console.log(req.params);
  res.send({"Date": req.params.date});
  /*let date = new Date(req.params.date);
  if (isNaN(date)) {
    // Date is invalid
  } else {
    res.send({"unix": date.getTime().toString()});
  }
});*/

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
