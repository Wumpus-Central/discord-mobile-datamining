// === Module 4536: GooglePlayPriceChangeRecord ===

// Module 4536 (GooglePlayPriceChangeRecord)
import Record from "Record" /* 1392 */;
import size from "module_2" /* 2 */;

const GooglePlayPriceChangeMode = { PRICE_CHANGE_MODE_UNSPECIFIED: "PRICE_CHANGE_MODE_UNSPECIFIED", PRICE_DECREASE: "PRICE_DECREASE", PRICE_INCREASE: "PRICE_INCREASE", OPT_OUT_PRICE_INCREASE: "OPT_OUT_PRICE_INCREASE" };
class GooglePlayPriceChangeRecord extends Record {
  constructor(arg0) {
    const tmp = new GooglePlayPriceChangeRecord(new.target, this);
    ({ userId: tmp.userId, subscriptionId: tmp.subscriptionId, oldCurrency: tmp.oldCurrency, oldPrice: tmp.oldPrice, newCurrency: tmp.newCurrency, newPrice: tmp.newPrice, priceChangeMode: tmp.priceChangeMode, expectedChargeTime: tmp.expectedChargeTime, priceChangeId: tmp.priceChangeId } = arg0);
    return tmp;
  }
  static createFromServer(arg0) {
    let new_currency;
    let new_price;
    let old_currency;
    let old_price;
    let price_change_mode;
    let subscription_id;
    let user_id;
    ({ user_id, subscription_id, old_currency, old_price, new_currency, new_price, price_change_mode } = arg0);
    if (typeof GooglePlayPriceChangeRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp6 = new GooglePlayPriceChangeRecord(tmp, tmp2, this, user_id, subscription_id, old_currency, old_price, new_currency, new_price, price_change_mode);
      tmp6.userId = user_id;
      tmp6.subscriptionId = subscription_id;
      tmp6.oldCurrency = old_currency;
      tmp6.oldPrice = old_price;
      tmp6.newCurrency = new_currency;
      tmp6.newPrice = new_price;
      tmp6.priceChangeMode = price_change_mode;
      tmp6.expectedChargeTime = tmp3;
      tmp6.priceChangeId = tmp4;
      return tmp6;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const prototype = GooglePlayPriceChangeRecord.prototype;
Object.defineProperty(prototype, "isPriceIncrease", {
  get: function isPriceIncrease() {
    return this.priceChangeMode === obj.PRICE_INCREASE || this.priceChangeMode === tmp.OPT_OUT_PRICE_INCREASE;
  },
  set: undefined
});
Object.defineProperty(prototype, "isOptOutPriceIncrease", {
  get: function isOptOutPriceIncrease() {
    return this.priceChangeMode === obj.OPT_OUT_PRICE_INCREASE;
  },
  set: undefined
});
Object.defineProperty(prototype, "isPriceDecrease", {
  get: function isPriceDecrease() {
    return this.priceChangeMode === obj.PRICE_DECREASE;
  },
  set: undefined
});
Object.defineProperty(prototype, "isInFuture", {
  get: function isInFuture() {
    const expectedChargeTime = this.expectedChargeTime;
    const date = new Date();
    return expectedChargeTime > date.toISOString();
  },
  set: undefined
});
const result = size.fileFinishedImporting("modules/premium/native/google_play_price_changes/GooglePlayPriceChangeRecord.tsx");

export default GooglePlayPriceChangeRecord;
export { GooglePlayPriceChangeMode };
export { GooglePlayPriceChangeRecord };