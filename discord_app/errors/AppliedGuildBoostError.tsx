// discord_app/errors/AppliedGuildBoostError.tsx
import DurationsDefault from "../utils/Durations.tsx";
import intl from "../intl/index.native.tsx";
import DateUtils from "../utils/DateUtils.tsx";
import V6OrEarlierAPIError from "V6OrEarlierAPIError.tsx";
import size from "../../_runtime/metro/00002__.js";

class AppliedGuildBoostError extends V6OrEarlierAPIError {
  constructor(body, arg1) {
    const tmp2 = new tmp(body, arg1, new.target, tmp);
    if (429 === tmp2.status) {
      tmp2.message = tmp2._getMessageFromRateLimit(body);
    }
    return tmp2;
  }
  _getMessageFromRateLimit(body) {
    const retry_after = body.body.retry_after;
    const obj = DateUtils;
    const diffAsUnitsResult = obj.diffAsUnits(0, retry_after * DurationsDefault.Millis.SECOND);
    const obj2 = DateUtils;
    const time = { days: intl.t["iXc/Ib"], hours: intl.t.WW9P57, minutes: intl.t.I7rYev };
    return obj2.unitsAsStrings(diffAsUnitsResult, time);
  }
}
const prototype = AppliedGuildBoostError.prototype;
const result = size.fileFinishedImporting("errors/AppliedGuildBoostError.tsx");

export default AppliedGuildBoostError;
