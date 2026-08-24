// === Module 8748: ? ===

// Module 8748
import timestampDefault from "timestamp" /* 3 */;
import stripSensitiveLoggingDataDefault from "stripSensitiveLoggingData" /* 8749 */;
import loggerDefault from "logger" /* 8760 */;
import importDefaultResult from "map" /* 8750 */;

importDefaultResult = new importDefaultResult(require("validateSocketClient").validateSocketClient, new timestampDefault("RPCServer:PostMessage"), loggerDefault, (arg0, info, id) => {
  const combined = "Socket Message: " + id.id;
  info.info(combined, stripSensitiveLoggingDataDefault(arg0));
});
const tmp2 = new timestampDefault("RPCServer:PostMessage");
const result = require("set").fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default importDefaultResult;