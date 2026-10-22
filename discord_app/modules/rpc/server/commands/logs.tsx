// === Module 15684: logs ===

// Module 15684 (logs)
import LoggerDefault from "Logger" /* 3 */;
import RPCHelpers from "RPCHelpers" /* 11424 */;
import Constants from "Constants" /* 1087 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15665 */;
import size from "module_2" /* 2 */;

({ RPCCommands, RPC_APPLICATION_LOGGING_CATEGORY } = Constants);
let closure_2 = new LoggerDefault(RPC_APPLICATION_LOGGING_CATEGORY);
let obj = {};
obj[RPCCommands.CAPTURE_LOG] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.CAPTURE_LOG, {
  handler(arg0) {
    ({ socket, args } = arg0);
    const level = args.level;
    const result = RPCHelpers.validatePostMessageTransport(socket.transport);
    const combined = "" + socket.application.id + " - " + args.message;
    if ("log" === level) {
      closure_2.log(combined);
    } else if ("warn" === level) {
      closure_2.warn(combined);
    } else if ("debug" === level) {
      closure_2.verbose(combined);
    } else if ("info" === level) {
      closure_2.info(combined);
    } else if ("error" === level) {
      closure_2.error(combined);
    }
  }
});
let result = size.fileFinishedImporting("modules/rpc/server/commands/logs.tsx");

export default obj;