// discord_app/modules/rpc/server/commands/logs.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import RPCHelpers from "../../RPCHelpers.tsx";
import Constants from "../../../../Constants.tsx";
import CONTEXT_MENU_ICON_NAMES from "../../../../../discord_common/js/packages/rpc-schema/rpc-schema.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
  },
});
let result = size.fileFinishedImporting("modules/rpc/server/commands/logs.tsx");

export default obj;
