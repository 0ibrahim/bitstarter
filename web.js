var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buffer = new Buffer()
    index = fs.readFileSync("index.html")
    buffer.write(index, "utf-8")
    content = buffer.toString("utf-8")
    response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});