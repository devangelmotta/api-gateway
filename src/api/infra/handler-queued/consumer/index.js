var q = "tasks";
var open = require("amqplib").connect("amqp://localhost");
const {
  verifyToken
} = require("../../../http/process-request-microservices/auth.process");
const AuthSuccessEmitter = require("./handle-auth-listener");
const FutureCompletable = new AuthSuccessEmitter();

async function handlerConsumerTask() {
  console.log("Starting consumer task");
  let conn = await open;
  let ch = await conn.createChannel();
  let assertQueued = await ch.assertQueue(q);
  let consumeTask = await ch.consume(q, async (msg) => {
    if (msg !== null) {
      let dataString = msg.content.toString();
      dataString = JSON.parse(dataString);
      let authValidate = false;

      if (authValidate) {
        if (authValidate.error == undefined)
          return FutureCompletable.emit("completeAuth", authValidate);
        else FutureCompletable.emit("errorAuth", authValidate);
      } else FutureCompletable.emit("errorAuth", authValidate);
    }
  });
}

module.exports = { FutureCompletable };
