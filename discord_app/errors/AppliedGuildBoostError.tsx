// discord_app/errors/AppliedGuildBoostError.tsx
import DurationsDefault from "../utils/Durations.tsx";
import util from "../intl/index.native.tsx";
import DateUtils from "../utils/DateUtils.tsx";
import V6OrEarlierAPIError from "V6OrEarlierAPIError.tsx";

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
