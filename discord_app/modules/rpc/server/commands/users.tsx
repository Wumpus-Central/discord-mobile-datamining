// discord_app/modules/rpc/server/commands/users.tsx
import transformUserDefault from "../../helpers/transformUser.tsx";
import closure_2 from "../../../../stores/UserStore.tsx";
import RPC_SCOPE_CONFIG from "../../Constants.tsx";
import { RPCCommands } from "../../../../Constants.tsx";
import createRPCCommand from "../../../../../discord_common/js/packages/rpc-schema/rpc-schema.tsx";

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
obj[RPCCommands.GET_USER] = createRPCCommand.createRPCCommand(RPCCommands.GET_USER, obj);
const result = require("set").fileFinishedImporting("modules/rpc/server/commands/users.tsx");

export default obj;