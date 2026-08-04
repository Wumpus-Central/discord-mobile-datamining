// discord_app/records/SubscriptionPlanRecord.tsx
import "toJS";
import GuildFeatures from "GuildFeatures";

let c0;
let closure_1;
let obj1;
({ PremiumSubscriptionSKUs: c0, PremiumTypes: closure_1, SubscriptionPlans: obj1 } = GuildFeatures);
let SubscriptionPlanRecord;
class SubscriptionPlanRecord extends tmp2 {
  constructor(arg0) {
    tmp = new SubscriptionPlanRecord(new.target, new.target);
    // ThrowIfThisInitialized (0x7c)
    ({ id: tmp.id, name: tmp.name, interval: tmp.interval, intervalCount: tmp.intervalCount, taxInclusive: tmp.taxInclusive, skuId: tmp.skuId, currency: tmp.currency, price: tmp.price, prices: tmp.prices } = global);
    return tmp;
  }
}
const prototype = SubscriptionPlanRecord.prototype;
SubscriptionPlanRecord["createFromServer"] = function createFromServer(prices) {
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
    const reduced = keys.reduce((arg0, arg1) => {
      if (null == prices.prices) {
        return arg0;
      } else {
        let obj = { countryPrices: null, paymentSourcePrices: null };
        obj = { countryCode: null, prices: null };
        obj[0] = tmp.prices[arg1].country_prices.country_code;
        prices = tmp3.country_prices.prices;
        obj[1] = prices.map((amount) => ({ amount: amount.amount, currency: amount.currency, tax: 0, taxInclusive: tax_inclusive.tax_inclusive }));
        obj[0] = obj;
        const _Object = Object;
        const entries = Object.entries(tmp3.payment_source_prices);
        obj[1] = entries.reduce((arg0, arg1) => {
          let arr;
          let tmp;
          [tmp, arr] = arg1;
          arg0[tmp] = arr.map((amount) => ({ amount: amount.amount, currency: amount.currency, tax: 0, taxInclusive: tax_inclusive.tax_inclusive }));
          return arg0;
        }, {});
        arg0[arg1] = obj;
        return arg0;
      }
    }, {});
  }
  ({ id, name, interval, interval_count, tax_inclusive, sku_id, currency } = prices);
  if (typeof SubscriptionPlanRecord !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  const tmp5 = new SubscriptionPlanRecord("Trying to call a non-function", tmp, SubscriptionPlanRecord, new.target, id, name, interval, interval_count, tax_inclusive, sku_id, currency);
  // ThrowIfThisInitialized (0x7c)
  tmp5.id = id;
  tmp5.name = name;
  tmp5.interval = interval;
  tmp5.intervalCount = interval_count;
  tmp5.taxInclusive = tax_inclusive;
  tmp5.skuId = sku_id;
  tmp5.currency = currency;
  tmp5.price = prices.price;
  tmp5.prices = {};
  return tmp5;
};
Object.defineProperty(prototype, "premiumSubscriptionType", {
  get: function premiumSubscriptionType() {
    const skuId = this.skuId;
    if (constants.LEGACY !== skuId) {
      if (tmp.TIER_2 !== skuId) {
        if (tmp.TIER_1 === skuId) {
          return closure_1.TIER_1;
        } else if (tmp.TIER_0 === skuId) {
          return closure_1.TIER_0;
        } else {
          return null;
        }
      }
    }
    return closure_1.TIER_2;
  },
  set: undefined
});
prototype["toServerData"] = function toServerData() {
  const self = this;
  let obj = {};
  const keys = Object.keys(this.prices);
  const item = keys.forEach((arg0) => {
    obj = { country_prices: obj, payment_source_prices: tmp.paymentSourcePrices };
    obj = { country_code: tmp.countryPrices.countryCode, prices: tmp.countryPrices.prices };
    obj[arg0] = obj;
  });
  obj = { id: this.id, name: this.name, sku_id: this.skuId, interval: this.interval, interval_count: this.intervalCount, tax_inclusive: this.taxInclusive, currency: this.currency, price: this.price, prices: obj, price_tier: this.price };
  return obj;
};
const result = require("set").fileFinishedImporting("records/SubscriptionPlanRecord.tsx");

export default SubscriptionPlanRecord;
export const getPriceFromServer = function getPriceFromServer(amount, taxInclusive) {
  return { amount: amount.amount, currency: amount.currency, tax: 0, taxInclusive };
};
export const isNoneSubscription = function isNoneSubscription(planId) {
  const items = [, , , ];
  ({ NONE_MONTH: arr[0], NONE_3_MONTH: arr[1], NONE_6_MONTH: arr[2], NONE_YEAR: arr[3] } = closure_2);
  return items.includes(planId);
};