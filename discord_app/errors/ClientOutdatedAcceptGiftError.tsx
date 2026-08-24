// discord_app/errors/ClientOutdatedAcceptGiftError.tsx
import set from "../../_runtime/00002_set.js";
import ME from "../Constants.tsx";

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