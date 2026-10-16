// discord_app/modules/rpc/server/commands/platformBehaviors.tsx
import Constants from "../../../../../discord_common/js/shared/Constants.tsx";
import CONTEXT_MENU_ICON_NAMES from "../../../../../discord_common/js/packages/rpc-schema/rpc-schema.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const RPCCommands = Constants.RPCCommands;
const obj = {};
obj[RPCCommands.GET_PLATFORM_BEHAVIORS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_PLATFORM_BEHAVIORS, {
  handler() {
    return { iosKeyboardResizesView: true };
  },
});
const result = size.fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default obj;
