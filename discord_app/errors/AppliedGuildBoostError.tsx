// === Module 4732: AppliedGuildBoostError ===

// Module 4732 (AppliedGuildBoostError)
import DurationsDefault from "Durations" /* 1091 */;
import util from "util" /* 1115 */;
import DateUtils from "DateUtils" /* 4505 */;
import V6OrEarlierAPIError from "errors/V6OrEarlierAPIError" /* 4504 */;

require = fn;
class AppliedGuildBoostError extends tmp2 {
  constructor(arg0, arg1) {
    tmp1 = new tmp(global, fn, new.target, tmp);
    if (429 === tmp1.status) {
      tmp1.message = tmp1._getMessageFromRateLimit(global);
    }
    return tmp1;
  }
}
AppliedGuildBoostError.prototype["_getMessageFromRateLimit"] = function _getMessageFromRateLimit(body) {
  const diffAsUnitsResult = DateUtils.diffAsUnits(0, body.body.retry_after * DurationsDefault.Millis.SECOND);
  const time = { days: util.t["iXc/Ib"], hours: util.t.WW9P57, minutes: util.t.I7rYev };
  return DateUtils.unitsAsStrings(diffAsUnitsResult, time);
};
const size = fn(2);
const result = size.fileFinishedImporting("errors/AppliedGuildBoostError.tsx");

export default AppliedGuildBoostError;