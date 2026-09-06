// === Module 7426: CheckoutContextRecord ===

// Module 7426 (CheckoutContextRecord)
import PriceUtils from "PriceUtils" /* 7234 */;
import addDefault from "add" /* 7236 */;
import _slicedToArray from "module_32" /* 32 */;
import Record from "Record" /* 1386 */;

require = fn;
let AvailablePlanRecord;
class AvailablePlanRecord extends tmp2 {
  constructor(arg0) {
    tmp = new AvailablePlanRecord(new.target, new.target, global);
    ({ id: tmp.id, quantity: tmp.quantity, price: tmp.price, total: tmp.total, addOnPlans } = global);
    if (addOnPlans == null) {
      addOnPlans = [];
    }
    tmp.addOnPlans = addOnPlans;
    discount = global.discount;
    if (discount == null) {
      discount = null;
    }
    tmp.discount = discount;
    return tmp;
  }
}
const prototype = AvailablePlanRecord.prototype;
AvailablePlanRecord["createFromServer"] = function createFromServer(discount) {
  ({ id, quantity, price, total, add_on_plans } = discount);
  if (add_on_plans == null) {
    add_on_plans = [];
  }
  discount = discount.discount;
  if (discount == null) {
    discount = null;
  }
  if (typeof AvailablePlanRecord === "function") {
    const tmp7 = new AvailablePlanRecord(tmp, AvailablePlanRecord, new.target, id, quantity, price, total, add_on_plans);
    tmp7.id = id;
    tmp7.quantity = quantity;
    tmp7.price = price;
    tmp7.total = total;
    if (add_on_plans == null) {
      add_on_plans = [];
    }
    tmp7.addOnPlans = add_on_plans;
    if (discount == null) {
      discount = null;
    }
    tmp7.discount = discount;
    return tmp7;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
prototype["getPlanQuantities"] = function getPlanQuantities() {
  const items = [, ];
  ({ id: arr[0], quantity: arr[1] } = this);
  const items1 = [items];
  const map = new Map(items1);
  const iter = this.addOnPlans[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let num = map.get(nextResult.id);
    if (num == null) {
      num = 0;
    }
    let result = map.set(nextResult.id, num + tmp2.quantity);
    continue;
  }
  return map;
};
prototype["matchesItems"] = function matchesItems(arg0) {
  const planQuantities = this.getPlanQuantities();
  return (function quantitiesEqual(planQuantities, size2) {
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
  })(planQuantities, (function toQuantitiesByPlanId(arg0) {
    const map = new Map();
    const iter = arg0[Symbol.iterator]();
    while (iter !== undefined) {
      ({ planId, quantity } = nextResult);
      let num = map.get(planId);
      if (num == null) {
        num = 0;
      }
      let result = map.set(planId, num + quantity);
      continue;
    }
    return map;
  })(arg0));
};
prototype["getPriceString"] = function getPriceString() {
  const total = this.total;
  const obj = PriceUtils;
  const obj2 = new addDefault(total.amount);
  return obj.formatPrice(new addDefault(total.amount).dividedBy(10 ** total.exponent).toNumber(), total.currency, { convertToMajorUnits: false });
};
prototype["getRegularPriceString"] = function getRegularPriceString() {
  const price = this.price;
  const obj = PriceUtils;
  const obj2 = new addDefault(price.amount);
  return obj.formatPrice(new addDefault(price.amount).dividedBy(10 ** price.exponent).toNumber(), price.currency, { convertToMajorUnits: false });
};
prototype["getDiscountedPriceString"] = function getDiscountedPriceString() {
  let formatPriceResult = null;
  if (null != this.discount) {
    const discounted_price = this.discount.discounted_price;
    const obj2 = new addDefault(discounted_price.amount);
    const obj = PriceUtils;
    formatPriceResult = obj.formatPrice(obj2.dividedBy(10 ** discounted_price.exponent).toNumber(), discounted_price.currency, { convertToMajorUnits: false });
    const dividedByResult = obj2.dividedBy(10 ** discounted_price.exponent);
  }
  return formatPriceResult;
};
prototype["getAddOnPrice"] = function getAddOnPrice() {
  const self = this;
  if (0 === this.addOnPlans.length) {
    return null;
  } else {
    const price = self.addOnPlans[0].price;
    const obj = { majorUnits: null, currency: null };
    const exponent = price.exponent;
    const addOnPlans = self.addOnPlans;
    const reduced = addOnPlans.reduce((acc, price) => acc + price.price.amount * price.quantity, 0);
    const obj2 = new addDefault(reduced);
    obj.majorUnits = obj2.dividedBy(10 ** exponent).toNumber();
    obj.currency = price.currency;
    return obj;
  }
};
let CheckoutContextRecord;
class CheckoutContextRecord extends tmp2 {
  constructor(arg0) {
    tmp2 = new CheckoutContextRecord(tmp, new.target);
    paymentSources = global.paymentSources;
    if (paymentSources == null) {
      paymentSources = [];
    }
    tmp2.paymentSources = paymentSources;
    storeCountry = global.storeCountry;
    if (storeCountry == null) {
      storeCountry = null;
    }
    tmp2.storeCountry = storeCountry;
    allowedCurrencies = global.allowedCurrencies;
    if (allowedCurrencies == null) {
      allowedCurrencies = [];
    }
    tmp2.allowedCurrencies = allowedCurrencies;
    availablePlans = global.availablePlans;
    if (availablePlans == null) {
      availablePlans = [];
    }
    tmp2.availablePlans = availablePlans;
    return tmp2;
  }
}
CheckoutContextRecord["createFromOrder"] = function createFromOrder(checkout_context) {
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
    if (typeof CheckoutContextRecord === "function") {
      const tmp11 = new CheckoutContextRecord(tmp, available_plans, CheckoutContextRecord, new.target, payment_sources, country, allowed_currencies, mapped);
      if (payment_sources == null) {
        payment_sources = [];
      }
      tmp11.paymentSources = payment_sources;
      if (country == null) {
        country = null;
      }
      tmp11.storeCountry = country;
      if (allowed_currencies == null) {
        allowed_currencies = [];
      }
      tmp11.allowedCurrencies = allowed_currencies;
      if (mapped == null) {
        mapped = [];
      }
      tmp11.availablePlans = mapped;
      tmp3 = tmp11;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return tmp3;
};
CheckoutContextRecord.prototype["getAvailablePlanForItems"] = function getAvailablePlanForItems(subscriptionItemsForProduct) {
  closure_0 = subscriptionItemsForProduct;
  const availablePlans = this.availablePlans;
  let found = availablePlans.find((matchesItems) => matchesItems.matchesItems(closure_0));
  if (found == null) {
    found = null;
  }
  return found;
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/payments/records/CheckoutContextRecord.tsx");

export default CheckoutContextRecord;
export { AvailablePlanRecord };