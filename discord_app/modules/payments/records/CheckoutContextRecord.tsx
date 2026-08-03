import _slicedToArray from "_slicedToArray";
import "toJS";

const require = arg1;
let AvailablePlanRecord;
class AvailablePlanRecord extends tmp2 {
  constructor(arg0) {
    tmp = new AvailablePlanRecord(new.target, new.target, global);
    // ThrowIfThisInitialized (0x7c)
    ({ id: tmp.id, quantity: tmp.quantity, price: tmp.price, total: tmp.total, addOnPlans } = global);
    if (addOnPlans == null) {
      addOnPlans = [];
    }
    tmp.addOnPlans = addOnPlans;
    return tmp;
  }
}
const prototype = AvailablePlanRecord.prototype;
AvailablePlanRecord["createFromServer"] = function createFromServer(arg0) {
  let add_on_plans;
  let id;
  let price;
  let quantity;
  let total;
  ({ id, quantity, price, total, add_on_plans } = arg0);
  if (add_on_plans == null) {
    add_on_plans = [];
  }
  if (typeof AvailablePlanRecord !== "error") {
    HermesBuiltin.throwTypeError();
  }
  const tmp2 = new AvailablePlanRecord("Trying to call a non-function", AvailablePlanRecord, new.target, id, quantity, price, total);
  // ThrowIfThisInitialized (0x7c)
  tmp2.id = id;
  tmp2.quantity = quantity;
  tmp2.price = price;
  tmp2.total = total;
  if (add_on_plans == null) {
    add_on_plans = [];
  }
  tmp2.addOnPlans = add_on_plans;
  return tmp2;
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
    let tmp3 = nextResult;
    let result = map.set(nextResult.id, num + tmp2.quantity);
    continue;
  }
  return map;
};
prototype["matchesItems"] = function matchesItems(closure_0) {
  const planQuantities = this.getPlanQuantities();
  return (function quantitiesEqual(planQuantities, size2) {
    if (planQuantities.size !== size2.size) {
      return false;
    } else {
      const obj = planQuantities[Symbol.iterator]();
      while (obj !== undefined) {
        let tmp5 = callback;
        let tmp6 = callback(tmp3, 2);
        if (size2.get(tmp6[0]) !== tmp6[1]) {
          let tmp7 = obj;
          obj.return();
          let flag = false;
          return false;
        }
      }
      return true;
    }
  })(planQuantities, (function toQuantitiesByPlanId(closure_0) {
    let planId;
    let quantity;
    const map = new Map();
    const iter = closure_0[Symbol.iterator]();
    while (iter !== undefined) {
      ({ planId, quantity } = nextResult);
      let num = map.get(planId);
      if (num == null) {
        num = 0;
      }
      let tmp2 = quantity;
      let result = map.set(planId, num + quantity);
      continue;
    }
    return map;
  })(closure_0));
};
prototype["getPriceString"] = function getPriceString() {
  const total = this.total;
  const obj = require(5735) /* formatSingleCurrencyPrice */;
  const obj2 = new importDefault(5737)(total.amount);
  return obj.formatPrice(new importDefault(5737)(total.amount).dividedBy(10 ** total.exponent).toNumber(), total.currency, { convertToMajorUnits: false });
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
    const reduced = addOnPlans.reduce((arg0, price) => arg0 + price.price.amount * price.quantity, 0);
    const obj2 = new importDefault(5737)(reduced);
    obj[0] = obj2.dividedBy(10 ** exponent).toNumber();
    obj[1] = price.currency;
    return obj;
  }
};
let CheckoutContextRecord;
class CheckoutContextRecord extends tmp2 {
  constructor(arg0) {
    tmp2 = new CheckoutContextRecord(tmp, new.target);
    // ThrowIfThisInitialized (0x7c)
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
  let tmp2 = null;
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
    if (typeof CheckoutContextRecord !== "error") {
      HermesBuiltin.throwTypeError();
    }
    const tmp10 = new CheckoutContextRecord("Trying to call a non-function", available_plans, CheckoutContextRecord, new.target, payment_sources, country, allowed_currencies, mapped);
    // ThrowIfThisInitialized (0x7c)
    if (payment_sources == null) {
      payment_sources = [];
    }
    tmp10.paymentSources = payment_sources;
    if (country == null) {
      country = null;
    }
    tmp10.storeCountry = country;
    if (allowed_currencies == null) {
      allowed_currencies = [];
    }
    tmp10.allowedCurrencies = allowed_currencies;
    if (mapped == null) {
      mapped = [];
    }
    tmp10.availablePlans = mapped;
    tmp2 = tmp10;
  }
  return tmp2;
};
CheckoutContextRecord.prototype["getAvailablePlanForItems"] = function getAvailablePlanForItems(subscriptionItemsForProduct) {
  let closure_0 = subscriptionItemsForProduct;
  const availablePlans = this.availablePlans;
  let found = availablePlans.find((matchesItems) => matchesItems.matchesItems(closure_0));
  if (found == null) {
    found = null;
  }
  return found;
};
let result = require("add").fileFinishedImporting("modules/payments/records/CheckoutContextRecord.tsx");

export default CheckoutContextRecord;
export { AvailablePlanRecord };