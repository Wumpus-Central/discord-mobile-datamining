// === Module 14331: commands/config ===

// Module 14331 (commands/config)
import DispatcherDefault from "Dispatcher" /* 584 */;
import RPCErrorDefault from "RPCError" /* 9059 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9062 */;
import Constants_mod from "Constants" /* 5323 */;
import Constants_mod2 from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let RPC_AUTHENTICATED_SCOPE;
let c2;
let Constants = Constants_mod2;
({ TransportTypes: c2, RPC_AUTHENTICATED_SCOPE } = Constants);
Constants = Constants_mod2;
const RPCErrors = Constants.RPCErrors;
let obj = {
  scope: RPC_AUTHENTICATED_SCOPE,
  validation(boolean) {
    const obj = createRpcJoiSchemaObjectDefault(boolean);
    const requiredResult = obj.required();
    const obj2 = { use_interactive_pip: boolean.boolean() };
    return requiredResult.keys(obj2);
  },
  handler(socket) {
    let obj5;
    socket = socket.socket;
    const use_interactive_pip = socket.args.use_interactive_pip;
    if (socket.transport !== constants.POST_MESSAGE) {
      const _HermesInternal = HermesInternal;
      const self3 = this;
      const self4 = this;
      const obj2 = { errorCode: RPCErrors.INVALID_COMMAND };
      const tmp13 = RPCErrorDefault;
      const tmp132 = new tmp13(obj2, "command not available from \"" + socket.transport + " transport");
      throw tmp132;
    } else if (null == socket.application.id) {
      const self = this;
      const self2 = this;
      const obj3 = { errorCode: RPCErrors.INVALID_COMMAND };
      const tmp9 = new RPCErrorDefault(obj3, "invalid application");
      throw tmp9;
    } else {
      const obj4 = { type: "EMBEDDED_ACTIVITY_SET_CONFIG", applicationId: socket.application.id, config: obj5 };
      obj5 = { useInteractivePIP: use_interactive_pip };
      const obj = DispatcherDefault;
      obj.dispatch(obj4);
      const obj6 = { use_interactive_pip };
      return Promise.resolve(obj6);
    }
  }
};
const result = size.fileFinishedImporting("modules/rpc/server/commands/config.tsx");

export default { [Constants.RPCCommands.SET_CONFIG]: obj };