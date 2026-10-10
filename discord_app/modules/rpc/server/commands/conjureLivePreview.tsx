// === Module 14747: conjureLivePreview ===

// Module 14747 (conjureLivePreview)
import Constants2 from "Constants" /* 1085 */;
import conjureLiveRelaunch from "conjureLiveRelaunch" /* 11430 */;
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 14693 */;
import Constants from "Constants" /* 5639 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 14713 */;
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