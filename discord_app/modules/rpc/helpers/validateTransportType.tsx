// === Module 14583: validateTransportType ===

// Module 14583 (validateTransportType)
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 5635 */;
import RPCErrorDefault from "RPCError" /* 11134 */;
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