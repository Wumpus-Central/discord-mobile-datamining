// === Module 9420: ? ===

// Module 9420
import timestampDefault from "timestamp" /* 3 */;
import stripSensitiveLoggingDataDefault from "stripSensitiveLoggingData" /* 9421 */;
import loggerDefault from "logger" /* 9432 */;
import importDefaultResult from "map" /* 9422 */;

importDefaultResult = new importDefaultResult(require("validateSocketClient").validateSocketClient, new timestampDefault("RPCServer:PostMessage"), loggerDefault, (arg0, info, id) => {
  const combined = "Socket Message: " + id.id;
  info.info(combined, stripSensitiveLoggingDataDefault(arg0));
});
const tmp2 = new timestampDefault("RPCServer:PostMessage");
const result = require("set").fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default importDefaultResult;