// === Module 11067: productSK2ToIAPProduct ===

// Module 11067 (productSK2ToIAPProduct)
import CurrencyCodes from "CurrencyCodes" /* 7235 */;
import closure_2 from "asyncGeneratorStep" /* 5 */;
import { convertToAlpha2 } from "DEFAULT_COUNTRY_CODE_NAME" /* 4776 */;
import set from "set" /* 2 */;

require = arg1;
function productSK2ToIAPProduct(subscription) {
  let items = [];
  if (null != subscription.subscription.promotionalOffers) {
    const promotionalOffers = subscription.subscription.promotionalOffers;
    items = promotionalOffers.map((identifier) => {
      const paymentMode = identifier.paymentMode;
      if ("freeTrial" === paymentMode) {
        let str2 = "FREETRIAL";
      } else if ("payAsYouGo" === paymentMode) {
        str2 = "PAYASYOUGO";
      } else {
        str2 = "PAYUPFRONT";
        if ("payUpFront" !== paymentMode) {
          str2 = "";
        }
      }
      return { identifier: identifier.id, type: "SUBSCRIPTION", numberOfPeriods: str4.toString(), price: str5.toString(), localizedPrice: identifier.displayPrice, paymentMode: str2, subscriptionPeriod: str6.toUpperCase() };
    });
  }
  if (null == subscription.subscription.introductoryOffer) {
    const _Number = Number;
    const price = subscription.price;
    const NumberResult = Number(price.toFixed(CurrencyCodes.CurrencyExponents[subscription.currency.toLowerCase(subscription.currency)]));
    let obj = { identifier: null, price: null, currencySymbol: null, currencyCode: null, priceString: null, countryCode: "", downloadable: false, description: null, title: null, discounts: null };
    const _String = String;
    obj[0] = String(subscription.id);
    obj[1] = NumberResult;
    obj[2] = subscription.displayPrice.split(/[0-9]/)[0];
    obj[3] = subscription.currency.toLowerCase();
    const _String2 = String;
    obj[4] = String(NumberResult);
    ({ description: obj2[7], displayName: obj2[8] } = subscription);
    obj[9] = items;
    return obj;
  } else {
    let introductoryOffer = subscription.subscription.introductoryOffer;
    let paymentMode = introductoryOffer.paymentMode;
    if ("freeTrial" === paymentMode) {
      let str2 = "FREETRIAL";
      obj = { identifier: null, type: "SUBSCRIPTION", numberOfPeriods: null, price: null, localizedPrice: null, paymentMode: null, subscriptionPeriod: null };
      obj[0] = introductoryOffer.id;
      obj[2] = introductoryOffer.period.value.toString();
      obj[3] = introductoryOffer.price.toString();
      obj[4] = introductoryOffer.displayPrice;
      obj[5] = str2;
      introductoryOffer = introductoryOffer.period.unit.toUpperCase();
      obj[6] = introductoryOffer;
      tmp6(obj);
      const str4 = introductoryOffer.period.value;
      const str5 = introductoryOffer.price;
      const str6 = introductoryOffer.period.unit;
    } else if ("payAsYouGo" !== paymentMode) {
      str2 = "PAYUPFRONT";
      if ("payUpFront" !== paymentMode) {
        str2 = "";
      }
    }
    str2 = "PAYASYOUGO";
  }
}
const RNIapIosSk2 = require("get ActivityIndicator").NativeModules.RNIapIosSk2;
class StorekitIAPQueueClass {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj[0] = [];
    return obj;
  }
}
const prototype = StorekitIAPQueueClass.prototype;
prototype["fetchSubscriptions"] = function fetchSubscriptions(arg0) {
  const self = this;
  closure_0 = arg0;
  this.processQueue();
  return new Promise((arg0, arg1) => {
    closure_0 = arg0;
    const _self = arg1;
    const _queue = _self._queue;
    _queue.push(closure_1_2(function*() {
      const callback2 = tmp3;
      c3 = 1;
      yield closure_2_4.getItems(closure_1_0);
      if (1 === tmp7) {
        c3 = 0;
        callback2(closure_2);
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const found = arg1.filter((subscription) => null != subscription.subscription);
        const callback = found.map(closure_2_5);
        callback(callback);
        c3 = 0;
      }
      c3 = 0;
      return arg1;
    }));
  });
};
prototype["fetchProducts"] = function fetchProducts(arg0) {
  const self = this;
  closure_0 = arg0;
  this.processQueue();
  return new Promise((arg0, arg1) => {
    closure_0 = arg0;
    const _self = arg1;
    const _queue = _self._queue;
    _queue.push(closure_1_2(function*() {
      dependencyMap = tmp3;
      c3 = 1;
      obj1 = callback(11048);
      obj1 = { skus: null };
      obj1[0] = closure_1_0;
      const products = obj1.getProducts(obj1);
      yield products.then((arr) => {
        const found = arr.filter((type) => "iap" === type.type);
        return found.map((countryCode) => (function mapToIAPProduct() { ... })(countryCode));
      });
      if (1 === tmp7) {
        c3 = 0;
        dependencyMap(closure_2);
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        callback = arg1;
        callback(callback);
        c3 = 0;
      }
      c3 = 0;
      return arg1;
    }));
  });
};
prototype["processQueue"] = function processQueue() {
  const self = this;
  return callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp3;
            let lib = tmp7;
            lib = undefined;
            if (closure_1_0._processingQueue) {
              c5 = 3;
            } else {
              closure_1_0._processingQueue = true;
              c3 = 1;
              if (closure_1_0._queue.length <= 0) {
                c3 = 0;
                lib._processingQueue = false;
              }
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          lib._processingQueue = false;
          throw closure_2;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          lib._processingQueue = false;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        const _queue = lib._queue;
        lib = _queue.shift();
        c4 = 2;
        c5 = 1;
        obj1 = { value: null, done: false };
        obj1[0] = lib();
        return obj1;
      } catch (tmp24) {
        closure_2 = tmp24;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp24;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};
let set = Object.create(StorekitIAPQueueClass.prototype);
set[0] = [];
const result = set.fileFinishedImporting("modules/billing/native/StorekitIAPQueue.tsx");

export default set;