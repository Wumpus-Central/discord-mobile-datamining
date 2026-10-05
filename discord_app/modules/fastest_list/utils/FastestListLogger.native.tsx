// discord_app/modules/fastest_list/utils/FastestListLogger.native.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const logger = new LoggerDefault("FastestList");
new LoggerDefault("FastestList");
const result = size.fileFinishedImporting("modules/fastest_list/utils/FastestListLogger.native.tsx");

export const logFastestListError = function logFastestListError(arg0, extra) {
  logger.error(arg0, extra);
  const obj = SentryUtilsDefault;
  const obj2 = { extra };
  obj.captureMessage(arg0, obj2);
};
