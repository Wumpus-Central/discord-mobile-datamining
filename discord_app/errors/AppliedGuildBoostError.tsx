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
  let obj = require(3955) /* resetCache */;
  const diffAsUnitsResult = obj.diffAsUnits(0, body.body.retry_after * importDefault(687).Millis.SECOND);
  obj = { days: require(1236) /* getSystemLocale */.t["iXc/Ib"], hours: require(1236) /* getSystemLocale */.t.WW9P57, minutes: require(1236) /* getSystemLocale */.t.I7rYev };
  return require(3955) /* resetCache */.unitsAsStrings(diffAsUnitsResult, obj);
};
const result = require("set").fileFinishedImporting("errors/AppliedGuildBoostError.tsx");

export default AppliedGuildBoostError;