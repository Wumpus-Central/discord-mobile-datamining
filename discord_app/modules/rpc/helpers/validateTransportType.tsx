// === Module 14373: validateTransportType ===

// Module 14373 (validateTransportType)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG" /* 4380 */;
import prototypeDefault from "prototype" /* 9516 */;

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