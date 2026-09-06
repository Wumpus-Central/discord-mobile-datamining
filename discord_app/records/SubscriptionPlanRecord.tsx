// === Module 4219: SubscriptionPlanRecord ===

// Module 4219 (SubscriptionPlanRecord)
import Record from "Record" /* 1386 */;

const PremiumConstants = fn(1373);
({ PremiumSubscriptionSKUs: closure_0, PremiumTypes: closure_1, SubscriptionPlans: c2 } = PremiumConstants);
let SubscriptionPlanRecord;
class SubscriptionPlanRecord extends tmp2 {
  constructor(arg0) {
    tmp = new SubscriptionPlanRecord(new.target, new.target);
    ({ id: tmp.id, name: tmp.name, interval: tmp.interval, intervalCount: tmp.intervalCount, taxInclusive: tmp.taxInclusive, skuId: tmp.skuId, currency: tmp.currency, price: tmp.price, prices: tmp.prices } = global);
    return tmp;
  }
}
const prototype = SubscriptionPlanRecord.prototype;
SubscriptionPlanRecord["createFromServer"] = function createFromServer(prices) {
  if (null != prices.prices) {
    let _Object = Object;
    const keys = Object.keys(prices.prices);
    const reduced = keys.reduce((acc, item) => {
      if (null == prices.prices) {
        return acc;
      } else {
        let obj = { countryPrices: null, paymentSourcePrices: null };
        obj = { countryCode: tmp.prices[item].country_prices.country_code, prices: null };
        prices = tmp3.country_prices.prices;
        obj.prices = prices.map((amount) => ({ amount: amount.amount, currency: amount.currency, tax: 0, taxInclusive: tax_inclusive.tax_inclusive }));
        obj.countryPrices = obj;
        const _Object = Object;
        const entries = Object.entries(tmp3.payment_source_prices);
        obj.paymentSourcePrices = entries.reduce((acc, item) => {
          [tmp, arr] = item;
          acc[tmp] = arr.map((amount) => ({ amount: amount.amount, currency: amount.currency, tax: 0, taxInclusive: tax_inclusive.tax_inclusive }));
          return acc;
        }, {});
        acc[item] = obj;
        return acc;
      }
    }, {});
  }
  ({ id, name, interval, interval_count, tax_inclusive, sku_id, currency } = prices);
  if (typeof SubscriptionPlanRecord === "function") {
    const tmp10 = new SubscriptionPlanRecord(tmp2, tmp, tmp6, new.target, id, name, interval, interval_count, tax_inclusive, sku_id, currency);
    tmp10.id = id;
    tmp10.name = name;
    tmp10.interval = interval;
    tmp10.intervalCount = interval_count;
    tmp10.taxInclusive = tax_inclusive;
    tmp10.skuId = sku_id;
    tmp10.currency = currency;
    tmp10.price = tmp5;
    tmp10.prices = {};
    return tmp10;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
Object.defineProperty(prototype, "premiumSubscriptionType", {
  get: function premiumSubscriptionType() {
    const skuId = this.skuId;
    if (constants.LEGACY !== skuId) {
      if (constants.TIER_2 !== skuId) {
        if (constants.TIER_1 === skuId) {
          return framebus.TIER_1;
        } else if (constants.TIER_0 === skuId) {
          return framebus.TIER_0;
        } else {
          return null;
        }
      }
    }
    return framebus.TIER_2;
  },
  set: undefined
});
prototype["toServerData"] = function toServerData() {
  const self = this;
  let prices = {};
  const keys = Object.keys(this.prices);
  const item = keys.forEach((item) => {
    const obj = { country_prices: { country_code: self.prices[item].countryPrices.countryCode, prices: self.prices[item].countryPrices.prices }, payment_source_prices: self.prices[item].paymentSourcePrices };
    obj[item] = obj;
  });
  prices = { id: this.id, name: this.name, sku_id: this.skuId, interval: this.interval, interval_count: this.intervalCount, tax_inclusive: this.taxInclusive, currency: this.currency, price: this.price, prices, price_tier: this.price };
  return prices;
};
const size = fn(2);
const result = size.fileFinishedImporting("records/SubscriptionPlanRecord.tsx");

export default SubscriptionPlanRecord;
export const getPriceFromServer = function getPriceFromServer(amount, taxInclusive) {
  return { amount: amount.amount, currency: amount.currency, tax: 0, taxInclusive };
};
export const isNoneSubscription = function isNoneSubscription(planId) {
  const items = [, , , ];
  ({ NONE_MONTH: arr[0], NONE_3_MONTH: arr[1], NONE_6_MONTH: arr[2], NONE_YEAR: arr[3] } = React2);
  return items.includes(planId);
};