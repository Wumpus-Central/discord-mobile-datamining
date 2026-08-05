// discord_app/modules/rpc/server/commands/users.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";
import { RPCCommands } from "ME";
import createRPCCommand from "createRPCCommand";

let RPC_EMBEDDED_APP_SCOPE;
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
({ RPC_EMBEDDED_APP_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = RPC_SCOPE_CONFIG);
let obj = {};
obj = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items },
  handler(args) {
    user = user.getUser(args.args.id);
    let tmp2 = null;
    if (null != user) {
      tmp2 = importDefault(10549)(user);
    }
    return tmp2;
  }
};
items = [RPC_EMBEDDED_APP_SCOPE, RPC_LOCAL_SCOPE];
obj[RPCCommands.GET_USER] = createRPCCommand.createRPCCommand(RPCCommands.GET_USER, obj);
const result = require("ME").fileFinishedImporting("modules/rpc/server/commands/users.tsx");

export default obj;