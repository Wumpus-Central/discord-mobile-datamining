// === Module 4284: prototype ===

// Module 4284 (prototype)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;

const AbortCodes = ME.AbortCodes;
const prototype = function ClientOutdatedAcceptGiftError(arg0) {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.code = AbortCodes.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
  return applyArgumentsResult;
}.prototype;
class prototype extends Error {
}
const result = set.fileFinishedImporting("errors/ClientOutdatedAcceptGiftError.tsx");

export default prototype;