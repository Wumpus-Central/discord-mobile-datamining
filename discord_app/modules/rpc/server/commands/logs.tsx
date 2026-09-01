// discord_app/modules/rpc/server/commands/logs.tsx
import set from "../../../../../_runtime/00002_set.js";
import timestampDefault from "../../../debug/Logger.tsx";
import createRpcJoiSchemaObjectDefault from "../../helpers/createRpcJoiSchemaObject.tsx";
import recurseReplaceContentTree from "../../RPCHelpers.tsx";
import ME from "../../../../Constants.tsx";

({ RPC_APPLICATION_LOGGING_CATEGORY, RPCCommands } = ME);
let closure_3 = new timestampDefault(RPC_APPLICATION_LOGGING_CATEGORY);
let obj = {
  validation(string) {
    let obj = createRpcJoiSchemaObjectDefault(string);
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
    ({ socket, args } = arg0);
    const level = args.level;
    const result = recurseReplaceContentTree.validatePostMessageTransport(socket.transport);
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
};
const tmp3 = new timestampDefault(RPC_APPLICATION_LOGGING_CATEGORY);
let result = set.fileFinishedImporting("modules/rpc/server/commands/logs.tsx");

export default { [RPCCommands.CAPTURE_LOG]: obj };
