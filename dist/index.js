"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const ws = new ws_1.WebSocketServer({ port: 8080 }); //2 lines to code to make a ws server.
let userCoutn = 0;
ws.on("connection", (socket) => {
    userCoutn = userCoutn + 1;
    console.log(`${userCoutn} user are connected`);
    socket.on("message", (message) => {
        console.log("Message recived", message);
    });
});
