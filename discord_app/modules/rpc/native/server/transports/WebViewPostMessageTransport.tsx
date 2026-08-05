// discord_app/modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx
import importDefaultResult from "map";
import { stripSensitiveLoggingData } from "../../../helpers/stripSensitiveLoggingData.tsx";

importDefaultResult = new importDefaultResult(require("validateSocketClient").validateSocketClient, new require("validateSocketClient")("RPCServer:PostMessage"), require("logger"), (arg0, info, id) => {
  const combined = "Socket Message: " + id.id;
  info.info(combined, stripSensitiveLoggingData(arg0));
});
const tmp2 = new require("validateSocketClient")("RPCServer:PostMessage");
const result = require("map").fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default importDefaultResult;