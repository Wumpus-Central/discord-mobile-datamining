// discord_app/modules/rpc/server/commands/logs.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import createRpcJoiSchemaObjectDefault from "../../helpers/createRpcJoiSchemaObject.tsx";
import RPCHelpers from "../../RPCHelpers.tsx";
import Constants from "../../../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
    },
  },
};
