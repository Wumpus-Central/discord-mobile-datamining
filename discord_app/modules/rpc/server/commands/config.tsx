// === Module 14035: commands/config ===

// Module 14035 (commands/config)
import DispatcherDefault from "Dispatcher" /* 573 */;
import RPCErrorDefault from "RPCError" /* 8770 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 8773 */;
import Constants_mod from "Constants" /* 4739 */;
import Constants_mod from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let Constants = Constants_mod;
({ TransportTypes: c2, RPC_AUTHENTICATED_SCOPE } = Constants);
let Constants = Constants_mod;
const RPCErrors = Constants.RPCErrors;
const result = size.fileFinishedImporting("modules/rpc/server/commands/config.tsx");

export default {
  [Constants.RPCCommands.SET_CONFIG]: {
    scope: RPC_AUTHENTICATED_SCOPE,
    validation(boolean) {
      const obj = createRpcJoiSchemaObjectDefault(boolean);
      const requiredResult = createRpcJoiSchemaObjectDefault(boolean).required();
      return requiredResult.keys({ use_interactive_pip: boolean.boolean() });
    },
    handler(socket) {
      socket = socket.socket;
      const use_interactive_pip = socket.args.use_interactive_pip;
      if (socket.transport !== constants.POST_MESSAGE) {
        const obj2 = { errorCode: RPCErrors.INVALID_COMMAND };
        const _HermesInternal = HermesInternal;
        const tmp152 = new RPCErrorDefault(obj2, "command not available from \"" + socket.transport + " transport");
        throw tmp152;
      } else if (null == socket.application.id) {
        const obj3 = { errorCode: RPCErrors.INVALID_COMMAND };
        const tmp11 = new RPCErrorDefault(obj3, "invalid application");
        throw tmp11;
      } else {
        const obj4 = { type: "EMBEDDED_ACTIVITY_SET_CONFIG", applicationId: socket.application.id, config: null };
        const obj5 = { useInteractivePIP: use_interactive_pip };
        obj4.config = obj5;
        DispatcherDefault.dispatch(obj4);
        const obj6 = { use_interactive_pip };
        return Promise.resolve(obj6);
      }
    }
  }
};