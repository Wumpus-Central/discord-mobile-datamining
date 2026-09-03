// === Module 7794: logFastestListError ===

// Module 7794 (logFastestListError)
import timestampDefault from "timestamp" /* 3 */;
import _modDef1205 from "module_1205" /* 1205 */;

let closure_2 = new timestampDefault("FastestList");
const tmp2 = new timestampDefault("FastestList");
const result = require("set").fileFinishedImporting("modules/fastest_list/utils/FastestListLogger.native.tsx");

export const logFastestListError = function logFastestListError(arg0, extra) {
  logger.error(arg0, extra);
  let obj = _modDef1205;
  obj = { extra };
  obj.captureMessage(arg0, obj);
};