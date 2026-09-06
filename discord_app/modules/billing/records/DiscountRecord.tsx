// discord_app/modules/billing/records/DiscountRecord.tsx
import Record from "../../../lib/Record.tsx";

const PremiumConstants = fn(1373);
({ SubscriptionIntervalTypes, DiscountUserUsageLimitIntervalTypes } = PremiumConstants);
let closure_0 = {
  [DiscountUserUsageLimitIntervalTypes.DAY]: SubscriptionIntervalTypes.DAY,
  [DiscountUserUsageLimitIntervalTypes.WEEK]: SubscriptionIntervalTypes.DAY,
  [DiscountUserUsageLimitIntervalTypes.MONTH]: SubscriptionIntervalTypes.MONTH,
  [DiscountUserUsageLimitIntervalTypes.YEAR]: SubscriptionIntervalTypes.YEAR,
};
let DiscountRecord;
class DiscountRecord extends tmp2 {
  constructor(arg0) {
    tmp = new DiscountRecord(new.target, new.target);
    ({
      id: tmp.id,
      planIds: tmp.planIds,
      userUsageLimitInterval: tmp.userUsageLimitInterval,
      userUsageLimitIntervalCount: tmp.userUsageLimitIntervalCount,
      userUsageLimit: tmp.userUsageLimit,
      amount: tmp.amount,
    } = global);
    return tmp;
  }
}
const prototype = DiscountRecord.prototype;
DiscountRecord["createFromServer"] = function createFromServer(arg0) {
  ({ id, plan_ids, user_usage_limit_interval, user_usage_limit_interval_count } = arg0);
  if (typeof DiscountRecord === "function") {
    const tmp8 = new DiscountRecord(
      tmp,
      tmp2,
      new.target,
      id,
      plan_ids,
      user_usage_limit_interval,
      user_usage_limit_interval_count,
    );
    tmp8.id = id;
    tmp8.planIds = plan_ids;
    tmp8.userUsageLimitInterval = user_usage_limit_interval;
    tmp8.userUsageLimitIntervalCount = user_usage_limit_interval_count;
    tmp8.userUsageLimit = tmp3;
    tmp8.amount = tmp4;
    return tmp8;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
Object.defineProperty(prototype, "intervalType", {
  get: function intervalType() {
    return this.userUsageLimitInterval;
  },
  set: undefined,
});
Object.defineProperty(prototype, "intervalCount", {
  get: function intervalCount() {
    return this.userUsageLimit;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isMultiInterval", {
  get: function isMultiInterval() {
    return this.userUsageLimit > 1;
  },
  set: undefined,
});
Object.defineProperty(prototype, "applicableSubscriptionInterval", {
  get: function applicableSubscriptionInterval() {
    return closure_0[this.userUsageLimitInterval];
  },
  set: undefined,
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/records/DiscountRecord.tsx");

export default DiscountRecord;
