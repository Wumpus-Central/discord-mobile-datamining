import closure_2 from "set";
import { convertToAlpha2 } from "DEFAULT_COUNTRY_CODE_NAME";
import set from "DEFAULT_COUNTRY_CODE_NAME";

const require = arg1;
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
    const NumberResult = Number(price.toFixed(require(5674) /* CurrencyCodes */.CurrencyExponents[subscription.currency.toLowerCase(subscription.currency)]));
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
  let closure_0 = arg0;
  this.processQueue();
  return new Promise((arg0, arg1) => {
    let closure_0 = arg0;
    const _self = arg1;
    const _queue = _self._queue;
    _queue.push(outer1_2(function*() {
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
              const callback2 = tmp3;
              let callback = tmp7;
              callback = undefined;
              let c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer2_4.getItems(outer1_0);
              return obj1;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              callback2(closure_2);
              c5 = 3;
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              const found = arg1.filter((subscription) => null != subscription.subscription);
              callback = found.map(outer2_5);
              callback(callback);
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp21) {
          closure_2 = tmp21;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp21;
          } else {
            c4 = tmp;
          }
        }
      }
    }));
  });
};
prototype["fetchProducts"] = function fetchProducts(arg0) {
  const self = this;
  let closure_0 = arg0;
  this.processQueue();
  return new Promise((arg0, arg1) => {
    let closure_0 = arg0;
    const _self = arg1;
    const _queue = _self._queue;
    _queue.push(outer1_2(function*() {
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
              const dependencyMap = tmp3;
              let callback = tmp7;
              callback = undefined;
              let c3 = 1;
              let obj1 = callback(6336);
              obj1 = { skus: null };
              obj1[0] = outer1_0;
              const products = obj1.getProducts(obj1);
              c4 = 2;
              c5 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = products.then((arr) => {
                const found = arr.filter((type) => "iap" === type.type);
                return found.map((countryCode) => (function mapToIAPProduct() { ... })(countryCode));
              });
              return obj2;
            }
          } else {
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
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp21) {
          closure_2 = tmp21;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp21;
          } else {
            c4 = tmp;
          }
        }
      }
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
            let closure_1 = tmp3;
            let lib = tmp7;
            lib = undefined;
            if (outer1_0._processingQueue) {
              c5 = 3;
            } else {
              outer1_0._processingQueue = true;
              let c3 = 1;
              if (outer1_0._queue.length <= 0) {
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
        const obj1 = { value: null, done: false };
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