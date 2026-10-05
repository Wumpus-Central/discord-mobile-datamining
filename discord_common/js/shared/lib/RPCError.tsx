// discord_common/js/shared/lib/RPCError.tsx
import size from "../../../../_runtime/metro/00002__.js";

class RPCError extends Error {
  constructor(message, message2) {
    const tmp = new RPCError(message, new.target, this, message);
    if ("closeCode" in message) {
      ({ closeCode: tmp.code, closeCode: tmp.closeCode } = message);
    } else {
      ({ errorCode: tmp.code, errorCode: tmp.errorCode } = message);
    }
    tmp.message = message;
    tmp.name = "RPCError";
    return tmp;
  }
}
const result = size.fileFinishedImporting("../discord_common/js/shared/lib/RPCError.tsx");

export { RPCError };
