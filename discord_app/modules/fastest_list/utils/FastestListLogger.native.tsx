// discord_app/modules/fastest_list/utils/FastestListLogger.native.tsx
import timestampDefault from "../../debug/Logger.tsx";
import _modDef1205 from "../../../utils/SentryUtils.native.tsx";

let closure_2 = new timestampDefault("FastestList");
const tmp2 = new timestampDefault("FastestList");
const result = require("set").fileFinishedImporting("modules/fastest_list/utils/FastestListLogger.native.tsx");

export const logFastestListError = function logFastestListError(arg0, extra) {
  logger.error(arg0, extra);
  let obj = _modDef1205;
  obj = { extra };
  obj.captureMessage(arg0, obj);
};
