// discord_app/errors/ClientOutdatedAcceptGiftError.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import ME from "../Constants.tsx";

const AbortCodes = ME.AbortCodes;
const prototype = function ClientOutdatedAcceptGiftError(arg0) {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.code = AbortCodes.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
  return applyArgumentsResult;
}.prototype;
class prototype extends Error {
}
const result = obj132.fileFinishedImporting("errors/ClientOutdatedAcceptGiftError.tsx");

export default prototype;