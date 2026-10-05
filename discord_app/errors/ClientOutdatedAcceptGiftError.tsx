// discord_app/errors/ClientOutdatedAcceptGiftError.tsx
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

const AbortCodes = Constants.AbortCodes;
class ClientOutdatedAcceptGiftError extends Error {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.code = AbortCodes.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
    return applyArgumentsResult;
  }
}
const result = size.fileFinishedImporting("errors/ClientOutdatedAcceptGiftError.tsx");

export default ClientOutdatedAcceptGiftError;
