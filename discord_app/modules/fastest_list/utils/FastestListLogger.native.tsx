// === Module 6556: FastestListLogger ===

// Module 6556 (FastestListLogger)
import LoggerDefault from "Logger" /* 3 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;

const logger = new LoggerDefault("FastestList");
const size = fn(2);
const result = size.fileFinishedImporting("modules/fastest_list/utils/FastestListLogger.native.tsx");

export const logFastestListError = function logFastestListError(arg0, extra) {
  logger.error(arg0, extra);
  SentryUtilsDefault.captureMessage(arg0, { extra });
};