// === Module 7059: FastestListLogger ===

// Module 7059 (FastestListLogger)
import LoggerDefault from "Logger" /* 3 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;

const logger = new LoggerDefault("FastestList");
const size = fn(2);
const result = size.fileFinishedImporting("modules/fastest_list/utils/FastestListLogger.native.tsx");

export const logFastestListError = function logFastestListError(arg0, extra) {
  logger.error(arg0, extra);
  const obj = { extra };
  obj.captureMessage(arg0, obj);
};