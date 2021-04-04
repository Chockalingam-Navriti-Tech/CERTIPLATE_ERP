const express = require("express");
const app = express();
const ejs = require("ejs");
//const https = require('https');
const fs = require("fs");
const bodyparser = require("body-parser");

//Import Routes
const master_data = require("./Router/masterData");
const internal_api_docs = require("./Router/api-docs");
app.set("view engine", "ejs");

const urlEncodedParser = bodyparser.urlencoded({ extended: false });

/*const httpsServerOption = {
    'key': fs.readFileSync('./https/privatekey.pem'),
    'cert': fs.readFileSync('./https/certificate.pem')
};*/

//App level Middleware
app.use("/api-internal", internal_api_docs);
//app.use('/api-external', external_api_docs);
app.use("/api/masterData", master_data);
app.use(express.static("views"));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/verify", urlEncodedParser, (req, res) => {
    if (req.body.API_Key == process.env.internal_apikey) {
        res.cookie("internal-access", "true", { maxAge: 3600000 });
        res.redirect("/api-internal/docs");
    }
    /* else if (req.body.API_Key == process.env.external_apikey) {
            res.cookie("external-access", "true", { maxAge: 1800000 });
            res.redirect("/api-external/docs");
        }*/
    else {
        res.redirect("/");
    }
});
//Start the server
//var httpsServer = https.createServer(httpsServerOption, app);

app.listen("3000", () => console.log("Server up and running"));