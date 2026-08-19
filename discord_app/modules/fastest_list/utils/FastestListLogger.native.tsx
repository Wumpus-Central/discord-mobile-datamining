// === Module 8640: logFastestListError ===

// Module 8640 (logFastestListError)
import timestampDefault from "timestamp" /* 3 */;
import _modDef1208 from "module_1208" /* 1208 */;

let closure_2 = new timestampDefault("FastestList");
const tmp2 = new timestampDefault("FastestList");
const result = require("obj132").fileFinishedImporting("modules/fastest_list/utils/FastestListLogger.native.tsx");

export const logFastestListError = function logFastestListError(arg0, extra) {
  logger.error(arg0, extra);
  const obj = { extra };
  obj.captureMessage(arg0, obj);
};