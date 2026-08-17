// discord_app/modules/rpc/helpers/validateTransportType.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import RPC_SCOPE_CONFIG from "../Constants.tsx";
import prototypeDefault from "../RPCError.tsx";

const TransportTypes = RPC_SCOPE_CONFIG.TransportTypes;
const RPCErrors = ME.RPCErrors;
const result = set.fileFinishedImporting("modules/rpc/helpers/validateTransportType.tsx");

export const validateTransportType = function validateTransportType(transport) {
  if (TransportTypes.IPC !== transport) {
    if (TransportTypes.POST_MESSAGE !== transport) {
      const obj = { errorCode: null };
      obj[0] = RPCErrors.INVALID_COMMAND;
      const tmp7 = new prototypeDefault(obj, "Invalid transport.");
      throw tmp7;
    }
  }
};