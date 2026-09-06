// === Module 14478: helpers ===

// Module 14478 (helpers)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

({ RPCCommands, RPCEvents } = Constants);
const result = size.fileFinishedImporting("../discord_common/js/packages/rpc-schema/helpers.tsx");

export const RPCCommand = RPCCommands;
export const RPCEvent = RPCEvents;
export const joiReqObj = function joiReqObj(required) {
  return required.required().unknown(true);
};
export const joiEnum = function joiEnum(OAuth2Scopes) {
  return Object.values(OAuth2Scopes);
};