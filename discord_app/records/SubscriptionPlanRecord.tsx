// === Module 4535: SubscriptionPlanRecord ===

// Module 4535 (SubscriptionPlanRecord)
import Record from "Record" /* 1392 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import size from "module_2" /* 2 */;

let _window;
let c2;
let map;
({ PremiumSubscriptionSKUs: _window, PremiumTypes: map, SubscriptionPlans: c2 } = PremiumConstants);
class SubscriptionPlanRecord extends Record {
  constructor(arg0) {
    const tmp = new SubscriptionPlanRecord(new.target, this);
    ({ id: tmp.id, name: tmp.name, interval: tmp.interval, intervalCount: tmp.intervalCount, taxInclusive: tmp.taxInclusive, skuId: tmp.skuId, currency: tmp.currency, price: tmp.price, prices: tmp.prices } = arg0);
    return tmp;
  }
  static createFromServer(prices) {
    let currency;
    let id;
    let interval;
    let interval_count;
    let name;
    let sku_id;
    let tax_inclusive;
    let closure_0 = prices;
    if (null != prices.prices) {
      let _Object = Object;
      const keys = Object.keys(prices.prices);
      const reduced = keys.reduce((acc, item) => {
        let entries;
        let obj2;
        let tax_inclusive;
        if (null == prices.prices) {
          return acc;
        } else {
          const obj = {
            countryPrices: obj2,
            paymentSourcePrices: entries.reduce((acc, item) => {
                let arr;
                let tmp;
                [tmp, arr] = item;
                acc[tmp] = arr.map((amount) => ({ amount: amount.amount, currency: amount.currency, tax: 0, taxInclusive: tax_inclusive.tax_inclusive }));
                return acc;
              }, {})
          };
          obj2 = { countryCode: tmp.prices[item].country_prices.country_code, prices: prices.map((amount) => ({ amount: amount.amount, currency: amount.currency, tax: 0, taxInclusive: tax_inclusive.tax_inclusive })) };
          prices = tmp3.country_prices.prices;
          const _Object = Object;
          entries = Object.entries(tmp3.payment_source_prices);
          acc[item] = obj;
          return acc;
        }
      }, {});
    }
    ({ id, name, interval, interval_count, tax_inclusive, sku_id, currency } = prices);
    if (typeof SubscriptionPlanRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp8 = new SubscriptionPlanRecord(tmp2, tmp, tmp6, this, id, name, interval, interval_count, tax_inclusive, sku_id, currency);
      tmp8.id = id;
      tmp8.name = name;
      tmp8.interval = interval;
      tmp8.intervalCount = interval_count;
      tmp8.taxInclusive = tax_inclusive;
      tmp8.skuId = sku_id;
      tmp8.currency = currency;
      tmp8.price = tmp5;
      tmp8.prices = {};
      return tmp8;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  toServerData() {
    const self = this;
    const prices = {};
    const keys = Object.keys(this.prices);
    const item = keys.forEach((item) => {
      const obj = { country_prices: { country_code: self.prices[item].countryPrices.countryCode, prices: self.prices[item].countryPrices.prices }, payment_source_prices: self.prices[item].paymentSourcePrices };
      obj[item] = obj;
    });
    return { id: this.id, name: this.name, sku_id: this.skuId, interval: this.interval, interval_count: this.intervalCount, tax_inclusive: this.taxInclusive, currency: this.currency, price: this.price, prices, price_tier: this.price };
  }
}
Object.defineProperty(SubscriptionPlanRecord.prototype, "premiumSubscriptionType", {
  get: function premiumSubscriptionType() {
    const skuId = this.skuId;
    if (_window.LEGACY !== skuId) {
      if (_window.TIER_2 !== skuId) {
        if (_window.TIER_1 === skuId) {
          return map.TIER_1;
        } else if (_window.TIER_0 === skuId) {
          return map.TIER_0;
        } else {
          return null;
        }
      }
    }
    return map.TIER_2;
  },
  set: undefined
});
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