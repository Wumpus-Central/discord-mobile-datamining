// === Module 14504: users ===

// Module 14504 (users)
import transformUserDefault from "transformUser" /* 9560 */;
import UserStore from "UserStore" /* 1371 */;

const Constants = fn(4465);
({ RPC_EMBEDDED_APP_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = fn(1074).RPCCommands;
let obj = {};
const CONTEXT_MENU_ICON_NAMES = fn(14476);
obj = {
  scope: null,
  handler(args) {
    const user = UserStore.getUser(args.args.id);
    let tmp2 = null;
    if (null != user) {
      tmp2 = transformUserDefault(user);
    }
    return tmp2;
  }
};
const items = [RPC_EMBEDDED_APP_SCOPE, RPC_LOCAL_SCOPE];
obj.scope = { [RPC_SCOPE_CONFIG.ANY]: items };
obj[RPCCommands.GET_USER] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_USER, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/users.tsx");

export default obj;