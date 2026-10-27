// === Module 15803: conjureLivePreview ===

// Module 15803 (conjureLivePreview)
import Constants2 from "Constants" /* 1084 */;
import conjureLiveRelaunch from "conjureLiveRelaunch" /* 10793 */;
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 15745 */;
import Constants from "Constants" /* 6379 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15761 */;
import size from "module_2" /* 2 */;

({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = Constants2.RPCCommands;
const items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
let obj = {};
obj[RPCCommands.RELAUNCH_FRAME] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.RELAUNCH_FRAME, {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items },
  handler(socket) {
    const obj = { relaunched: conjureLiveRelaunch.relaunchAppFramesForBuild(validateConjureAppFrameDefault(socket.socket).frame.applicationId, socket.args.build) };
    return obj;
  }
});
const result = size.fileFinishedImporting("modules/rpc/server/commands/conjureLivePreview.tsx");

export default obj;