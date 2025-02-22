import { WebSocketServer } from "ws";
const ws = new WebSocketServer({ port: 8080 }); //2 lines to code to make a ws server.

let userCoutn = 0;

ws.on("connection", (socket) => {
  //on connection run this callback
  userCoutn = userCoutn + 1;
  console.log(`${userCoutn} user are connected`);

  socket.on("message", (message) => {
    //on the message event run this message callback with the value and console it to cmd.
    console.log("Message recived", message.toString());
  });
});
