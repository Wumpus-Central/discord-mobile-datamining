// === Module 15818: unavailableCommand ===

// Module 15818 (unavailableCommand)
import Constants from "Constants" /* 1084 */;
import RPCErrorDefault from "RPCError" /* 9264 */;
import size from "module_2" /* 2 */;

const RPCErrors = Constants.RPCErrors;
const result = size.fileFinishedImporting("modules/rpc/helpers/unavailableCommand.tsx");

export const unsupportedCommand = {
  handler(cmd) {
    const obj = { errorCode: RPCErrors.INVALID_COMMAND };
    throw new RPCErrorDefault({ errorCode: RPCErrors.INVALID_COMMAND }, "Unsupported command: " + cmd.cmd);
  }
};
export const deprecatedCommand = {
  handler(cmd) {
    const obj = { errorCode: RPCErrors.INVALID_COMMAND };
    throw new RPCErrorDefault({ errorCode: RPCErrors.INVALID_COMMAND }, "Deprecated command: " + cmd.cmd);
  }
};