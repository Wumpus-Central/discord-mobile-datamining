// === Module 9620: WebViewPostMessageTransport ===

// Module 9620 (WebViewPostMessageTransport)
import LoggerDefault from "Logger" /* 3 */;
import stripSensitiveLoggingDataDefault from "stripSensitiveLoggingData" /* 9621 */;
import WebViewWindowProxySocketFactoryDefault from "WebViewWindowProxySocketFactory" /* 9632 */;
import PostMessageTransport from "PostMessageTransport" /* 9622 */;

PostMessageTransport = new PostMessageTransport(fn(9628).validateSocketClient, new LoggerDefault("RPCServer:PostMessage"), WebViewWindowProxySocketFactoryDefault, (arg0, info, id) => {
  const combined = "Socket Message: " + id.id;
  info.info(combined, stripSensitiveLoggingDataDefault(arg0));
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default PostMessageTransport;