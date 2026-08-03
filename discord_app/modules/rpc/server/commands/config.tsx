// === Module 13613: ? ===

// Module 13613
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";
import ME from "ME";

let RPC_AUTHENTICATED_SCOPE;
let obj1;
({ TransportTypes: obj1, RPC_AUTHENTICATED_SCOPE } = RPC_SCOPE_CONFIG);
const RPCErrors = ME.RPCErrors;
const result = require("createRpcJoiSchemaObject").fileFinishedImporting("modules/rpc/server/commands/config.tsx");

export default {
  [ME.RPCCommands.SET_CONFIG]: {
    scope: RPC_AUTHENTICATED_SCOPE,
    validation(boolean) {
      let obj = importDefault(10696)(boolean);
      obj = { use_interactive_pip: boolean.boolean() };
      return obj.required().keys(obj);
    },
    handler(socket) {
      socket = socket.socket;
      const use_interactive_pip = socket.args.use_interactive_pip;
      if (socket.transport !== constants.POST_MESSAGE) {
        let obj = { errorCode: null };
        obj[0] = RPCErrors.INVALID_COMMAND;
        const _HermesInternal = HermesInternal;
        let tmp15 = importDefault(10693);
        tmp15 = new tmp15(obj, "command not available from \"" + socket.transport + " transport");
        throw tmp15;
      } else if (null == socket.application.id) {
        obj = { errorCode: null };
        obj[0] = RPCErrors.INVALID_COMMAND;
        const tmp11 = new importDefault(10693)(obj, "invalid application");
        throw tmp11;
      } else {
        obj = importDefault(709);
        const obj1 = { type: "EMBEDDED_ACTIVITY_SET_CONFIG", applicationId: null, config: null };
        obj1[1] = socket.application.id;
        const obj2 = { useInteractivePIP: null };
        obj2[0] = use_interactive_pip;
        obj1[2] = obj2;
        obj.dispatch(obj1);
        const obj3 = { use_interactive_pip: null };
        obj3[0] = use_interactive_pip;
        return Promise.resolve(obj3);
      }
    }
  }
};