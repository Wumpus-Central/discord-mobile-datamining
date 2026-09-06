// === Module 4226: GooglePlayPriceChangeRecord ===

// Module 4226 (GooglePlayPriceChangeRecord)
import Record from "Record" /* 1386 */;

const GooglePlayPriceChangeMode = { PRICE_CHANGE_MODE_UNSPECIFIED: "PRICE_CHANGE_MODE_UNSPECIFIED", PRICE_DECREASE: "PRICE_DECREASE", PRICE_INCREASE: "PRICE_INCREASE", OPT_OUT_PRICE_INCREASE: "OPT_OUT_PRICE_INCREASE" };
let GooglePlayPriceChangeRecord;
class GooglePlayPriceChangeRecord extends tmp2 {
  constructor(arg0) {
    tmp = new GooglePlayPriceChangeRecord(new.target, new.target);
    ({ userId: tmp.userId, subscriptionId: tmp.subscriptionId, oldCurrency: tmp.oldCurrency, oldPrice: tmp.oldPrice, newCurrency: tmp.newCurrency, newPrice: tmp.newPrice, priceChangeMode: tmp.priceChangeMode, expectedChargeTime: tmp.expectedChargeTime, priceChangeId: tmp.priceChangeId } = global);
    return tmp;
  }
}
const prototype = GooglePlayPriceChangeRecord.prototype;
GooglePlayPriceChangeRecord["createFromServer"] = function createFromServer(arg0) {
  ({ user_id, subscription_id, old_currency, old_price, new_currency, new_price, price_change_mode } = arg0);
  if (typeof GooglePlayPriceChangeRecord === "function") {
    const tmp8 = new GooglePlayPriceChangeRecord(tmp, tmp2, new.target, user_id, subscription_id, old_currency, old_price, new_currency, new_price, price_change_mode);
    tmp8.userId = user_id;
    tmp8.subscriptionId = subscription_id;
    tmp8.oldCurrency = old_currency;
    tmp8.oldPrice = old_price;
    tmp8.newCurrency = new_currency;
    tmp8.newPrice = new_price;
    tmp8.priceChangeMode = price_change_mode;
    tmp8.expectedChargeTime = tmp3;
    tmp8.priceChangeId = tmp4;
    return tmp8;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
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
    return this.expectedChargeTime > new Date().toISOString();
  },
  set: undefined
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/google_play_price_changes/GooglePlayPriceChangeRecord.tsx");

export default GooglePlayPriceChangeRecord;
export { GooglePlayPriceChangeMode };
export { GooglePlayPriceChangeRecord };