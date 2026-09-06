// === Module 7455: SubscriptionTrialRecord ===

// Module 7455 (SubscriptionTrialRecord)
import Record from "Record" /* 1386 */;

let SubscriptionTrialRecord;
class SubscriptionTrialRecord extends tmp2 {
  constructor(arg0) {
    tmp = new SubscriptionTrialRecord(new.target, new.target);
    ({ id: tmp.id, interval: tmp.interval, intervalCount: tmp.intervalCount, skuId: tmp.skuId } = global);
    return tmp;
  }
}
SubscriptionTrialRecord["createFromServer"] = function createFromServer(arg0) {
  ({ id, interval } = arg0);
  if (typeof SubscriptionTrialRecord === "function") {
    const tmp8 = new SubscriptionTrialRecord(tmp, tmp2, new.target, id, interval);
    tmp8.id = id;
    tmp8.interval = interval;
    tmp8.intervalCount = tmp3;
    tmp8.skuId = tmp4;
    return tmp8;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
Object.defineProperty(SubscriptionTrialRecord.prototype, "isMultiInterval", {
  get: function isMultiInterval() {
    let tmp = null != this.intervalCount;
    if (tmp) {
      tmp = this.intervalCount > 1;
    }
    return tmp;
  },
  set: undefined
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/records/SubscriptionTrialRecord.tsx");

export default SubscriptionTrialRecord;