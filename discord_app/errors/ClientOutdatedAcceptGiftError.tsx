// discord_app/errors/ClientOutdatedAcceptGiftError.tsx
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

const AbortCodes = Constants.AbortCodes;
const prototype = function ClientOutdatedAcceptGiftError() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.code = AbortCodes.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
  return applyArgumentsResult;
}.prototype;
class prototype extends Error {}
const result = size.fileFinishedImporting("errors/ClientOutdatedAcceptGiftError.tsx");

export default prototype;
