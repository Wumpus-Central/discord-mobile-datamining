// discord_app/modules/rpc/server/commands/config.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import RPCErrorDefault from "../../RPCError.tsx";
import Constants_mod from "../../Constants.tsx";
import Constants_mod from "../../../../Constants.tsx";
import CONTEXT_MENU_ICON_NAMES from "../../../../../discord_common/js/packages/rpc-schema/rpc-schema.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let Constants = Constants_mod;
({ TransportTypes: c2, RPC_AUTHENTICATED_SCOPE } = Constants);
let Constants = Constants_mod;
({ RPCCommands, RPCErrors: c3 } = Constants);
const obj = {};
obj[RPCCommands.SET_CONFIG] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SET_CONFIG, {
  scope: RPC_AUTHENTICATED_SCOPE,
  handler(socket) {
    socket = socket.socket;
    const use_interactive_pip = socket.args.use_interactive_pip;
    if (socket.transport !== constants.POST_MESSAGE) {
      const obj2 = { errorCode: constants2.INVALID_COMMAND };
      const _HermesInternal = HermesInternal;
      const tmp152 = new RPCErrorDefault(obj2, 'command not available from "' + socket.transport + " transport");
      throw tmp152;
    } else if (null == socket.application.id) {
      const obj3 = { errorCode: constants2.INVALID_COMMAND };
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
  },
});
const result = size.fileFinishedImporting("modules/rpc/server/commands/config.tsx");

export default obj;
