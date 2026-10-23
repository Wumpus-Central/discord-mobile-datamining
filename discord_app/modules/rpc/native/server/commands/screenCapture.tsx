// === Module 15727: screenCapture ===

// Module 15727 (screenCapture)
import Constants2 from "Constants" /* 1087 */;
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 15662 */;
import Constants from "Constants" /* 6363 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15678 */;
import size from "module_2" /* 2 */;

({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = Constants2.RPCCommands;
const items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
const obj = {};
obj[RPCCommands.CAPTURE_SCREEN] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.CAPTURE_SCREEN, {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items },
  handler(socket) {
    validateConjureAppFrameDefault(socket.socket);
    return { status: "unsupported" };
  }
});
const result = size.fileFinishedImporting("modules/rpc/native/server/commands/screenCapture.tsx");

export default obj;