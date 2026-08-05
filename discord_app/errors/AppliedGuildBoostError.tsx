import { getSystemLocale } from "../intl/index.native.tsx";
import { resetCache } from "../utils/DateUtils.tsx";
import { set } from "../utils/Durations.tsx";
// discord_app/errors/AppliedGuildBoostError.tsx
import "prototype";

const require = arg1;
class AppliedGuildBoostError extends tmp2 {
  constructor(arg0, arg1) {
    tmp = new tmp(global, arg1, new.target, tmp);
    // ThrowIfThisInitialized (0x7c)
    if (429 === tmp.status) {
      tmp.message = tmp._getMessageFromRateLimit(global);
    }
    return tmp;
  }
}
AppliedGuildBoostError.prototype["_getMessageFromRateLimit"] = function _getMessageFromRateLimit(body) {
  let obj = resetCache /* resetCache */;
  const diffAsUnitsResult = obj.diffAsUnits(0, body.body.retry_after * set.Millis.SECOND);
  obj = { days: getSystemLocale /* getSystemLocale */.t["iXc/Ib"], hours: getSystemLocale /* getSystemLocale */.t.WW9P57, minutes: getSystemLocale /* getSystemLocale */.t.I7rYev };
  return resetCache /* resetCache */.unitsAsStrings(diffAsUnitsResult, obj);
};
const result = require("set").fileFinishedImporting("errors/AppliedGuildBoostError.tsx");

export default AppliedGuildBoostError;