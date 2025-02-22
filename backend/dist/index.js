"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const ws = new ws_1.WebSocketServer({ port: 8080 }); //2 lines to code to make a ws server. (this sever maintains all the connection but doest not create diff instance on each connection)
let userCoutn = 0;
let allSocket = [];
ws.on("connection", (socket) => {
    //on connection run this callback.
    allSocket.push(socket);
    userCoutn = userCoutn + 1;
    console.log(`${userCoutn} user are connected`);
    socket.on("message", (message) => {
        //on the message event run this message callback with the value and console it to cmd.
        console.log("Message recived", message.toString());
        for (let i = 0; i < allSocket.length; i++) {
            //basic socket that stores all the connected user socket and send them message that it recivec from the other user while not sending it to same one.(brodcast)
            const s = allSocket[i];
            if (s != socket) {
                s.send(`${message}: Sent from server`);
            }
        }
    });
});
