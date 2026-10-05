// === Module 14329: logs ===

// Module 14329 (logs)
import LoggerDefault from "Logger" /* 3 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9029 */;
import RPCHelpers from "RPCHelpers" /* 9031 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let RPCCommands;
let RPC_APPLICATION_LOGGING_CATEGORY;
({ RPC_APPLICATION_LOGGING_CATEGORY, RPCCommands } = Constants);
let closure_3 = new LoggerDefault(RPC_APPLICATION_LOGGING_CATEGORY);
let obj = {
  validation(string) {
    let maxResult;
    let maxResult1;
    const obj = createRpcJoiSchemaObjectDefault(string);
    const obj2 = { level: maxResult.required(), message: maxResult1.required() };
    const keys = obj.required().keys;
    obj.required();
    const stringResult = string.string();
    maxResult = stringResult.max(10);
    const stringResult1 = string.string();
    maxResult1 = stringResult1.max(1000);
    return keys(obj2);
  },
  handler(arg0) {
    let args;
    let socket;
    ({ socket, args } = arg0);
    const level = args.level;
    const message = args.message;
    const obj = RPCHelpers;
    const result = obj.validatePostMessageTransport(socket.transport);
    const combined = "" + socket.application.id + " - " + message;
    if ("log" === level) {
      closure_3.log(combined);
    } else if ("warn" === level) {
      closure_3.warn(combined);
    } else if ("debug" === level) {
      closure_3.verbose(combined);
    } else if ("info" === level) {
      closure_3.info(combined);
    } else if ("error" === level) {
      closure_3.error(combined);
    }
  }
};
new LoggerDefault(RPC_APPLICATION_LOGGING_CATEGORY);
let result = size.fileFinishedImporting("modules/rpc/server/commands/logs.tsx");

export default { [RPCCommands.CAPTURE_LOG]: obj };