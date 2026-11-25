// === Module 10183: WebViewWindowProxySocketFactory ===

// Module 10183 (WebViewWindowProxySocketFactory)
import stripSensitiveLoggingDataDefault from "stripSensitiveLoggingData" /* 10171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/native/server/transports/WebViewWindowProxySocketFactory.tsx");

export default function _default(logger) {
  logger = logger.logger;
  ({ source, context, postMessageToRPCClient, version, encoding, postClose } = logger);
  return new logger(10184)({
    source,
    context,
    postMessageToRPCClient,
    version,
    encoding,
    logger,
    postClose,
    onSendingToRPCClient(arg0, id) {
      const combined = "Socket Emit: " + id;
      logger.info(combined, stripSensitiveLoggingDataDefault(arg0));
    }
  });
};