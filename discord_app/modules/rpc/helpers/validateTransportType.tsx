// === Module 14549: validateTransportType ===

// Module 14549 (validateTransportType)
import Constants from "Constants" /* 1074 */;
import Constants2 from "Constants" /* 4511 */;
import RPCErrorDefault from "RPCError" /* 9645 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants2.TransportTypes;
const RPCErrors = Constants.RPCErrors;
const result = size.fileFinishedImporting("modules/rpc/helpers/validateTransportType.tsx");

export const validateTransportType = function validateTransportType(transport) {
  if (TransportTypes.IPC !== transport) {
    if (TransportTypes.POST_MESSAGE !== transport) {
      const obj = { errorCode: RPCErrors.INVALID_COMMAND };
      const tmp7 = new RPCErrorDefault(obj, "Invalid transport.");
      throw tmp7;
    }
  }
};