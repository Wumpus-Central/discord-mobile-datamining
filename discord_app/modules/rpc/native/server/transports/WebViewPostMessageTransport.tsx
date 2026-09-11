// === Module 9641: WebViewPostMessageTransport ===

// Module 9641 (WebViewPostMessageTransport)
import LoggerDefault from "Logger" /* 3 */;
import stripSensitiveLoggingDataDefault from "stripSensitiveLoggingData" /* 9642 */;
import WebViewWindowProxySocketFactoryDefault from "WebViewWindowProxySocketFactory" /* 9653 */;
import PostMessageTransport from "PostMessageTransport" /* 9643 */;

PostMessageTransport = new PostMessageTransport(fn(9649).validateSocketClient, new LoggerDefault("RPCServer:PostMessage"), WebViewWindowProxySocketFactoryDefault, (arg0, info, id) => {
  const combined = "Socket Message: " + id.id;
  info.info(combined, stripSensitiveLoggingDataDefault(arg0));
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default PostMessageTransport;