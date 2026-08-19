// discord_app/modules/rpc/native/server/transports/WebViewWindowProxySocketFactory.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("modules/rpc/native/server/transports/WebViewWindowProxySocketFactory.tsx");

export default function _default(logger) {
  logger = logger.logger;
  ({ source, postMessageToRPCClient, version, encoding, postClose } = logger);
  return new logger(8761)({
    source,
    postMessageToRPCClient,
    version,
    encoding,
    logger,
    postClose,
    onSendingToRPCClient(arg0, id) {
      const combined = "Socket Emit: " + id;
      logger.info(combined, logger(dependencyMap[1])(arg0));
    }
  });
};