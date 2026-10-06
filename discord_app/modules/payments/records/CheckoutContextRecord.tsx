// === Module 6945: CheckoutContextRecord ===

// Module 6945 (CheckoutContextRecord)
import PriceUtils from "PriceUtils" /* 6750 */;
import _modDef6752 from "module_6752" /* 6752 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import Record from "Record" /* 1392 */;
import size from "module_2" /* 2 */;

let checkout_context, map, set;

class AvailablePlanRecord extends Record {
  constructor(discount) {
    let addOnPlans;
    const tmp = new AvailablePlanRecord(new.target, this, discount);
    ({ id: tmp.id, quantity: tmp.quantity, price: tmp.price, total: tmp.total, addOnPlans } = discount);
    if (addOnPlans == null) {
      addOnPlans = [];
    }
    tmp.addOnPlans = addOnPlans;
    discount = discount.discount;
    if (discount == null) {
      discount = null;
    }
    tmp.discount = discount;
    return tmp;
  }
  static createFromServer(discount) {
    let add_on_plans;
    let id;
    let price;
    let quantity;
    let total;
    ({ id, quantity, price, total, add_on_plans } = discount);
    if (add_on_plans == null) {
      add_on_plans = [];
    }
    discount = discount.discount;
    if (discount == null) {
      discount = null;
    }
    if (typeof AvailablePlanRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp5 = new AvailablePlanRecord(tmp, AvailablePlanRecord, this, id, quantity, price, total, add_on_plans);
      tmp5.id = id;
      tmp5.quantity = quantity;
      tmp5.price = price;
      tmp5.total = total;
      if (add_on_plans == null) {
        add_on_plans = [];
      }
      tmp5.addOnPlans = add_on_plans;
      if (discount == null) {
        discount = null;
      }
      tmp5.discount = discount;
      return tmp5;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  getPlanQuantities() {
    const items = [, ];
    ({ id: arr[0], quantity: arr[1] } = this);
    const items1 = [items];
    map = new Map(items1);
    const iter = this.addOnPlans[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      set = map.set;
      let id = nextResult.id;
      let num = map.get(nextResult.id);
      if (num == null) {
        num = 0;
      }
      let result = set(id, num + tmp2.quantity);
      continue;
    }
    return map;
  }
  matchesItems(subscriptionItemsForProduct) {
    function quantitiesEqual(planQuantities, size2) {
      if (planQuantities.size !== size2.size) {
        return false;
      } else {
        const obj = planQuantities[Symbol.iterator]();
        while (obj !== undefined) {
          let tmp6 = _slicedToArray(tmp3, 2);
          if (size2.get(tmp6[0]) !== tmp6[1]) {
            obj.return();
            let flag = false;
            return false;
          }
        }
        return true;
      }
    }
    function toQuantitiesByPlanId(subscriptionItemsForProduct) {
      let planId;
      let quantity;
      map = new Map();
      const iter = subscriptionItemsForProduct[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        ({ planId, quantity } = nextResult);
        set = map.set;
        let num = map.get(planId);
        if (num == null) {
          num = 0;
        }
        let result = set(planId, num + quantity);
        continue;
      }
      return map;
    }
    const planQuantities = this.getPlanQuantities();
    return quantitiesEqual(planQuantities, toQuantitiesByPlanId(subscriptionItemsForProduct));
  }
  getPriceString() {
    const total = this.total;
    const formatPrice = PriceUtils.formatPrice;
    PriceUtils;
    const obj = new _modDef6752(total.amount);
    const dividedByResult = obj.dividedBy(10 ** total.exponent);
    return formatPrice(dividedByResult.toNumber(), total.currency, { convertToMajorUnits: false });
  }
  getRegularPriceString() {
    const price = this.price;
    const formatPrice = PriceUtils.formatPrice;
    PriceUtils;
    const obj = new _modDef6752(price.amount);
    const dividedByResult = obj.dividedBy(10 ** price.exponent);
    return formatPrice(dividedByResult.toNumber(), price.currency, { convertToMajorUnits: false });
  }
  getDiscountedPriceString() {
    let formatPriceResult = null;
    if (null != this.discount) {
      const discounted_price = this.discount.discounted_price;
      const formatPrice = PriceUtils.formatPrice;
      const self = this;
      const self2 = this;
      PriceUtils;
      const obj = new _modDef6752(discounted_price.amount);
      const dividedByResult = obj.dividedBy(10 ** discounted_price.exponent);
      formatPriceResult = formatPrice(dividedByResult.toNumber(), discounted_price.currency, { convertToMajorUnits: false });
    }
    return formatPriceResult;
  }
  getAddOnPrice() {
    let currency;
    let dividedByResult;
    const self = this;
    if (0 === this.addOnPlans.length) {
      return null;
    } else {
      const price = self.addOnPlans[0].price;
      const exponent = price.exponent;
      const addOnPlans = self.addOnPlans;
      const obj = { majorUnits: dividedByResult.toNumber(), currency };
      currency = price.currency;
      const reduced = addOnPlans.reduce((acc, price) => acc + price.price.amount * price.quantity, 0);
      const self2 = this;
      const self3 = this;
      const obj2 = new _modDef6752(reduced);
      dividedByResult = obj2.dividedBy(10 ** exponent);
      return obj;
    }
  }
}
const prototype = AvailablePlanRecord.prototype;
class CheckoutContextRecord extends Record {
  constructor(paymentSources) {
    const tmp2 = new CheckoutContextRecord(tmp, this);
    paymentSources = paymentSources.paymentSources;
    if (paymentSources == null) {
      paymentSources = [];
    }
    tmp2.paymentSources = paymentSources;
    let storeCountry = paymentSources.storeCountry;
    if (storeCountry == null) {
      storeCountry = null;
    }
    tmp2.storeCountry = storeCountry;
    let allowedCurrencies = paymentSources.allowedCurrencies;
    if (allowedCurrencies == null) {
      allowedCurrencies = [];
    }
    tmp2.allowedCurrencies = allowedCurrencies;
    let availablePlans = paymentSources.availablePlans;
    if (availablePlans == null) {
      availablePlans = [];
    }
    tmp2.availablePlans = availablePlans;
    return tmp2;
  }
  static createFromOrder(checkout_context) {
    checkout_context = undefined;
    if (checkout_context != null) {
      checkout_context = checkout_context.checkout_context;
    }
    let tmp3 = null;
    if (null != checkout_context) {
      let payment_sources = checkout_context.payment_sources;
      if (payment_sources == null) {
        payment_sources = [];
      }
      let country = null;
      if (null != checkout_context.store_country) {
        country = checkout_context.store_country.country;
      }
      let allowed_currencies = checkout_context.allowed_currencies;
      if (allowed_currencies == null) {
        allowed_currencies = [];
      }
      let available_plans = checkout_context.available_plans;
      if (available_plans == null) {
        available_plans = [];
      }
      let mapped = available_plans.map(AvailablePlanRecord.createFromServer);
      const self = this;
      if (typeof CheckoutContextRecord === "function") {
        const self2 = this;
        const self3 = this;
        const tmp8 = new CheckoutContextRecord(tmp, available_plans, CheckoutContextRecord, this, payment_sources, country, allowed_currencies, mapped);
        if (payment_sources == null) {
          payment_sources = [];
        }
        tmp8.paymentSources = payment_sources;
        if (country == null) {
          country = null;
        }
        tmp8.storeCountry = country;
        if (allowed_currencies == null) {
          allowed_currencies = [];
        }
        tmp8.allowedCurrencies = allowed_currencies;
        if (mapped == null) {
          mapped = [];
        }
        tmp8.availablePlans = mapped;
        tmp3 = tmp8;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return tmp3;
  }
  getAvailablePlanForItems(subscriptionItemsForProduct) {
    let closure_0 = subscriptionItemsForProduct;
    const availablePlans = this.availablePlans;
    let found = availablePlans.find((matchesItems) => matchesItems.matchesItems(subscriptionItemsForProduct));
    if (found == null) {
      found = null;
    }
    return found;
  }
}
const prototype2 = CheckoutContextRecord.prototype;
let result = size.fileFinishedImporting("modules/payments/records/CheckoutContextRecord.tsx");

export default CheckoutContextRecord;
export { AvailablePlanRecord };