// discord_app/modules/billing/records/SubscriptionTrialRecord.tsx
import toJSDefault from "../../../lib/Record.tsx";

toJSDefault;
let SubscriptionTrialRecord;
class SubscriptionTrialRecord extends tmp2 {
  constructor(arg0) {
    tmp = new SubscriptionTrialRecord(new.target, new.target);
    // ThrowIfThisInitialized (0x7c)
    ({ id: tmp.id, interval: tmp.interval, intervalCount: tmp.intervalCount, skuId: tmp.skuId } = global);
    return tmp;
  }
}
SubscriptionTrialRecord["createFromServer"] = function createFromServer(arg0) {
  ({ id, interval } = arg0);
  ({ interval_count, sku_id } = arg0);
  if (typeof SubscriptionTrialRecord !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const tmp2 = new SubscriptionTrialRecord("Trying to call a non-function", SubscriptionTrialRecord, new.target, id, interval);
  // ThrowIfThisInitialized (0x7c)
  tmp2.id = id;
  tmp2.interval = interval;
  tmp2.intervalCount = interval_count;
  tmp2.skuId = sku_id;
  return tmp2;
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
const result = require("obj132").fileFinishedImporting("modules/billing/records/SubscriptionTrialRecord.tsx");

export default SubscriptionTrialRecord;