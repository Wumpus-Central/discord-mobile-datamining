// discord_app/modules/rpc/server/commands/platformBehaviors.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import sum from "../../../../../discord_common/js/shared/Constants.tsx";

const result = obj132.fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default {
  [sum.RPCCommands.GET_PLATFORM_BEHAVIORS]: {
    handler() {
      return { iosKeyboardResizesView: true };
    }
  }
};