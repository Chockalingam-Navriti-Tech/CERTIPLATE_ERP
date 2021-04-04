"use strict";

var express = require("express");

var app = express();

var ejs = require("ejs"); //const https = require('https');


var fs = require("fs");

var bodyparser = require("body-parser"); //Import Routes


var assessors = require("./Router/assessor");

var internal_api_docs = require("./Router/api-docs");

var external_api_docs = require('./Router/api-docs-external');

app.set("view engine", "ejs");
var urlEncodedParser = bodyparser.urlencoded({
  extended: false
});
/*const httpsServerOption = {
    'key': fs.readFileSync('./https/privatekey.pem'),
    'cert': fs.readFileSync('./https/certificate.pem')
};*/
//App level Middleware

app.use("/api-internal", internal_api_docs);
app.use('/api-external', external_api_docs);
app.use("/api/assessor", assessors);
app.use(express["static"]("views"));
app.get("/", function (req, res) {
  res.render("index");
});
app.post("/verify", urlEncodedParser, function (req, res) {
  if (req.body.API_Key == process.env.internal_apikey) {
    res.cookie("internal-access", "true", {
      maxAge: 1800000
    });
    res.redirect("/api-internal/docs");
  } else if (req.body.API_Key == process.env.external_apikey) {
    res.cookie("external-access", "true", {
      maxAge: 1800000
    });
    res.redirect("/api-external/docs");
  } else {
    res.redirect("/");
  }
}); //Start the server
//var httpsServer = https.createServer(httpsServerOption, app);

app.listen("3000", function () {
  return console.log("Server up and running");
});