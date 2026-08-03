// === Module 4098: prototype ===

// Module 4098 (prototype)
import { AbortCodes } from "ME";

const prototype = function ClientOutdatedAcceptGiftError(arg0) {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.code = AbortCodes.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
  return applyArgumentsResult;
}.prototype;
class prototype extends Error {
}
const result = require("set").fileFinishedImporting("errors/ClientOutdatedAcceptGiftError.tsx");

export default prototype;