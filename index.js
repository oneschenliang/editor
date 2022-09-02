var express = require("express");
var { WebSocketServer } = require("ws");
var ShareDB = require("sharedb");
var WebSocketJSONStream = require("@teamwork/websocket-json-stream");
var http = require("http");
const { parse } = require("path");

var app = express();
var server = http.createServer(app);

app.use(express.static('dist'))

app.get("/test", function (req, res) {
  res.send("hello world");
});

var webSocketServer = new WebSocketServer({ noServer: true });

var backend = new ShareDB();

server.on("upgrade", function upgrade(request, socket, head) {
  if (request.url === "/foo") {
    console.log("begin upgrade", request.url);
    webSocketServer.handleUpgrade(request, socket, head, function done(ws) {
      webSocketServer.emit("connection", ws, request);
    });
  } else {
    socket.destroy();
  }
});

webSocketServer.on("connection", (webSocket) => {
  var stream = new WebSocketJSONStream(webSocket);
  console.log("connection, server ip: http://localhost:8080");
  backend.listen(stream);
});

server.listen(8080);
