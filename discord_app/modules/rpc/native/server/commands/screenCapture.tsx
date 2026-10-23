// discord_app/modules/rpc/native/server/commands/screenCapture.tsx
import Constants2 from "../../../../../Constants.tsx";
import validateConjureAppFrameDefault from "../../../helpers/validateConjureAppFrame.tsx";
import Constants from "../../../Constants.tsx";
import CONTEXT_MENU_ICON_NAMES from "../../../../../../discord_common/js/packages/rpc-schema/rpc-schema.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = Constants2.RPCCommands;
const items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
const obj = {};
obj[RPCCommands.CAPTURE_SCREEN] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.CAPTURE_SCREEN, {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items },
  handler(socket) {
    validateConjureAppFrameDefault(socket.socket);
    return { status: "unsupported" };
  },
});
const result = size.fileFinishedImporting("modules/rpc/native/server/commands/screenCapture.tsx");

export default obj;
