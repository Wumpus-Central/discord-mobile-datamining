// === Module 14763: logs ===

// Module 14763 (logs)
import LoggerDefault from "Logger" /* 3 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9583 */;
import RPCHelpers from "RPCHelpers" /* 9585 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ RPC_APPLICATION_LOGGING_CATEGORY, RPCCommands } = Constants);
let closure_3 = new LoggerDefault(RPC_APPLICATION_LOGGING_CATEGORY);
let result = size.fileFinishedImporting("modules/rpc/server/commands/logs.tsx");

export default {
  [RPCCommands.CAPTURE_LOG]: {
    validation(string) {
      const obj = createRpcJoiSchemaObjectDefault(string);
      const obj2 = { level: null, message: null };
      const requiredResult = createRpcJoiSchemaObjectDefault(string).required();
      const stringResult = string.string();
      obj2.level = string.string().max(10).required();
      const maxResult = string.string().max(10);
      const stringResult1 = string.string();
      obj2.message = string.string().max(1000).required();
      return requiredResult.keys(obj2);
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