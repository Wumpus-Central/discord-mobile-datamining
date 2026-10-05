// discord_app/modules/rpc/helpers/validateTransportType.tsx
import Constants from "../../../Constants.tsx";
import Constants2 from "../Constants.tsx";
import RPCErrorDefault from "../RPCError.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const TransportTypes = Constants2.TransportTypes;
const RPCErrors = Constants.RPCErrors;
const result = size.fileFinishedImporting("modules/rpc/helpers/validateTransportType.tsx");

export const validateTransportType = function validateTransportType(transport) {
  if (TransportTypes.IPC !== transport) {
    if (TransportTypes.POST_MESSAGE !== transport) {
      const self = this;
      const self2 = this;
      const obj = { errorCode: RPCErrors.INVALID_COMMAND };
      const tmp5 = new RPCErrorDefault(obj, "Invalid transport.");
      throw tmp5;
    }
  }
};
