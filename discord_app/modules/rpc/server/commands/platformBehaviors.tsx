import { sum } from "../../../../../discord_common/js/shared/Constants.tsx";
// discord_app/modules/rpc/server/commands/platformBehaviors.tsx
const result = require("set").fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default {
  [sum.RPCCommands.GET_PLATFORM_BEHAVIORS]: {
    handler() {
      return { iosKeyboardResizesView: true };
    }
  }
};