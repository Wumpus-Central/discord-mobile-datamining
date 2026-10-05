// discord_app/modules/billing/native/StorekitIAPQueue.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import CountryCodeUtils from "../../i18n/CountryCodeUtils.tsx";
import utils_PriceUtils from "../../../../discord_common/js/shared/utils/PriceUtils.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../_runtime/metro/00002__.js";

let _self, c4, c5, closure_2;

function productSK2ToIAPProduct(description) {
  let str4;
  let str5;
  let str6;
  let items = [];
  if (null != description.subscription.promotionalOffers) {
    const promotionalOffers = description.subscription.promotionalOffers;
    items = promotionalOffers.map((identifier) => {
      let str2;
      const paymentMode = identifier.paymentMode;
      if ("freeTrial" === paymentMode) {
        str2 = "FREETRIAL";
      } else if ("payAsYouGo" === paymentMode) {
        str2 = "PAYASYOUGO";
      } else {
        str2 = "PAYUPFRONT";
        if ("payUpFront" !== paymentMode) {
          str2 = "";
        }
      }
      const obj = {
        identifier: identifier.id,
        type: "SUBSCRIPTION",
        numberOfPeriods: str4.toString(),
        price: str5.toString(),
        localizedPrice: identifier.displayPrice,
        paymentMode: str2,
        subscriptionPeriod: str6.toUpperCase(),
      };
      return obj;
    });
  }
  if (null != description.subscription.introductoryOffer) {
    let str2;
    const introductoryOffer = description.subscription.introductoryOffer;
    let paymentMode = introductoryOffer.paymentMode;
    const push = items.push;
    if ("freeTrial" === paymentMode) {
      str2 = "FREETRIAL";
    } else if ("payAsYouGo" === paymentMode) {
      str2 = "PAYASYOUGO";
    } else {
      str2 = "PAYUPFRONT";
      if ("payUpFront" !== paymentMode) {
        str2 = "";
      }
    }
    let obj = {
      identifier: introductoryOffer.id,
      type: "SUBSCRIPTION",
      numberOfPeriods: str4.toString(),
      price: str5.toString(),
      localizedPrice: introductoryOffer.displayPrice,
      paymentMode: str2,
      subscriptionPeriod: str6.toUpperCase(),
    };
    str4 = introductoryOffer.period.value;
    str5 = introductoryOffer.price;
    str6 = introductoryOffer.period.unit;
    push(obj);
  }
  const price = description.price;
  const toFixed = price.toFixed;
  const NumberResult = Number(
    toFixed(utils_PriceUtils.CurrencyExponents[description.currency.toLowerCase(description.currency)]),
  );
  const obj2 = {
    identifier: String(description.id),
    price: NumberResult,
    currencySymbol: str8.split(/[0-9]/)[0],
    currencyCode: str9.toLowerCase(),
    priceString: String(NumberResult),
    countryCode: "",
    downloadable: false,
    description: description.description,
    title: description.displayName,
    discounts: items,
  };
  return obj2;
}
const NativeModules = react_native.NativeModules;
const convertToAlpha2 = CountryCodeUtils.convertToAlpha2;
const RNIapIosSk2 = NativeModules.RNIapIosSk2;
class StorekitIAPQueueClass {
  constructor() {
    const merged = Object.assign({ _queue: null, _processingQueue: false });
    merged[0] = [];
    return merged;
  }
  fetchSubscriptions(arg0) {
    const self = this;
    let closure_0 = arg0;
    const promise = new Promise((arg0, arg1) => {
      let items;
      closure_0 = arg0;
      _queue = arg1;
      _queue = _queue._queue;
      _queue.push(
        _asyncToGenerator(async () => {
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let c3;
            try {
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_1 = tmp;
                  closure_0 = undefined;
                  c3 = 1;
                  c4 = 2;
                  c5 = 1;
                  const obj4 = { value: items.getItems(closure_0), done: false };
                  return obj4;
                }
              } else {
                if (1 === c4) {
                  c3 = 0;
                  closure_129_1(closure_2);
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  const found = value.filter((subscription) => null != subscription.subscription);
                  closure_0 = found.map(productSK2ToIAPProduct);
                  closure_129_0(closure_0);
                  c3 = 0;
                }
                c5 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp18) {
              closure_2 = tmp18;
              if (0 === c3) {
                c5 = 3;
                throw tmp18;
              } else {
                c4 = 1;
              }
            }
          }
        }),
      );
    });
    this.processQueue();
    return promise;
  }
  fetchProducts(arg0) {
    const self = this;
    let closure_0 = arg0;
    const promise = new Promise((arg0, arg1) => {
      closure_0 = arg0;
      _queue = arg1;
      _queue = _queue._queue;
      const arr = _queue.push(
        _asyncToGenerator(async () => {
          if (c5 === 2) {
            c5 = 3;
            let str = "Generator functions may not be called on executing generators";
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let c3;
            try {
              let skus;
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_1 = tmp;
                  skus = undefined;
                  c3 = 1;
                  const obj5 = { skus };
                  const obj2 = skus(closure_1[4]);
                  const products = obj2.getProducts(obj5);
                  c4 = 2;
                  c5 = 1;
                  const obj6 = {
                    value: products.then((arr) => {
                      const found = arr.filter((type) => "iap" === type.type);
                      return found.map((item) => {
                        function mapToIAPProduct(countryCode) {
                          let discounts;
                          let first;
                          let str3;
                          let str = "";
                          if (null != countryCode.countryCode) {
                            if (0 !== countryCode.countryCode.length) {
                              try {
                                str = closure_1_3(countryCode.countryCode);
                              } catch (err) {}
                            }
                          }
                          const obj = {
                            identifier: countryCode.productId,
                            price: parseFloat(countryCode.price),
                            currencySymbol: first,
                            currencyCode: str3.toLowerCase(),
                            priceString: countryCode.price,
                            countryCode: str,
                            downloadable: false,
                            description: null,
                            title: null,
                            discounts,
                          };
                          first = undefined;
                          if (countryCode.localizedPrice != null) {
                            first = str2.split(/[0-9]/)[0];
                          }
                          str3 = countryCode.currency;
                          ({ description: obj.description, title: obj.title } = countryCode);
                          discounts = undefined;
                          if ("discounts" in countryCode) {
                            discounts = countryCode.discounts;
                          }
                          return obj;
                        }
                        return mapToIAPProduct(item);
                      });
                    }),
                    done: false,
                  };
                  return obj6;
                }
              } else {
                if (1 === c4) {
                  c3 = 0;
                  closure_129_1(closure_2);
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  let obj = { value, done: true };
                  return obj;
                } else {
                  skus = value;
                  closure_129_0(skus);
                  c3 = 0;
                }
                c5 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp18) {
              closure_2 = tmp18;
              if (0 === c3) {
                c5 = 3;
                throw tmp18;
              } else {
                c4 = 1;
              }
            }
          }
        }),
      );
    });
    this.processQueue();
    return promise;
  }
  processQueue() {
    const self = this;
    return (async () => {
      let closure_0;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp;
              _self = undefined;
              if (!self._processingQueue) {
                self._processingQueue = true;
                c3 = 1;
                if (self._queue.length <= 0) {
                  c3 = 0;
                  closure_129_0._processingQueue = false;
                }
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (1 === c4) {
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
            const obj = { value, done: true };
            return obj;
          }
          const _queue = closure_129_0._queue;
          _self = _queue.shift();
          c4 = 2;
          c5 = 1;
          const obj4 = { value: _self(), done: false };
          return obj4;
        } catch (tmp21) {
          closure_2 = tmp21;
          if (0 === c3) {
            c5 = 3;
            throw tmp21;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  }
}
const prototype = StorekitIAPQueueClass.prototype;
let merged = Object.assign({ _queue: null, _processingQueue: false });
merged[0] = [];
const result = size.fileFinishedImporting("modules/billing/native/StorekitIAPQueue.tsx");

export default merged;
