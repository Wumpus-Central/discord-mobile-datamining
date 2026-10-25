// === Module 15760: users ===

// Module 15760 (users)
import transformUserDefault from "transformUser" /* 9262 */;
import UserStore from "UserStore" /* 1392 */;

const Constants = fn(6378);
({ RPC_EMBEDDED_APP_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = fn(1087).RPCCommands;
const obj = {};
let CONTEXT_MENU_ICON_NAMES = fn(15725);
const obj3 = {
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
obj3.scope = { [RPC_SCOPE_CONFIG.ANY]: items };
obj[RPCCommands.GET_USER] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_USER, obj3);
CONTEXT_MENU_ICON_NAMES = fn(15725);
const obj5 = {
  scope: null,
  handler() {
    const currentUser = UserStore.getCurrentUser();
    let tmp2 = null;
    if (null != currentUser) {
      tmp2 = transformUserDefault(currentUser);
    }
    return tmp2;
  }
};
const items1 = [RPC_EMBEDDED_APP_SCOPE, RPC_LOCAL_SCOPE];
obj5.scope = { [RPC_SCOPE_CONFIG.ANY]: items1 };
obj[RPCCommands.GET_CURRENT_USER] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_CURRENT_USER, obj5);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/users.tsx");

export default obj;