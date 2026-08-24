// discord_app/modules/rpc/server/commands/platformBehaviors.tsx
import set from "../../../../../_runtime/00002_set.js";
import sum from "../../../../../discord_common/js/shared/Constants.tsx";

const result = set.fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default {
  [sum.RPCCommands.GET_PLATFORM_BEHAVIORS]: {
    handler() {
      return { iosKeyboardResizesView: true };
    }
  }
};