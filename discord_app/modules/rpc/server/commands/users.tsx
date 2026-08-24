// === Module 13937: RPC_EMBEDDED_APP_SCOPE ===

// Module 13937 (RPC_EMBEDDED_APP_SCOPE)
import transformUserDefault from "transformUser" /* 8795 */;
import closure_2 from "mergeGuildAvatar" /* 1922 */;
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG" /* 4281 */;
import { RPCCommands } from "ME" /* 676 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 13909 */;

({ RPC_EMBEDDED_APP_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = RPC_SCOPE_CONFIG);
let obj = {};
obj = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items },
  handler(args) {
    user = user.getUser(args.args.id);
    let tmp2 = null;
    if (null != user) {
      tmp2 = transformUserDefault(user);
    }
    return tmp2;
  }
};
items = [RPC_EMBEDDED_APP_SCOPE, RPC_LOCAL_SCOPE];
obj[RPCCommands.GET_USER] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_USER, obj);
const result = require("set").fileFinishedImporting("modules/rpc/server/commands/users.tsx");

export default obj;