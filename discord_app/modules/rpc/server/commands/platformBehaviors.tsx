// === Module 14506: sum ===

// Module 14506 (sum)
import set from "set" /* 2 */;
import sum from "sum" /* 1085 */;

const result = set.fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default {
  [sum.RPCCommands.GET_PLATFORM_BEHAVIORS]: {
    handler() {
      return { iosKeyboardResizesView: true };
    }
  }
};