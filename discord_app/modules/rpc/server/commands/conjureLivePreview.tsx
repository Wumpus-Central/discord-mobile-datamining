// discord_app/modules/rpc/server/commands/conjureLivePreview.tsx
import Constants2 from "../../../../Constants.tsx";
import conjureLiveRelaunch from "../../../conjure/live_reload/conjureLiveRelaunch.tsx";
import validateConjureAppFrameDefault from "../../helpers/validateConjureAppFrame.tsx";
import Constants from "../../Constants.tsx";
import CONTEXT_MENU_ICON_NAMES from "../../../../../discord_common/js/packages/rpc-schema/rpc-schema.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = Constants2.RPCCommands;
const items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
let obj = {};
obj[RPCCommands.RELAUNCH_FRAME] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.RELAUNCH_FRAME, {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items },
  handler(socket) {
    const obj = {
      relaunched: conjureLiveRelaunch.relaunchAppFramesForBuild(
        validateConjureAppFrameDefault(socket.socket).frame.applicationId,
        socket.args.build,
      ),
    };
    return obj;
  },
});
const result = size.fileFinishedImporting("modules/rpc/server/commands/conjureLivePreview.tsx");

export default obj;
