// discord_app/modules/fastest_list/utils/FastestListLogger.native.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";

const logger = new LoggerDefault("FastestList");
const size = fn(2);
const result = size.fileFinishedImporting("modules/fastest_list/utils/FastestListLogger.native.tsx");

export const logFastestListError = function logFastestListError(arg0, extra) {
  logger.error(arg0, extra);
  const obj = { extra };
  obj.captureMessage(arg0, obj);
};
