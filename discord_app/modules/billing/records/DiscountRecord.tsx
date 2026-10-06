// === Module 6973: DiscountRecord ===

// Module 6973 (DiscountRecord)
import Record from "Record" /* 1392 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import size from "module_2" /* 2 */;

let DiscountUserUsageLimitIntervalTypes;
let SubscriptionIntervalTypes;
({ SubscriptionIntervalTypes, DiscountUserUsageLimitIntervalTypes } = PremiumConstants);
let closure_0 = { [DiscountUserUsageLimitIntervalTypes.DAY]: SubscriptionIntervalTypes.DAY, [DiscountUserUsageLimitIntervalTypes.WEEK]: SubscriptionIntervalTypes.DAY, [DiscountUserUsageLimitIntervalTypes.MONTH]: SubscriptionIntervalTypes.MONTH, [DiscountUserUsageLimitIntervalTypes.YEAR]: SubscriptionIntervalTypes.YEAR };
class DiscountRecord extends Record {
  constructor(arg0) {
    const tmp = new DiscountRecord(new.target, this);
    ({ id: tmp.id, planIds: tmp.planIds, userUsageLimitInterval: tmp.userUsageLimitInterval, userUsageLimitIntervalCount: tmp.userUsageLimitIntervalCount, userUsageLimit: tmp.userUsageLimit, amount: tmp.amount } = arg0);
    return tmp;
  }
  static createFromServer(arg0) {
    let id;
    let plan_ids;
    let user_usage_limit_interval;
    let user_usage_limit_interval_count;
    ({ id, plan_ids, user_usage_limit_interval, user_usage_limit_interval_count } = arg0);
    if (typeof DiscountRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp6 = new DiscountRecord(tmp, tmp2, this, id, plan_ids, user_usage_limit_interval, user_usage_limit_interval_count);
      tmp6.id = id;
      tmp6.planIds = plan_ids;
      tmp6.userUsageLimitInterval = user_usage_limit_interval;
      tmp6.userUsageLimitIntervalCount = user_usage_limit_interval_count;
      tmp6.userUsageLimit = tmp3;
      tmp6.amount = tmp4;
      return tmp6;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  getApproximateDiscountAmountOff(arg0) {
    const parsed = parseFloat(this.amount);
    let rounded = null;
    if (!Number.isNaN(parsed)) {
      const _Math = Math;
      rounded = Math.round(arg0 * (1 - parsed / 100));
    }
    return rounded;
  }
}
const prototype = DiscountRecord.prototype;
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
    return closure_0[this.userUsageLimitInterval];
  },
  set: undefined
});
const result = size.fileFinishedImporting("modules/billing/records/DiscountRecord.tsx");

export default DiscountRecord;