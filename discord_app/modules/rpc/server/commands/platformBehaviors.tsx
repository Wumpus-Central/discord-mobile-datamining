// discord_app/modules/rpc/server/commands/platformBehaviors.tsx
import Constants from "../../../../../discord_common/js/shared/Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const obj = {
  handler() {
    return { iosKeyboardResizesView: true };
  },
};
const result = size.fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default { [Constants.RPCCommands.GET_PLATFORM_BEHAVIORS]: obj };
