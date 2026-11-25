// === Module 15865: validateTransportType ===

// Module 15865 (validateTransportType)
import Constants from "Constants" /* 1071 */;
import Constants2 from "Constants" /* 5766 */;
import RPCErrorDefault from "RPCError" /* 7613 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants2.TransportTypes;
const RPCErrors = Constants.RPCErrors;
const result = size.fileFinishedImporting("modules/rpc/helpers/validateTransportType.tsx");

export function validateTransportType(transport) {
  if (TransportTypes.IPC !== transport) {
    if (TransportTypes.POST_MESSAGE !== transport) {
      const obj = { errorCode: RPCErrors.INVALID_COMMAND };
      const tmp7 = new RPCErrorDefault(obj, "Invalid transport.");
      throw tmp7;
    }
  }
}