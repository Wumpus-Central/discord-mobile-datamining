// discord_app/modules/fastest_list/utils/FastestListLogger.native.tsx
import timestampDefault from "../../debug/Logger.tsx";
import _modDef1208 from "../../../utils/SentryUtils.native.tsx";

let closure_2 = new timestampDefault("FastestList");
const tmp2 = new timestampDefault("FastestList");
const result = require("obj132").fileFinishedImporting("modules/fastest_list/utils/FastestListLogger.native.tsx");

export const logFastestListError = function logFastestListError(arg0, extra) {
  logger.error(arg0, extra);
  const obj = { extra };
  obj.captureMessage(arg0, obj);
};