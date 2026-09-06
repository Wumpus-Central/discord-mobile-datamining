// discord_app/modules/billing/native/StorekitIAPQueue.tsx
import utils_PriceUtils from "../../../../discord_common/js/shared/utils/PriceUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
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
      const obj = { identifier: identifier.id, type: "SUBSCRIPTION", numberOfPeriods: identifier.period.value.toString(), price: identifier.price.toString(), localizedPrice: identifier.displayPrice, paymentMode: str2, subscriptionPeriod: identifier.period.unit.toUpperCase() };
      return obj;
    });
  }
  if (null == subscription.subscription.introductoryOffer) {
    const _Number = Number;
    const price = subscription.price;
    const NumberResult = Number(price.toFixed(utils_PriceUtils.CurrencyExponents[subscription.currency.toLowerCase(subscription.currency)]));
    let obj = { identifier: null, price: null, currencySymbol: null, currencyCode: null, priceString: null, countryCode: "", downloadable: false, description: null, title: null, discounts: null };
    const _String = String;
    obj.identifier = String(subscription.id);
    obj.price = NumberResult;
    obj.currencySymbol = subscription.displayPrice.split(/[0-9]/)[0];
    obj.currencyCode = subscription.currency.toLowerCase();
    const _String2 = String;
    obj.priceString = String(NumberResult);
    ({ description: obj2.description, displayName: obj2.title } = subscription);
    obj.discounts = items;
    return obj;
  } else {
    let introductoryOffer = subscription.subscription.introductoryOffer;
    let paymentMode = introductoryOffer.paymentMode;
    if ("freeTrial" === paymentMode) {
      let str2 = "FREETRIAL";
      obj = { identifier: introductoryOffer.id, type: "SUBSCRIPTION", numberOfPeriods: introductoryOffer.period.value.toString(), price: introductoryOffer.price.toString(), localizedPrice: introductoryOffer.displayPrice, paymentMode: str2, subscriptionPeriod: null };
      introductoryOffer = introductoryOffer.period.unit.toUpperCase();
      obj.subscriptionPeriod = introductoryOffer;
      tmp6(obj);
    } else if ("payAsYouGo" !== paymentMode) {
      str2 = "PAYUPFRONT";
      if ("payUpFront" !== paymentMode) {
        str2 = "";
      }
    }
    str2 = "PAYASYOUGO";
  }
}
const convertToAlpha2 = fn(4776).convertToAlpha2;
const RNIapIosSk2 = fn(17).NativeModules.RNIapIosSk2;
class StorekitIAPQueueClass {
  constructor() {
    merged = Object.assign({ _queue: null, _processingQueue: false });
    merged[0] = [];
    return merged;
  }
}
const prototype = StorekitIAPQueueClass.prototype;
prototype["fetchSubscriptions"] = function fetchSubscriptions(arg0) {
  const self = this;
  closure_0 = arg0;
  this.processQueue();
  return new Promise((arg0, arg1) => {
    closure_0 = arg0;
    _self = arg1;
    const _queue = _self._queue;
    _queue.push(asyncGeneratorStep(async () => {
      closure_1 = tmp3;
      await items.getItems(closure_0);
      if (1 === tmp7) {
        c3 = 0;
        closure_129_1(closure_2);
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const found = arg1.filter((subscription) => null != subscription.subscription);
        closure_128_0 = found.map(productSK2ToIAPProduct);
        closure_129_0(closure_128_0);
        c3 = 0;
      }
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
    _self = arg1;
    const _queue = _self._queue;
    _queue.push(asyncGeneratorStep(async () => {
      skus(tmp3[4]);
      const obj1 = { skus };
      const products = obj1.getProducts(obj1);
      await products.then((arr) => {
        const found = arr.filter((type) => "iap" === type.type);
        return found.map((item) => (function mapToIAPProduct() { ... })(item));
      });
      if (1 === tmp7) {
        c3 = 0;
        closure_129_1(closure_2);
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        closure_128_0 = arg1;
        closure_129_0(closure_128_0);
        c3 = 0;
      }
      return arg1;
    }));
  });
};
prototype["processQueue"] = function processQueue() {
  const self = this;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp7;
            closure_128_0 = undefined;
            if (self._processingQueue) {
              c5 = 3;
            } else {
              self._processingQueue = true;
              c3 = 1;
              if (self._queue.length <= 0) {
                c3 = 0;
                closure_129_0._processingQueue = false;
              }
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_129_0._processingQueue = false;
          throw closure_2;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_129_0._processingQueue = false;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
        const _queue = closure_129_0._queue;
        closure_128_0 = _queue.shift();
        c4 = 2;
        c5 = 1;
        const obj1 = { value: closure_128_0(), done: false };
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
let merged = Object.assign({ _queue: null, _processingQueue: false });
merged[0] = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/StorekitIAPQueue.tsx");

export default merged;