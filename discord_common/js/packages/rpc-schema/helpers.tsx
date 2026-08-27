// === Module 14046: RPCCommands ===

// Module 14046 (RPCCommands)
import set from "set" /* 2 */;
import sum from "sum" /* 505 */;

({ RPCCommands, RPCEvents } = sum);
const result = set.fileFinishedImporting("../discord_common/js/packages/rpc-schema/helpers.tsx");

export const RPCCommand = RPCCommands;
export const RPCEvent = RPCEvents;
export const joiReqObj = function joiReqObj(required) {
  return required.required().unknown(true);
};
export const joiEnum = function joiEnum(OAuth2Scopes) {
  return Object.values(OAuth2Scopes);
};