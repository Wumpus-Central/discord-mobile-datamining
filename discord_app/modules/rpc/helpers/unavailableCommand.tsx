// === Module 14518: unavailableCommand ===

// Module 14518 (unavailableCommand)
import Constants from "Constants" /* 1074 */;
import RPCErrorDefault from "RPCError" /* 9554 */;
import size from "module_2" /* 2 */;

const RPCErrors = Constants.RPCErrors;
let obj = {
  handler(cmd) {
    let tmp = RPCErrorDefault;
    tmp = new tmp({ errorCode: RPCErrors.INVALID_COMMAND }, "Unsupported command: " + cmd.cmd);
    throw tmp;
  }
};
obj = {
  handler(cmd) {
    let tmp = RPCErrorDefault;
    tmp = new tmp({ errorCode: RPCErrors.INVALID_COMMAND }, "Deprecated command: " + cmd.cmd);
    throw tmp;
  }
};
const result = size.fileFinishedImporting("modules/rpc/helpers/unavailableCommand.tsx");

export const unsupportedCommand = obj;
export const deprecatedCommand = obj;