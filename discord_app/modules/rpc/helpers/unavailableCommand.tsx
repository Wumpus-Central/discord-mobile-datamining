// === Module 13885: unsupportedCommand ===

// Module 13885 (unsupportedCommand)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import prototypeDefault from "prototype" /* 8752 */;

const RPCErrors = ME.RPCErrors;
const obj = {
  handler(cmd) {
    let tmp = prototypeDefault;
    tmp = new tmp({ errorCode: RPCErrors.INVALID_COMMAND }, "Deprecated command: " + cmd.cmd);
    throw tmp;
  }
};
const result = obj132.fileFinishedImporting("modules/rpc/helpers/unavailableCommand.tsx");

export const unsupportedCommand = obj;
export const deprecatedCommand = obj;