// === Module 9555: prototype ===

// Module 9555 (prototype)
import set from "set" /* 2 */;

const prototype = function RPCError(arg0, message) {
  const tmp = new prototype(message, new.target, new.target, arg0);
  // ThrowIfThisInitialized (0x7c)
  if ("closeCode" in arg0) {
    ({ closeCode: tmp.code, closeCode: tmp.closeCode } = arg0);
  } else {
    ({ errorCode: tmp.code, errorCode: tmp.errorCode } = arg0);
  }
  tmp.message = message;
  tmp.name = "RPCError";
  return tmp;
}.prototype;
class prototype extends Error {
}
const result = set.fileFinishedImporting("../discord_common/js/shared/lib/RPCError.tsx");

export const RPCError = prototype;