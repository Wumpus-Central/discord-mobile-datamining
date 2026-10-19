// === Module 15537: users ===

// Module 15537 (users)
import transformUserDefault from "transformUser" /* 9167 */;
import UserStore from "UserStore" /* 1392 */;

const Constants = fn(5895);
({ RPC_EMBEDDED_APP_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = fn(1087).RPCCommands;
const obj = {};
const CONTEXT_MENU_ICON_NAMES = fn(15503);
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/users.tsx");

export default obj;