// discord_app/modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx
import timestampDefault from "../../../../debug/Logger.tsx";
import stripSensitiveLoggingDataDefault from "../../../helpers/stripSensitiveLoggingData.tsx";
import loggerDefault from "WebViewWindowProxySocketFactory.tsx";
import importDefaultResult from "../../../transports/PostMessageTransport.tsx";

importDefaultResult = new importDefaultResult(require("validateSocketClient").validateSocketClient, new timestampDefault("RPCServer:PostMessage"), loggerDefault, (arg0, info, id) => {
  const combined = "Socket Message: " + id.id;
  info.info(combined, stripSensitiveLoggingDataDefault(arg0));
});
const tmp2 = new timestampDefault("RPCServer:PostMessage");
const result = require("set").fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default importDefaultResult;