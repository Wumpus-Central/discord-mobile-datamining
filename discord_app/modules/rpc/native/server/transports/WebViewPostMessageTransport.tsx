// discord_app/modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx
import LoggerDefault from "../../../../debug/Logger.tsx";
import stripSensitiveLoggingDataDefault from "../../../helpers/stripSensitiveLoggingData.tsx";
import NativeRPCHelpers from "../NativeRPCHelpers.tsx";
import WebViewWindowProxySocketFactoryDefault from "WebViewWindowProxySocketFactory.tsx";
import PostMessageTransport from "../../../transports/PostMessageTransport.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const tmp2 = new LoggerDefault("RPCServer:PostMessage");
const importDefaultResult1 = new PostMessageTransport(
  NativeRPCHelpers.validateSocketClient,
  tmp2,
  WebViewWindowProxySocketFactoryDefault,
  (arg0, info, id) => {
    info = info.info;
    const combined = "Socket Message: " + id.id;
    info(combined, stripSensitiveLoggingDataDefault(arg0));
  },
);
const result = size.fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default importDefaultResult1;
