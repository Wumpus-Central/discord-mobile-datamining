// === Module 16218: helpers ===

// Module 16218 (helpers)
import Constants from "Constants" /* 1095 */;
import size from "module_2" /* 2 */;

({ RPCCommands, RPCEvents } = Constants);
const result = size.fileFinishedImporting("../discord_common/js/packages/rpc-schema/helpers.tsx");

export const RPCCommand = RPCCommands;
export const RPCEvent = RPCEvents;
export function joiReqObj(required) {
  return required.required().unknown(true);
}