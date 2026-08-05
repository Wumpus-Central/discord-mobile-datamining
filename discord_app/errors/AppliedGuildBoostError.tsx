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
  let obj = require("../utils/DateUtils.tsx") /* resetCache */;
  const diffAsUnitsResult = obj.diffAsUnits(0, body.body.retry_after * require("../utils/Durations.tsx").Millis.SECOND);
  obj = { days: require("../intl/index.native.tsx") /* getSystemLocale */.t["iXc/Ib"], hours: require("../intl/index.native.tsx") /* getSystemLocale */.t.WW9P57, minutes: require("../intl/index.native.tsx") /* getSystemLocale */.t.I7rYev };
  return require("../utils/DateUtils.tsx") /* resetCache */.unitsAsStrings(diffAsUnitsResult, obj);
};
const result = require("set").fileFinishedImporting("errors/AppliedGuildBoostError.tsx");

export default AppliedGuildBoostError;