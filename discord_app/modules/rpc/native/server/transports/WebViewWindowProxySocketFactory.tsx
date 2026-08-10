// discord_app/modules/rpc/native/server/transports/WebViewWindowProxySocketFactory.tsx
const result = require("set").fileFinishedImporting("modules/rpc/native/server/transports/WebViewWindowProxySocketFactory.tsx");

export default function _default(logger) {
  let encoding;
  let postClose;
  let postMessageToRPCClient;
  let source;
  let version;
  logger = logger.logger;
  ({ source, postMessageToRPCClient, version, encoding, postClose } = logger);
  return new logger(10746)({
    source,
    postMessageToRPCClient,
    version,
    encoding,
    logger,
    postClose,
    onSendingToRPCClient(arg0, id) {
      const combined = "Socket Emit: " + id;
      logger.info(combined, logger(outer1_1[1])(arg0));
    }
  });
};