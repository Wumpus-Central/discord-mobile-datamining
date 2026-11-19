// discord_app/modules/rpc/native/server/commands/userPopout.tsx
import Constants from "../../../../../Constants.tsx";
import Constants2 from "../../../Constants.tsx";
import commands_userProfile from "../../../server/commands/userProfile.tsx";
import CONTEXT_MENU_ICON_NAMES from "../../../../../../discord_common/js/packages/rpc-schema/rpc-schema.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const RPCCommands = Constants.RPCCommands;
const obj = {};
obj[RPCCommands.OPEN_USER_POPOUT] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.OPEN_USER_POPOUT, {
  scope: Constants2.RPC_EMBEDDED_APP_SCOPE,
  handler(socket) {
    return commands_userProfile.openUserProfileForSocket(socket.socket, socket.args.user_id);
  },
});
const result = size.fileFinishedImporting("modules/rpc/native/server/commands/userPopout.tsx");

export default obj;
