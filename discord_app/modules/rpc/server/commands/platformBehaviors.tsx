// discord_app/modules/rpc/server/commands/platformBehaviors.tsx
const result = require("set").fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default {
  [require("../../../../../discord_common/js/shared/Constants.tsx").RPCCommands.GET_PLATFORM_BEHAVIORS]: {
    handler() {
      return { iosKeyboardResizesView: true };
    }
  }
};