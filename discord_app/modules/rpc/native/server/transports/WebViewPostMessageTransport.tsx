// === Module 10820: ? ===

// Module 10820
import timestampDefault from "timestamp" /* 3 */;
import stripSensitiveLoggingDataDefault from "stripSensitiveLoggingData" /* 10821 */;
import loggerDefault from "logger" /* 10832 */;
import importDefaultResult from "map" /* 10822 */;

importDefaultResult = new importDefaultResult(require("validateSocketClient").validateSocketClient, new timestampDefault("RPCServer:PostMessage"), loggerDefault, (arg0, info, id) => {
  const combined = "Socket Message: " + id.id;
  info.info(combined, stripSensitiveLoggingDataDefault(arg0));
});
const tmp2 = new timestampDefault("RPCServer:PostMessage");
const result = require("set").fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default importDefaultResult;