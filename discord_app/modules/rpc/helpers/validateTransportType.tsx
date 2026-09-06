// === Module 14496: validateTransportType ===

// Module 14496 (validateTransportType)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG" /* 4465 */;
import prototypeDefault from "prototype" /* 9554 */;

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