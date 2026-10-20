// === Module 11354: WebViewPostMessageTransport ===

// Module 11354 (WebViewPostMessageTransport)
import LoggerDefault from "Logger" /* 3 */;
import stripSensitiveLoggingDataDefault from "stripSensitiveLoggingData" /* 11355 */;
import WebViewWindowProxySocketFactoryDefault from "WebViewWindowProxySocketFactory" /* 11367 */;
import PostMessageTransport from "PostMessageTransport" /* 11356 */;

const tmp2 = new LoggerDefault("RPCServer:PostMessage");
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default new PostMessageTransport(fn(11362).validateSocketClient, new LoggerDefault("RPCServer:PostMessage"), WebViewWindowProxySocketFactoryDefault, (arg0, info, id) => {
  const combined = "Socket Message: " + id.id;
  info.info(combined, stripSensitiveLoggingDataDefault(arg0));
});