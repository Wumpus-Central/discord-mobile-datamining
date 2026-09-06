// === Module 14504: RPC_EMBEDDED_APP_SCOPE ===

// Module 14504 (RPC_EMBEDDED_APP_SCOPE)
import transformUserDefault from "transformUser" /* 9560 */;
import closure_2 from "mergeGuildAvatar" /* 1371 */;
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG" /* 4465 */;
import { RPCCommands } from "ME" /* 1074 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 14476 */;

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