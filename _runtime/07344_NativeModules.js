import RNIapAmazonModule from "RNIapAmazonModule";
import get_ActivityIndicator from "get ActivityIndicator";

let NativeModules;
let Platform;
let RNIapIos;
let RNIapIosSk2;
let c4;
let c5;
const require = arg1;
({ NativeModules, Platform } = get_ActivityIndicator);
({ RNIapIos, RNIapIosSk2, RNIapModule: c4, RNIapAmazonModule: c5 } = NativeModules);
const subs = require("module_7345").ProductType.subs;
const inapp = require("module_7345").ProductType.inapp;
function addSubscriptionPlatform(arr) {
  let closure_0 = arg1;
  return arr.map((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.platform = closure_0;
    return obj;
  });
}

export const IapAndroid = require("NativeModules");
export const IapAmazon = require("RNIapAmazonModule");
export const IapIos = require("fetchJsonOrThrow");
export const IapIosSk2 = require("sync");
export const isIosStorekit2 = require("module_7346").isIosStorekit2;
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
    require(7346).storekit1Mode();
    const obj4 = require(7346);
  } else if ("STOREKIT2_MODE" === str) {
    require(7346).storekit2Mode();
    const obj3 = require(7346);
  } else if ("STOREKIT_HYBRID_MODE" === str) {
    require(7346).storekitHybridMode();
    const obj2 = require(7346);
  }
};
export const initConnection = () => {
  const nativeModule = require(7346).getNativeModule();
  return nativeModule.initConnection();
};
export const endConnection = () => {
  const nativeModule = require(7346).getNativeModule();
  return nativeModule.endConnection();
};
export const flushFailedPurchasesCachedAsPendingAndroid = () => {
  const androidModule = require(7346).getAndroidModule();
  return androidModule.flushFailedPurchasesCachedAsPending();
};
export const getProducts = (skus) => {
  skus = skus.skus;
  let closure_1;
  let length;
  if (skus != null) {
    length = skus.length;
  }
  if (length) {
    closure_1 = callback(function*() {
      let closure_1 = tmp5;
      let closure_0 = tmp2;
      const obj3 = outer1_0(7346);
      const androidModule = obj3.getAndroidModule();
      yield androidModule.getItemsByType(outer1_7, outer1_0);
      closure_0 = arg1.map(outer1_0(7351).singleProductAndroidMap);
      const obj = outer1_0(7346);
      return obj.fillProductsWithAdditionalData(closure_0);
    });
    let rejectResult = (function android() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  } else {
    rejectResult = Promise.reject("\"skus\" is required");
  }
  return rejectResult;
};
export const getSubscriptions = (skus) => {
  skus = skus.skus;
  let closure_1;
  let length;
  if (skus != null) {
    length = skus.length;
  }
  if (length) {
    closure_1 = callback(function*() {
      let androidModuleType = tmp2;
      androidModuleType = outer1_0(7346).getAndroidModuleType();
      const obj10 = outer1_0(7346);
      const androidModule = outer1_0(7346).getAndroidModule();
      const outer1_1 = yield androidModule.getItemsByType(outer1_6, outer1_0);
      if ("android" === outer1_0) {
        return outer1_8(outer1_1, outer1_0(7345).SubscriptionPlatform.android);
      }
      if ("amazon" !== tmp35) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("getSubscriptions received unknown platform " + outer1_0 + ". Verify the logic in getAndroidModuleType");
        throw error;
      }
      const dependencyMap = outer1_1;
      const obj2 = outer1_0(7346);
      let closure_2 = yield obj2.fillProductsWithAdditionalData(dependencyMap);
      return outer1_8(closure_2, outer1_0(7345).SubscriptionPlatform.amazon);
    });
    let rejectResult = (function android() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  } else {
    rejectResult = Promise.reject("\"skus\" is required");
  }
  return rejectResult;
};
export const getPurchaseHistory = () => {
  let alsoPublishToEventListener;
  let automaticallyFinishRestoredTransactions;
  let onlyIncludeActiveItems;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ alsoPublishToEventListener, automaticallyFinishRestoredTransactions, onlyIncludeActiveItems } = obj);
  let closure_0;
  closure_0 = callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp5;
            let closure_0 = tmp2;
            closure_0 = undefined;
            closure_1 = undefined;
            if (outer1_5) {
              c2 = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = obj11.getAvailableItems();
              return obj1;
            } else {
              c2 = 2;
              c3 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = outer1_4.getPurchaseHistoryByType(outer1_7);
              return obj2;
            }
            obj11 = outer1_5;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            c3 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            closure_0 = arg1;
            c2 = 3;
            c3 = 1;
            const obj6 = { value: null, done: false };
            obj6[0] = outer1_4.getPurchaseHistoryByType(outer1_6);
            return obj6;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj7 = { value: null, done: true };
          obj7[0] = arg1;
          return obj7;
        } else {
          closure_1 = arg1;
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = closure_0.concat(closure_1);
          return obj;
        }
      } catch (tmp15) {
        c3 = tmp;
        throw tmp15;
      }
    }
  });
  return (function android() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })();
};
export const getAvailablePurchases = () => {
  let alsoPublishToEventListener;
  let automaticallyFinishRestoredTransactions;
  let onlyIncludeActiveItems;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ alsoPublishToEventListener, automaticallyFinishRestoredTransactions, onlyIncludeActiveItems } = obj);
  let closure_0;
  closure_0 = callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp5;
            let closure_0 = tmp2;
            closure_0 = undefined;
            closure_1 = undefined;
            if (outer1_5) {
              c2 = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = obj11.getAvailableItems();
              return obj1;
            } else {
              c2 = 2;
              c3 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = outer1_4.getAvailableItemsByType(outer1_7);
              return obj2;
            }
            obj11 = outer1_5;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            c3 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            closure_0 = arg1;
            c2 = 3;
            c3 = 1;
            const obj6 = { value: null, done: false };
            obj6[0] = outer1_4.getAvailableItemsByType(outer1_6);
            return obj6;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj7 = { value: null, done: true };
          obj7[0] = arg1;
          return obj7;
        } else {
          closure_1 = arg1;
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = closure_0.concat(closure_1);
          return obj;
        }
      } catch (tmp15) {
        c3 = tmp;
        throw tmp15;
      }
    }
  });
  return (function android() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })();
};
export const requestPurchase = (arg0) => {
  let closure_0 = arg0;
  let closure_1 = callback(function*() {
    let isOfferPersonalized;
    let obfuscatedAccountIdAndroid;
    let obfuscatedProfileIdAndroid;
    let skus;
    if (c1 === 2) {
      c1 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        c1 = 2;
        if (arg0 === 1) {
          c1 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else if (outer1_0(outer1_2[3]).isAmazon) {
          if ("sku" in tmp32) {
            c1 = 3;
            const obj1 = { value: null, done: true };
            obj1[0] = outer1_5.buyItemByType(tmp32.sku, "");
            return obj1;
          } else {
            const _Error2 = Error;
            const error = new Error("sku is required for Amazon purchase");
            throw error;
          }
        } else {
          if ("skus" in tmp32) {
            if (tmp32.skus.length) {
              ({ skus, obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, isOfferPersonalized } = tmp32);
              let c0 = isOfferPersonalized;
              if (isOfferPersonalized == null) {
                c0 = false;
              }
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = outer1_4.buyItemByType(outer1_7, skus, undefined, -1, obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, [], c0);
              return obj;
            }
          }
          const _Error = Error;
          const error1 = new Error("skus is required for Android purchase");
          throw error1;
        }
      } catch (tmp24) {
        c1 = tmp;
        throw tmp24;
      }
    }
  });
  return (function android() {
    const self = this;
    const apply = closure_1.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })();
};
export const requestSubscription = (arg0) => {
  let closure_0 = arg0;
  let closure_1 = callback(function*() {
    let isOfferPersonalized;
    let obfuscatedAccountIdAndroid;
    let obfuscatedProfileIdAndroid;
    let purchaseTokenAndroid;
    let replacementModeAndroid;
    let subscriptionOffers;
    if (c1 === 2) {
      c1 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        c1 = 2;
        if (arg0 === 1) {
          c1 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else if (outer1_0(outer1_2[3]).isAmazon) {
          if ("sku" in tmp37) {
            let str7 = "";
            if ("prorationModeAmazon" in tmp37) {
              let str8 = tmp37.prorationModeAmazon;
              if (!str8) {
                str8 = "";
              }
              str7 = str8;
            }
            c1 = 3;
            const obj1 = { value: null, done: true };
            obj1[0] = outer1_5.buyItemByType(tmp37.sku, str7);
            return obj1;
          } else {
            const _Error2 = Error;
            const error = new Error("sku is required for Amazon subscriptions");
            throw error;
          }
        } else {
          if ("subscriptionOffers" in tmp37) {
            if (0 !== tmp37.subscriptionOffers.length) {
              ({ subscriptionOffers, purchaseTokenAndroid, replacementModeAndroid } = tmp37);
              if (undefined === replacementModeAndroid) {
                replacementModeAndroid = -1;
              }
              ({ obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, isOfferPersonalized } = tmp37);
              let mapped;
              if (subscriptionOffers != null) {
                mapped = subscriptionOffers.map((sku) => sku.sku);
              }
              let mapped1;
              if (subscriptionOffers != null) {
                mapped1 = subscriptionOffers.map((offerToken) => offerToken.offerToken);
              }
              let c0 = isOfferPersonalized;
              if (isOfferPersonalized == null) {
                c0 = false;
              }
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = outer1_4.buyItemByType(outer1_6, mapped, purchaseTokenAndroid, replacementModeAndroid, obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, mapped1, c0);
              return obj;
            }
          }
          const _Error = Error;
          const error1 = new Error("subscriptionOffers are required for Google Play subscriptions");
          throw error1;
        }
      } catch (tmp29) {
        c1 = tmp;
        throw tmp29;
      }
    }
  });
  return (function android() {
    const self = this;
    const apply = closure_1.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })();
};
export const finishTransaction = (arg0) => {
  let dependencyMap;
  let importAll;
  let require;
  ({ purchase: require, isConsumable: importAll, developerPayloadAndroid: dependencyMap } = arg0);
  let callback;
  callback = callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        v0 = 2;
        if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          let purchaseToken = v0;
          purchaseToken = undefined;
          if (v0 != null) {
            purchaseToken = purchaseToken.purchaseToken;
          }
          if (!purchaseToken) {
            const _Error = Error;
            const error = new Error("purchase is not suitable to be purchased");
            Promise.reject(error);
            v0 = 3;
          }
          if (outer1_1) {
            const androidModule = v0(outer1_2[3]).getAndroidModule();
            purchaseToken = purchaseToken.purchaseToken;
            let consumeProductResult = androidModule.consumeProduct(purchaseToken, outer1_2);
            const obj3 = v0(outer1_2[3]);
          } else if (purchaseToken.userIdAmazon) {
            obj = v0(outer1_2[3]);
            const androidModule1 = obj.getAndroidModule();
            consumeProductResult = androidModule1.acknowledgePurchase(purchaseToken.purchaseToken, outer1_2);
          } else {
            const _Error2 = Error;
            const error1 = new Error("purchase is not suitable to be purchased");
            consumeProductResult = Promise.reject(error1);
          }
        }
      } catch (tmp27) {
        v0 = tmp;
        throw tmp27;
      }
    }
  });
  return (function android() {
    const self = this;
    const apply = RNIapAmazonModule.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })();
};
export const deepLinkToSubscriptions = (arg0) => {
  let isAmazonDevice;
  let require;
  ({ sku: require, isAmazonDevice } = arg0);
  if (isAmazonDevice === undefined) {
    isAmazonDevice = true;
  }
  let closure_2;
  closure_2 = callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        v0 = 2;
        if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          let result = outer1_2;
          let tmp14;
          if (v0(outer1_2[3]).isAmazon) {
            tmp14 = outer1_1(result[5]);
            const obj1 = { isAmazonDevice: null };
            obj1[0] = outer1_1;
            result = tmp14.deepLinkToSubscriptionsAmazon(obj1);
            v0 = 3;
          } else {
            if (!v0) {
              const _Error = Error;
              const error = new Error("Sku is required to locate subscription in Android Store");
              Promise.reject(error);
            }
            const tmp4 = v0;
          }
          obj = outer1_1(result[6]);
          const obj2 = { sku: null };
          obj2[0] = tmp4;
          const result1 = obj.deepLinkToSubscriptionsAndroid(obj2);
        }
      } catch (tmp17) {
        v0 = tmp;
        throw tmp17;
      }
    }
  });
  return (function android() {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })();
};
export const getStorefront = () => {
  let closure_0 = callback(function*() {
    let closure_0 = {};
    closure_0.countryCode = yield outer1_4.getStorefront();
    closure_0.currency = null;
    return closure_0;
  });
  return (function android() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })();
};