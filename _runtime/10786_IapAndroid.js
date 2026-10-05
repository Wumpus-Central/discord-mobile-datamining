// _runtime/10786_IapAndroid.js
import ReplacementModesAndroid from "10787_ReplacementModesAndroid.js";
import _mod10788 from "metro/10788__.js";
import RNIapAmazonModuleAll from "10794_RNIapAmazonModule.js";
import RNIapModuleAll from "10795_RNIapModule.js";
import _modAll10796 from "metro/10796__.js";
import react_nativeAll from "10797_react-native.js";
import _asyncToGenerator_mod from "metro/00005__asyncToGenerator.js";
import react_native from "00017_react-native.js";

let NativeModules;
let Platform;
let RNIapIos;
let RNIapIosSk2;
let closure_4;
let hasOwnProperty;
let _asyncToGenerator = _asyncToGenerator_mod;
({ NativeModules, Platform } = react_native);
({ RNIapIos, RNIapIosSk2, RNIapModule: closure_4, RNIapAmazonModule: hasOwnProperty } = NativeModules);
const subs = ReplacementModesAndroid.ProductType.subs;
const inapp = ReplacementModesAndroid.ProductType.inapp;
function addSubscriptionPlatform(arr, platform) {
  return arr.map((item) => {
    const obj = { platform };
    const merged = Object.assign(item);
    return obj;
  });
}

export const IapAndroid = RNIapModuleAll;
export const IapAmazon = RNIapAmazonModuleAll;
export const IapIos = _modAll10796;
export const IapIosSk2 = react_nativeAll;
export const isIosStorekit2 = _mod10788.isIosStorekit2;
export const setup = () => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let str = obj.storekitMode;
  if (str === undefined) {
    str = "STOREKIT1_MODE";
  }
  if ("STOREKIT1_MODE" === str) {
    const obj4 = _mod10788;
    obj4.storekit1Mode();
  } else if ("STOREKIT2_MODE" === str) {
    const obj3 = _mod10788;
    obj3.storekit2Mode();
  } else if ("STOREKIT_HYBRID_MODE" === str) {
    const obj2 = _mod10788;
    obj2.storekitHybridMode();
  }
};
export const initConnection = () => {
  const obj = _mod10788;
  const nativeModule = obj.getNativeModule();
  return nativeModule.initConnection();
};
export const endConnection = () => {
  const obj = _mod10788;
  const nativeModule = obj.getNativeModule();
  return nativeModule.endConnection();
};
export const flushFailedPurchasesCachedAsPendingAndroid = () => {
  const obj = _mod10788;
  const androidModule = obj.getAndroidModule();
  return androidModule.flushFailedPurchasesCachedAsPending();
};
export const getProducts = (skus) => {
  let rejectResult;
  function android() {
    return closure_1(...arguments);
  }
  skus = skus.skus;
  let closure_1;
  let length;
  if (skus != null) {
    length = skus.length;
  }
  if (length) {
    closure_1 = _asyncToGenerator(async () => {
      let closure_0;
      let obj;
      if (c3 === 2) {
        c3 = 3;
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
        try {
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp4;
              tmp = undefined;
              const obj4 = tmp(c2[3]);
              const androidModule = obj4.getAndroidModule();
              c2 = 1;
              c3 = 1;
              const obj5 = { value: androidModule.getItemsByType(inapp, skus), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            tmp = value.map(tmp(c2[4]).singleProductAndroidMap);
            c3 = 3;
            const obj7 = { value: obj.fillProductsWithAdditionalData(tmp), done: true };
            obj = tmp(c2[3]);
            return obj7;
          }
        } catch (tmp16) {
          c3 = 3;
          throw tmp16;
        }
      }
    });
    rejectResult = android();
  } else {
    rejectResult = Promise.reject('"skus" is required');
  }
  return rejectResult;
};
export const getSubscriptions = (skus) => {
  let rejectResult;
  function android() {
    return closure_1(...arguments);
  }
  skus = skus.skus;
  let closure_1;
  let length;
  if (skus != null) {
    length = skus.length;
  }
  if (length) {
    closure_1 = _asyncToGenerator(async function () {
      let c3;
      let closure_0;
      let tmp;
      const obj10 = tmp(c2[3]);
      tmp = obj10.getAndroidModuleType();
      const obj11 = tmp(c2[3]);
      const androidModule = obj11.getAndroidModule();
      await androidModule.getItemsByType(closure_1_6, skus);
      closure_1 = value;
      if ("android" === tmp) {
        return addSubscriptionPlatform(closure_1, tmp(c2[2]).SubscriptionPlatform.android);
      }
      if ("amazon" !== tmp30) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error = new Error(
          "getSubscriptions received unknown platform " + tmp + ". Verify the logic in getAndroidModuleType",
        );
        throw error;
      }
      let closure_2 = closure_1;
      const obj3 = tmp(c2[3]);
      await obj3.fillProductsWithAdditionalData(closure_2);
      closure_2 = value;
      return addSubscriptionPlatform(closure_2, tmp(c2[2]).SubscriptionPlatform.amazon);
    });
    rejectResult = android();
  } else {
    rejectResult = Promise.reject('"skus" is required');
  }
  return rejectResult;
};
export const getPurchaseHistory = () => {
  let alsoPublishToEventListener;
  let automaticallyFinishRestoredTransactions;
  let onlyIncludeActiveItems;
  function android() {
    return closure_0(...arguments);
  }
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ alsoPublishToEventListener, automaticallyFinishRestoredTransactions, onlyIncludeActiveItems } = obj);
  let closure_0 = _asyncToGenerator(async () => {
    if (c3 === 2) {
      c3 = 3;
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
      try {
        let tmp;
        let closure_1;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            tmp = undefined;
            closure_1 = undefined;
            if (availableItems) {
              c2 = 1;
              c3 = 1;
              const obj4 = { value: availableItems.getAvailableItems(), done: false };
              return obj4;
            } else {
              c2 = 2;
              c3 = 1;
              const obj5 = { value: closure_1_4.getPurchaseHistoryByType(inapp), done: false };
              return obj5;
            }
          }
        } else if (1 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          }
        } else if (2 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            tmp = value;
            c2 = 3;
            c3 = 1;
            const obj9 = { value: closure_1_4.getPurchaseHistoryByType(subs), done: false };
            return obj9;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_1 = value;
          c3 = 3;
          const obj = { value: tmp.concat(closure_1), done: true };
          return obj;
        }
      } catch (tmp14) {
        c3 = 3;
        throw tmp14;
      }
    }
  });
  return android();
};
export const getAvailablePurchases = (arg0) => {
  let alsoPublishToEventListener;
  let automaticallyFinishRestoredTransactions;
  let onlyIncludeActiveItems;
  function android() {
    return closure_0(...arguments);
  }
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ alsoPublishToEventListener, automaticallyFinishRestoredTransactions, onlyIncludeActiveItems } = obj);
  let closure_0 = _asyncToGenerator(async () => {
    if (c3 === 2) {
      c3 = 3;
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
      try {
        let tmp;
        let closure_1;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            tmp = undefined;
            closure_1 = undefined;
            if (availableItems) {
              c2 = 1;
              c3 = 1;
              const obj4 = { value: availableItems.getAvailableItems(), done: false };
              return obj4;
            } else {
              c2 = 2;
              c3 = 1;
              const obj5 = { value: closure_1_4.getAvailableItemsByType(inapp), done: false };
              return obj5;
            }
          }
        } else if (1 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          }
        } else if (2 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            tmp = value;
            c2 = 3;
            c3 = 1;
            const obj9 = { value: closure_1_4.getAvailableItemsByType(subs), done: false };
            return obj9;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_1 = value;
          c3 = 3;
          const obj = { value: tmp.concat(closure_1), done: true };
          return obj;
        }
      } catch (tmp14) {
        c3 = 3;
        throw tmp14;
      }
    }
  });
  return android();
};
export const requestPurchase = (arg0) => {
  function android() {
    return closure_1(...arguments);
  }
  let closure_0 = arg0;
  let closure_1 = _asyncToGenerator(async function () {
    let _false;
    let buyItemByType;
    let isOfferPersonalized;
    let obfuscatedAccountIdAndroid;
    let obfuscatedProfileIdAndroid;
    let skus;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else if (_false(dependencyMap[3]).isAmazon) {
          if ("sku" in _false) {
            c1 = 3;
            const obj4 = { value: closure_1_5.buyItemByType(_false.sku, ""), done: true };
            return obj4;
          } else {
            const _Error2 = Error;
            const self3 = this;
            const self4 = this;
            const error = new Error("sku is required for Amazon purchase");
            throw error;
          }
        } else {
          if ("skus" in _false) {
            if (_false.skus.length) {
              ({ skus, obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, isOfferPersonalized } = _false);
              _false = isOfferPersonalized;
              buyItemByType = buyItemByType.buyItemByType;
              if (isOfferPersonalized == null) {
                _false = false;
              }
              c1 = 3;
              const obj = {
                value: buyItemByType(
                  inapp,
                  skus,
                  undefined,
                  -1,
                  obfuscatedAccountIdAndroid,
                  obfuscatedProfileIdAndroid,
                  [],
                  _false,
                ),
                done: true,
              };
              return obj;
            }
          }
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error1 = new Error("skus is required for Android purchase");
          throw error1;
        }
      } catch (tmp19) {
        c1 = 3;
        throw tmp19;
      }
    }
  });
  return android();
};
export const requestSubscription = (arg0) => {
  function android() {
    return closure_1(...arguments);
  }
  let closure_0 = arg0;
  let closure_1 = _asyncToGenerator(async function () {
    let _false;
    let buyItemByType;
    let isOfferPersonalized;
    let obfuscatedAccountIdAndroid;
    let obfuscatedProfileIdAndroid;
    let purchaseTokenAndroid;
    let replacementModeAndroid;
    let subscriptionOffers;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else if (_false(dependencyMap[3]).isAmazon) {
          if ("sku" in _false) {
            let str7 = "";
            const sku = _false.sku;
            if ("prorationModeAmazon" in _false) {
              const str8 = _false.prorationModeAmazon || "";
              str7 = str8;
            }
            c1 = 3;
            const obj4 = { value: closure_1_5.buyItemByType(sku, str7), done: true };
            return obj4;
          } else {
            const _Error2 = Error;
            const self3 = this;
            const self4 = this;
            const error = new Error("sku is required for Amazon subscriptions");
            throw error;
          }
        } else {
          if ("subscriptionOffers" in _false) {
            if (0 !== _false.subscriptionOffers.length) {
              ({ subscriptionOffers, purchaseTokenAndroid, replacementModeAndroid } = _false);
              if (undefined === replacementModeAndroid) {
                replacementModeAndroid = -1;
              }
              ({ obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, isOfferPersonalized } = _false);
              let mapped;
              buyItemByType = buyItemByType.buyItemByType;
              if (subscriptionOffers != null) {
                mapped = subscriptionOffers.map((sku) => sku.sku);
              }
              let mapped1;
              if (subscriptionOffers != null) {
                mapped1 = subscriptionOffers.map((offerToken) => offerToken.offerToken);
              }
              _false = isOfferPersonalized;
              if (isOfferPersonalized == null) {
                _false = false;
              }
              c1 = 3;
              const obj = {
                value: buyItemByType(
                  subs,
                  mapped,
                  purchaseTokenAndroid,
                  replacementModeAndroid,
                  obfuscatedAccountIdAndroid,
                  obfuscatedProfileIdAndroid,
                  mapped1,
                  _false,
                ),
                done: true,
              };
              return obj;
            }
          }
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error1 = new Error("subscriptionOffers are required for Google Play subscriptions");
          throw error1;
        }
      } catch (tmp24) {
        c1 = 3;
        throw tmp24;
      }
    }
  });
  return android();
};
export const finishTransaction = (arg0) => {
  let closure_3;
  function android() {
    return closure_3(...arguments);
  }
  ({ purchase: require, isConsumable: importAll, developerPayloadAndroid: dependencyMap } = arg0);
  _asyncToGenerator = undefined;
  _asyncToGenerator = _asyncToGenerator(async function () {
    let v3;
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          let rejectResult;
          let purchaseToken;
          if (require != null) {
            purchaseToken = require.purchaseToken;
          }
          if (purchaseToken) {
            let consumeProductResult;
            if (importAll) {
              const obj3 = v3(closure_1_2[3]);
              const androidModule = obj3.getAndroidModule();
              consumeProductResult = androidModule.consumeProduct(require.purchaseToken, dependencyMap);
            } else if (require.userIdAmazon) {
              const obj = v3(closure_1_2[3]);
              const androidModule1 = obj.getAndroidModule();
              consumeProductResult = androidModule1.acknowledgePurchase(require.purchaseToken, dependencyMap);
            } else {
              const _Error2 = Error;
              const self3 = this;
              const self4 = this;
              const reject2 = Promise.reject;
              const error = new Error("purchase is not suitable to be purchased");
              consumeProductResult = reject2(error);
            }
            rejectResult = consumeProductResult;
          } else {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error1 = new Error("purchase is not suitable to be purchased");
            rejectResult = reject(error1);
          }
          v3 = 3;
          const obj5 = { value: rejectResult, done: true };
          return obj5;
        }
      } catch (tmp21) {
        v3 = 3;
        throw tmp21;
      }
    }
  });
  return android();
};
export const deepLinkToSubscriptions = (isAmazonDevice) => {
  function android() {
    return closure_2(...arguments);
  }
  ({ sku: require, isAmazonDevice } = isAmazonDevice);
  if (isAmazonDevice === undefined) {
    isAmazonDevice = true;
  }
  let closure_2 = _asyncToGenerator(async function () {
    let v3;
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          if (v3(closure_1_2[3]).isAmazon) {
            const obj5 = { isAmazonDevice };
            const obj3 = isAmazonDevice(closure_1_2[5]);
            const result = obj3.deepLinkToSubscriptionsAmazon(obj5);
          } else if (require) {
            const obj6 = { sku: tmp3 };
            const obj = isAmazonDevice(closure_1_2[6]);
            const result1 = obj.deepLinkToSubscriptionsAndroid(obj6);
          } else {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("Sku is required to locate subscription in Android Store");
            reject(error);
          }
          v3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp13) {
        v3 = 3;
        throw tmp13;
      }
    }
  });
  return android();
};
export const getStorefront = () => {
  function android() {
    return closure_0(...arguments);
  }
  let closure_0 = _asyncToGenerator(async () => {
    let c1;
    let c2;
    let value;
    value = { countryCode: value, currency: null };
    await storefront.getStorefront();
    return value;
  });
  return android();
};
