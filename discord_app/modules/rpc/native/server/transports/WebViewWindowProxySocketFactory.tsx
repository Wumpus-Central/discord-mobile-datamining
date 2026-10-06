// discord_app/modules/rpc/native/server/transports/WebViewWindowProxySocketFactory.tsx
import stripSensitiveLoggingDataDefault from "../../../helpers/stripSensitiveLoggingData.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/rpc/native/server/transports/WebViewWindowProxySocketFactory.tsx");

export default function _default(logger) {
  let encoding;
  let postClose;
  let postMessageToRPCClient;
  let source;
  let version;
  logger = logger.logger;
  ({ source, postMessageToRPCClient, version, encoding, postClose } = logger);
  const obj = {
    source,
    postMessageToRPCClient,
    version,
    encoding,
    logger,
    postClose,
    onSendingToRPCClient(arg0, id) {
      const info = logger.info;
      const combined = "Socket Emit: " + id;
      info(combined, stripSensitiveLoggingDataDefault(arg0));
    },
  };
  const tmp = new logger(9068)(obj);
  return tmp;
}
