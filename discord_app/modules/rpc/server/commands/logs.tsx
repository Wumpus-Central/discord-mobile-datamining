// === Module 14488: logs ===

// Module 14488 (logs)
import LoggerDefault from "Logger" /* 3 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9557 */;
import RPCHelpers from "RPCHelpers" /* 9559 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ RPC_APPLICATION_LOGGING_CATEGORY, RPCCommands } = Constants);
let closure_3 = new LoggerDefault(RPC_APPLICATION_LOGGING_CATEGORY);
let result = size.fileFinishedImporting("modules/rpc/server/commands/logs.tsx");

export default {
  [RPCCommands.CAPTURE_LOG]: {
    validation(string) {
      createRpcJoiSchemaObjectDefault(string);
      const obj = { level: null, message: null };
      const requiredResult = obj.required();
      const stringResult = string.string();
      obj.level = string.string().max(10).required();
      const maxResult = string.string().max(10);
      const stringResult1 = string.string();
      obj.message = string.string().max(1000).required();
      return requiredResult.keys(obj);
    },
    handler(arg0) {
      ({ socket, args } = arg0);
      const level = args.level;
      const result = RPCHelpers.validatePostMessageTransport(socket.transport);
      const combined = "" + socket.application.id + " - " + args.message;
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
  }
};