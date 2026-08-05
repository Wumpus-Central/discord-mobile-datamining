// discord_app/modules/rpc/helpers/unavailableCommand.tsx
import { RPCErrors } from "ME";

let obj = {
  handler(cmd) {
    let tmp = require("../RPCError.tsx");
    tmp = new tmp({ errorCode: RPCErrors.INVALID_COMMAND }, "Unsupported command: " + cmd.cmd);
    throw tmp;
  }
};
obj = {
  handler(cmd) {
    let tmp = require("../RPCError.tsx");
    tmp = new tmp({ errorCode: RPCErrors.INVALID_COMMAND }, "Deprecated command: " + cmd.cmd);
    throw tmp;
  }
};
const result = require("set").fileFinishedImporting("modules/rpc/helpers/unavailableCommand.tsx");

export const unsupportedCommand = obj;
export const deprecatedCommand = obj;