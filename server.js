// JavaScript File
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var useragent = require('express-useragent')

app.use(useragent.express());
app.listen(port, function(){
    console.log("Node.js running on port: " + port)
})


app.get('/', function(req, res){
    var ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var language = req.headers["accept-language"].split(',')[0];
    var browser = req.useragent.browser
    var os = req.useragent.os
    var returnObj = {"IP": ipAddress, "Language" : language, "Browser": browser, "Os": os}
    
    res.send(returnObj)
    
});

