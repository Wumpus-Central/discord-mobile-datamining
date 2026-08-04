// discord_app/modules/fastest_list/utils/FastestListLogger.native.tsx
const tmp2 = new require("timestamp")("FastestList");
const result = require("set").fileFinishedImporting("modules/fastest_list/utils/FastestListLogger.native.tsx");

export const logFastestListError = function logFastestListError(arg0, extra) {
  tmp2.error(arg0, extra);
  let obj = importDefault(1208);
  obj = { extra };
  obj.captureMessage(arg0, obj);
};