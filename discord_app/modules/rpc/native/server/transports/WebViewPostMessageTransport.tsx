// discord_app/modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx
import LoggerDefault from "../../../../debug/Logger.tsx";
import stripSensitiveLoggingDataDefault from "../../../helpers/stripSensitiveLoggingData.tsx";
import WebViewWindowProxySocketFactoryDefault from "WebViewWindowProxySocketFactory.tsx";
import PostMessageTransport from "../../../transports/PostMessageTransport.tsx";

PostMessageTransport = new PostMessageTransport(
  fn(9558).validateSocketClient,
  new LoggerDefault("RPCServer:PostMessage"),
  WebViewWindowProxySocketFactoryDefault,
  (arg0, info, id) => {
    const combined = "Socket Message: " + id.id;
    info.info(combined, stripSensitiveLoggingDataDefault(arg0));
  },
);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default PostMessageTransport;
