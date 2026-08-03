// === Module 3909: createFromServer ===

// Module 3909 (createFromServer)
import "toJS";

const obj = { PRICE_CHANGE_MODE_UNSPECIFIED: "PRICE_CHANGE_MODE_UNSPECIFIED", PRICE_DECREASE: "PRICE_DECREASE", PRICE_INCREASE: "PRICE_INCREASE", OPT_OUT_PRICE_INCREASE: "OPT_OUT_PRICE_INCREASE" };
let GooglePlayPriceChangeRecord;
class GooglePlayPriceChangeRecord extends tmp2 {
  constructor(arg0) {
    tmp = new GooglePlayPriceChangeRecord(new.target, new.target);
    // ThrowIfThisInitialized (0x7c)
    ({ userId: tmp.userId, subscriptionId: tmp.subscriptionId, oldCurrency: tmp.oldCurrency, oldPrice: tmp.oldPrice, newCurrency: tmp.newCurrency, newPrice: tmp.newPrice, priceChangeMode: tmp.priceChangeMode, expectedChargeTime: tmp.expectedChargeTime, priceChangeId: tmp.priceChangeId } = global);
    return tmp;
  }
}
const prototype = GooglePlayPriceChangeRecord.prototype;
GooglePlayPriceChangeRecord["createFromServer"] = function createFromServer(arg0) {
  let expected_charge_time;
  let new_currency;
  let new_price;
  let old_currency;
  let old_price;
  let price_change_id;
  let price_change_mode;
  let subscription_id;
  let user_id;
  ({ user_id, subscription_id, old_currency, old_price, new_currency, new_price, price_change_mode } = arg0);
  ({ expected_charge_time, price_change_id } = arg0);
  if (typeof GooglePlayPriceChangeRecord !== "error") {
    HermesBuiltin.throwTypeError();
  }
  const tmp2 = new GooglePlayPriceChangeRecord("Trying to call a non-function", GooglePlayPriceChangeRecord, new.target, user_id, subscription_id, old_currency, old_price, new_currency, new_price, price_change_mode);
  // ThrowIfThisInitialized (0x7c)
  tmp2.userId = user_id;
  tmp2.subscriptionId = subscription_id;
  tmp2.oldCurrency = old_currency;
  tmp2.oldPrice = old_price;
  tmp2.newCurrency = new_currency;
  tmp2.newPrice = new_price;
  tmp2.priceChangeMode = price_change_mode;
  tmp2.expectedChargeTime = expected_charge_time;
  tmp2.priceChangeId = price_change_id;
  return tmp2;
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
const result = require("set").fileFinishedImporting("modules/premium/native/google_play_price_changes/GooglePlayPriceChangeRecord.tsx");

export default GooglePlayPriceChangeRecord;
export const GooglePlayPriceChangeMode = obj;
export { GooglePlayPriceChangeRecord };