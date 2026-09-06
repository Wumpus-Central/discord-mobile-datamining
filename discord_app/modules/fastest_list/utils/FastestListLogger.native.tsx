// === Module 7059: logFastestListError ===

// Module 7059 (logFastestListError)
import timestampDefault from "timestamp" /* 3 */;
import _modDef1232 from "module_1232" /* 1232 */;

let closure_2 = new timestampDefault("FastestList");
const tmp2 = new timestampDefault("FastestList");
const result = require("set").fileFinishedImporting("modules/fastest_list/utils/FastestListLogger.native.tsx");

export const logFastestListError = function logFastestListError(arg0, extra) {
  logger.error(arg0, extra);
  let obj = _modDef1232;
  obj = { extra };
  obj.captureMessage(arg0, obj);
};