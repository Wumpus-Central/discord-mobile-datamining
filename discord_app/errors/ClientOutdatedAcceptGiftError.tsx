// === Module 4467: ClientOutdatedAcceptGiftError ===

// Module 4467 (ClientOutdatedAcceptGiftError)
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const AbortCodes = Constants.AbortCodes;
const prototype = function ClientOutdatedAcceptGiftError() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.code = AbortCodes.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
  return applyArgumentsResult;
}.prototype;
class prototype extends Error {
}
const result = size.fileFinishedImporting("errors/ClientOutdatedAcceptGiftError.tsx");

export default prototype;