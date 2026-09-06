// discord_app/modules/rpc/native/server/transports/WebViewWindowProxySocketFactory.tsx
import stripSensitiveLoggingDataDefault from "../../../helpers/stripSensitiveLoggingData.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/rpc/native/server/transports/WebViewWindowProxySocketFactory.tsx");

export default function _default(logger) {
  logger = logger.logger;
  ({ source, postMessageToRPCClient, version, encoding, postClose } = logger);
  return new logger(9563)({
    source,
    postMessageToRPCClient,
    version,
    encoding,
    logger,
    postClose,
    onSendingToRPCClient(arg0, id) {
      const combined = "Socket Emit: " + id;
      logger.info(combined, stripSensitiveLoggingDataDefault(arg0));
    },
  });
}
