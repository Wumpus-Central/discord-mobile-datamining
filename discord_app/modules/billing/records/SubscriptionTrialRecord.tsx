// === Module 6964: SubscriptionTrialRecord ===

// Module 6964 (SubscriptionTrialRecord)
import Record from "Record" /* 1392 */;
import size from "module_2" /* 2 */;

class SubscriptionTrialRecord extends Record {
  constructor(arg0) {
    const tmp = new SubscriptionTrialRecord(new.target, this);
    ({ id: tmp.id, interval: tmp.interval, intervalCount: tmp.intervalCount, skuId: tmp.skuId } = arg0);
    return tmp;
  }
  static createFromServer(arg0) {
    let id;
    let interval;
    ({ id, interval } = arg0);
    if (typeof SubscriptionTrialRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp6 = new SubscriptionTrialRecord(tmp, tmp2, this, id, interval);
      tmp6.id = id;
      tmp6.interval = interval;
      tmp6.intervalCount = tmp3;
      tmp6.skuId = tmp4;
      return tmp6;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
Object.defineProperty(SubscriptionTrialRecord.prototype, "isMultiInterval", {
  get: function isMultiInterval() {
    return null != this.intervalCount && this.intervalCount > 1;
  },
  set: undefined
});
const result = size.fileFinishedImporting("modules/billing/records/SubscriptionTrialRecord.tsx");

export default SubscriptionTrialRecord;