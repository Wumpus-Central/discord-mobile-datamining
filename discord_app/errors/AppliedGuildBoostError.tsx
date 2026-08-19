// discord_app/errors/AppliedGuildBoostError.tsx
import obj132Default from "../utils/Durations.tsx";
import getSystemLocale from "../intl/index.native.tsx";
import prototypeDefault from "V6OrEarlierAPIError.tsx";
import resetCache from "../utils/DateUtils.tsx";

require = fn;
prototypeDefault;
class AppliedGuildBoostError extends tmp2 {
  constructor(arg0, arg1) {
    tmp = new tmp(global, fn, new.target, tmp);
    // ThrowIfThisInitialized (0x7c)
    if (429 === tmp.status) {
      tmp.message = tmp._getMessageFromRateLimit(global);
    }
    return tmp;
  }
}
AppliedGuildBoostError.prototype["_getMessageFromRateLimit"] = function _getMessageFromRateLimit(body) {
  let obj = resetCache;
  const diffAsUnitsResult = obj.diffAsUnits(0, body.body.retry_after * obj132Default.Millis.SECOND);
  obj = { days: getSystemLocale.t["iXc/Ib"], hours: getSystemLocale.t.WW9P57, minutes: getSystemLocale.t.I7rYev };
  return resetCache.unitsAsStrings(diffAsUnitsResult, obj);
};
const result = require("obj132").fileFinishedImporting("errors/AppliedGuildBoostError.tsx");

export default AppliedGuildBoostError;