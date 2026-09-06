// discord_app/modules/rpc/helpers/unavailableCommand.tsx
import Constants from "../../../Constants.tsx";
import RPCErrorDefault from "../RPCError.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const RPCErrors = Constants.RPCErrors;
let obj = {
  handler(cmd) {
    let tmp = RPCErrorDefault;
    tmp = new tmp({ errorCode: RPCErrors.INVALID_COMMAND }, "Unsupported command: " + cmd.cmd);
    throw tmp;
  },
};
obj = {
  handler(cmd) {
    let tmp = RPCErrorDefault;
    tmp = new tmp({ errorCode: RPCErrors.INVALID_COMMAND }, "Deprecated command: " + cmd.cmd);
    throw tmp;
  },
};
const result = size.fileFinishedImporting("modules/rpc/helpers/unavailableCommand.tsx");

export const unsupportedCommand = obj;
export const deprecatedCommand = obj;
