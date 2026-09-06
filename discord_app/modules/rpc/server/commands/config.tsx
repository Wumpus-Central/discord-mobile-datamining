// discord_app/modules/rpc/server/commands/config.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import RPCErrorDefault from "../../RPCError.tsx";
import createRpcJoiSchemaObjectDefault from "../../helpers/createRpcJoiSchemaObject.tsx";
import Constants from "../../Constants.tsx";
import Constants from "../../../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ TransportTypes: c2, RPC_AUTHENTICATED_SCOPE } = Constants);
const RPCErrors = Constants.RPCErrors;
const result = size.fileFinishedImporting("modules/rpc/server/commands/config.tsx");

export default {
  [Constants.RPCCommands.SET_CONFIG]: {
    scope: RPC_AUTHENTICATED_SCOPE,
    validation(boolean) {
      createRpcJoiSchemaObjectDefault(boolean);
      const obj = { use_interactive_pip: boolean.boolean() };
      return obj.required().keys(obj);
    },
    handler(socket) {
      socket = socket.socket;
      const use_interactive_pip = socket.args.use_interactive_pip;
      if (socket.transport !== constants.POST_MESSAGE) {
        let obj = { errorCode: RPCErrors.INVALID_COMMAND };
        const _HermesInternal = HermesInternal;
        let tmp15 = RPCErrorDefault;
        tmp15 = new tmp15(obj, 'command not available from "' + socket.transport + " transport");
        throw tmp15;
      } else if (null == socket.application.id) {
        obj = { errorCode: RPCErrors.INVALID_COMMAND };
        const tmp11 = new RPCErrorDefault(obj, "invalid application");
        throw tmp11;
      } else {
        obj = DispatcherDefault;
        const obj1 = { type: "EMBEDDED_ACTIVITY_SET_CONFIG", applicationId: socket.application.id, config: null };
        const obj2 = { useInteractivePIP: use_interactive_pip };
        obj1.config = obj2;
        obj.dispatch(obj1);
        const obj3 = { use_interactive_pip };
        return Promise.resolve(obj3);
      }
    },
  },
};
