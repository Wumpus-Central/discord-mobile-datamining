// discord_common/js/packages/rpc-schema/helpers.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import sum from "../../shared/Constants.tsx";

({ RPCCommands, RPCEvents } = sum);
const result = obj132.fileFinishedImporting("../discord_common/js/packages/rpc-schema/helpers.tsx");

export const RPCCommand = RPCCommands;
export const RPCEvent = RPCEvents;
export const joiReqObj = function joiReqObj(required) {
  return required.required().unknown(true);
};
export const joiEnum = function joiEnum(OAuth2Scopes) {
  return Object.values(OAuth2Scopes);
};