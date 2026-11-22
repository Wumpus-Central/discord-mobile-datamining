// === Module 15757: userPopout ===

// Module 15757 (userPopout)
import Constants from "Constants" /* 1071 */;
import Constants2 from "Constants" /* 6354 */;
import commands_userProfile from "commands/userProfile" /* 15723 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15678 */;
import size from "module_2" /* 2 */;

const RPCCommands = Constants.RPCCommands;
const obj = {};
obj[RPCCommands.OPEN_USER_POPOUT] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.OPEN_USER_POPOUT, {
  scope: Constants2.RPC_EMBEDDED_APP_SCOPE,
  handler(socket) {
    return commands_userProfile.openUserProfileForSocket(socket.socket, socket.args.user_id);
  }
});
const result = size.fileFinishedImporting("modules/rpc/native/server/commands/userPopout.tsx");

export default obj;