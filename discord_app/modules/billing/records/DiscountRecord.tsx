// === Module 7130: createFromServer ===

// Module 7130 (createFromServer)
import toJSDefault from "toJS" /* 1931 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;

toJSDefault;
({ SubscriptionIntervalTypes, DiscountUserUsageLimitIntervalTypes } = GuildFeatures);
let closure_0 = { [DiscountUserUsageLimitIntervalTypes.DAY]: SubscriptionIntervalTypes.DAY, [DiscountUserUsageLimitIntervalTypes.WEEK]: SubscriptionIntervalTypes.DAY, [DiscountUserUsageLimitIntervalTypes.MONTH]: SubscriptionIntervalTypes.MONTH, [DiscountUserUsageLimitIntervalTypes.YEAR]: SubscriptionIntervalTypes.YEAR };
let DiscountRecord;
class DiscountRecord extends tmp2 {
  constructor(arg0) {
    tmp = new DiscountRecord(new.target, new.target);
    // ThrowIfThisInitialized (0x7c)
    ({ id: tmp.id, planIds: tmp.planIds, userUsageLimitInterval: tmp.userUsageLimitInterval, userUsageLimitIntervalCount: tmp.userUsageLimitIntervalCount, userUsageLimit: tmp.userUsageLimit, amount: tmp.amount } = global);
    return tmp;
  }
}
const prototype = DiscountRecord.prototype;
DiscountRecord["createFromServer"] = function createFromServer(arg0) {
  ({ id, plan_ids, user_usage_limit_interval, user_usage_limit_interval_count } = arg0);
  ({ user_usage_limit, amount } = arg0);
  if (typeof DiscountRecord !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const tmp2 = new DiscountRecord("Trying to call a non-function", DiscountRecord, new.target, id, plan_ids, user_usage_limit_interval, user_usage_limit_interval_count);
  // ThrowIfThisInitialized (0x7c)
  tmp2.id = id;
  tmp2.planIds = plan_ids;
  tmp2.userUsageLimitInterval = user_usage_limit_interval;
  tmp2.userUsageLimitIntervalCount = user_usage_limit_interval_count;
  tmp2.userUsageLimit = user_usage_limit;
  tmp2.amount = amount;
  return tmp2;
};
Object.defineProperty(prototype, "intervalType", {
  get: function intervalType() {
    return this.userUsageLimitInterval;
  },
  set: undefined
});
Object.defineProperty(prototype, "intervalCount", {
  get: function intervalCount() {
    return this.userUsageLimit;
  },
  set: undefined
});
Object.defineProperty(prototype, "isMultiInterval", {
  get: function isMultiInterval() {
    return this.userUsageLimit > 1;
  },
  set: undefined
});
Object.defineProperty(prototype, "applicableSubscriptionInterval", {
  get: function applicableSubscriptionInterval() {
    return table[this.userUsageLimitInterval];
  },
  set: undefined
});
prototype["getApproximateDiscountAmountOff"] = function getApproximateDiscountAmountOff(arg0) {
  const parsed = parseFloat(this.amount);
  let rounded = null;
  if (!Number.isNaN(parsed)) {
    const _Math = Math;
    rounded = Math.round(arg0 * (1 - parsed / 100));
  }
  return rounded;
};
const result = require("set").fileFinishedImporting("modules/billing/records/DiscountRecord.tsx");

export default DiscountRecord;