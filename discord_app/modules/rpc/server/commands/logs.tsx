import ME from "ME";

let RPCCommands;
let RPC_APPLICATION_LOGGING_CATEGORY;
({ RPC_APPLICATION_LOGGING_CATEGORY, RPCCommands } = ME);
let c3 = new require("recurseReplaceContentTree")(RPC_APPLICATION_LOGGING_CATEGORY);
let obj = {
  validation(string) {
    let obj = importDefault(10643)(string);
    obj = { level: null, message: null };
    const requiredResult = obj.required();
    const stringResult = string.string();
    obj[0] = string.string().max(10).required();
    const maxResult = string.string().max(10);
    const stringResult1 = string.string();
    obj[1] = string.string().max(1000).required();
    return requiredResult.keys(obj);
  },
  handler(arg0) {
    let args;
    let socket;
    ({ socket, args } = arg0);
    const level = args.level;
    const result = require(10645) /* recurseReplaceContentTree */.validatePostMessageTransport(socket.transport);
    const combined = "" + socket.application.id + " - " + args.message;
    if ("log" === level) {
      tmp3.log(combined);
    } else if ("warn" === level) {
      tmp3.warn(combined);
    } else if ("debug" === level) {
      tmp3.verbose(combined);
    } else if ("info" === level) {
      tmp3.info(combined);
    } else if ("error" === level) {
      tmp3.error(combined);
    }
  }
};
const tmp3 = new require("recurseReplaceContentTree")(RPC_APPLICATION_LOGGING_CATEGORY);
let result = require("createRpcJoiSchemaObject").fileFinishedImporting("modules/rpc/server/commands/logs.tsx");

export default { [RPCCommands.CAPTURE_LOG]: obj };