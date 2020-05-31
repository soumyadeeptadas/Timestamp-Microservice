// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/timestamp/", function(req, res, next) {
  let date = new Date().getTime();
  let unixDate = date;
  let utcDate = new Date(date);
  utcDate = utcDate.toUTCString();

  res.json({ unix: unixDate, utc: utcDate });
});

app.get("/api/timestamp/:dateVal", function(req, res, next) {
  let date = req.params.dateVal;
  let utcDate;
  let unixDate;

  if (isNaN(date)) {
    utcDate = new Date(date).toUTCString();
    unixDate = new Date(date).getTime();
  } else {
    date = parseInt(date);
    unixDate = new Date(date).getTime();
    utcDate = new Date(date).toUTCString();
  }

  var response =
    utcDate == "Invalid Date"
      ? { error: "Invalid Date" }
      : { unix: unixDate, utc: utcDate };

  res.json(response);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log(`Your app is listening on: localhost:${listener.address().port}`);
});
