// === Module 7707: NativeModules ===

// Module 7707 (NativeModules)
import _mod7709 from "module_7709" /* 7709 */;
import RNIapAmazonModuleAll from "RNIapAmazonModule" /* 7715 */;
import NativeModulesAll from "NativeModules" /* 7716 */;
import fetchJsonOrThrowAll from "fetchJsonOrThrow" /* 7717 */;
import syncAll from "sync" /* 7718 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

require = arg1;
({ NativeModules, Platform } = get_ActivityIndicator);
({ RNIapIos, RNIapIosSk2, RNIapModule: c4, RNIapAmazonModule: c5 } = NativeModules);
const subs = require("module_7708").ProductType.subs;
const inapp = require("module_7708").ProductType.inapp;
function addSubscriptionPlatform(arr) {
  closure_0 = arg1;
  return arr.map((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.platform = closure_0;
    return obj;
  });
}

export const IapAndroid = NativeModulesAll;
export const IapAmazon = RNIapAmazonModuleAll;
export const IapIos = fetchJsonOrThrowAll;
export const IapIosSk2 = syncAll;
export const isIosStorekit2 = require("module_7709").isIosStorekit2;
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
    _mod7709.storekit1Mode();
    const obj4 = _mod7709;
  } else if ("STOREKIT2_MODE" === str) {
    _mod7709.storekit2Mode();
    const obj3 = _mod7709;
  } else if ("STOREKIT_HYBRID_MODE" === str) {
    _mod7709.storekitHybridMode();
    const obj2 = _mod7709;
  }
};
export const initConnection = () => {
  const nativeModule = _mod7709.getNativeModule();
  return nativeModule.initConnection();
};
export const endConnection = () => {
  const nativeModule = _mod7709.getNativeModule();
  return nativeModule.endConnection();
};
export const flushFailedPurchasesCachedAsPendingAndroid = () => {
  const androidModule = _mod7709.getAndroidModule();
  return androidModule.flushFailedPurchasesCachedAsPending();
};
export const getProducts = (skus) => {
  skus = skus.skus;
  closure_1 = undefined;
  let length;
  if (skus != null) {
    length = skus.length;
  }
  if (length) {
    closure_1 = callback(function*() {
      closure_1 = tmp5;
      closure_0 = tmp2;
      const obj3 = closure_1_0(7709);
      const androidModule = obj3.getAndroidModule();
      yield androidModule.getItemsByType(closure_1_7, closure_1_0);
      closure_0 = arg1.map(closure_1_0(7714).singleProductAndroidMap);
      const obj = closure_1_0(7709);
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
  closure_1 = undefined;
  let length;
  if (skus != null) {
    length = skus.length;
  }
  if (length) {
    closure_1 = callback(function*() {
      let androidModuleType = tmp2;
      androidModuleType = closure_1_0(7709).getAndroidModuleType();
      const obj10 = closure_1_0(7709);
      const androidModule = closure_1_0(7709).getAndroidModule();
      closure_1 = yield androidModule.getItemsByType(closure_1_6, closure_1_0);
      if ("android" === closure_1_0) {
        return closure_1_8(closure_1, closure_1_0(7708).SubscriptionPlatform.android);
      }
      if ("amazon" !== tmp35) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        error = new Error("getSubscriptions received unknown platform " + closure_1_0 + ". Verify the logic in getAndroidModuleType");
        throw error;
      }
      const obj2 = closure_1_0(7709);
      dependencyMap = yield obj2.fillProductsWithAdditionalData(dependencyMap);
      return closure_1_8(dependencyMap, closure_1_0(7708).SubscriptionPlatform.amazon);
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
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ alsoPublishToEventListener, automaticallyFinishRestoredTransactions, onlyIncludeActiveItems } = obj);
  closure_0 = undefined;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            closure_1 = tmp5;
            closure_0 = tmp2;
            closure_0 = undefined;
            closure_1 = undefined;
            if (closure_1_5) {
              c2 = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj11.getAvailableItems();
              return obj1;
            } else {
              c2 = 2;
              c3 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = closure_1_4.getPurchaseHistoryByType(closure_1_7);
              return obj2;
            }
            obj11 = closure_1_5;
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
            obj6[0] = closure_1_4.getPurchaseHistoryByType(closure_1_6);
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
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ alsoPublishToEventListener, automaticallyFinishRestoredTransactions, onlyIncludeActiveItems } = obj);
  closure_0 = undefined;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            closure_1 = tmp5;
            closure_0 = tmp2;
            closure_0 = undefined;
            closure_1 = undefined;
            if (closure_1_5) {
              c2 = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj11.getAvailableItems();
              return obj1;
            } else {
              c2 = 2;
              c3 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = closure_1_4.getAvailableItemsByType(closure_1_7);
              return obj2;
            }
            obj11 = closure_1_5;
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
            obj6[0] = closure_1_4.getAvailableItemsByType(closure_1_6);
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
  closure_0 = arg0;
  closure_1 = callback(function*() {
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
        } else if (closure_1_0(closure_1_2[3]).isAmazon) {
          if ("sku" in tmp32) {
            c1 = 3;
            obj1 = { value: null, done: true };
            obj1[0] = closure_1_5.buyItemByType(tmp32.sku, "");
            return obj1;
          } else {
            const _Error2 = Error;
            error = new Error("sku is required for Amazon purchase");
            throw error;
          }
        } else {
          if ("skus" in tmp32) {
            if (tmp32.skus.length) {
              ({ skus, obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, isOfferPersonalized } = tmp32);
              c0 = isOfferPersonalized;
              if (isOfferPersonalized == null) {
                c0 = false;
              }
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = closure_1_4.buyItemByType(closure_1_7, skus, undefined, -1, obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, [], c0);
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
  closure_0 = arg0;
  closure_1 = callback(function*() {
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
        } else if (closure_1_0(closure_1_2[3]).isAmazon) {
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
            obj1 = { value: null, done: true };
            obj1[0] = closure_1_5.buyItemByType(tmp37.sku, str7);
            return obj1;
          } else {
            const _Error2 = Error;
            error = new Error("sku is required for Amazon subscriptions");
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
              c0 = isOfferPersonalized;
              if (isOfferPersonalized == null) {
                c0 = false;
              }
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = closure_1_4.buyItemByType(closure_1_6, mapped, purchaseTokenAndroid, replacementModeAndroid, obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, mapped1, c0);
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            error = new Error("purchase is not suitable to be purchased");
            Promise.reject(error);
            v0 = 3;
          }
          if (closure_1_1) {
            const androidModule = v0(closure_1_2[3]).getAndroidModule();
            purchaseToken = purchaseToken.purchaseToken;
            let consumeProductResult = androidModule.consumeProduct(purchaseToken, closure_1_2);
            const obj3 = v0(closure_1_2[3]);
          } else if (purchaseToken.userIdAmazon) {
            obj = v0(closure_1_2[3]);
            const androidModule1 = obj.getAndroidModule();
            consumeProductResult = androidModule1.acknowledgePurchase(purchaseToken.purchaseToken, closure_1_2);
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
    const apply = closure_3.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })();
};
export const deepLinkToSubscriptions = (arg0) => {
  ({ sku: require, isAmazonDevice } = arg0);
  if (isAmazonDevice === undefined) {
    isAmazonDevice = true;
  }
  closure_2 = undefined;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
          let result = closure_1_2;
          let tmp14;
          if (v0(closure_1_2[3]).isAmazon) {
            tmp14 = closure_1_1(result[5]);
            obj1 = { isAmazonDevice: null };
            obj1[0] = closure_1_1;
            result = tmp14.deepLinkToSubscriptionsAmazon(obj1);
            v0 = 3;
          } else {
            if (!v0) {
              const _Error = Error;
              error = new Error("Sku is required to locate subscription in Android Store");
              Promise.reject(error);
            }
            const tmp4 = v0;
          }
          obj = closure_1_1(result[6]);
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
  closure_0 = callback(function*() {
    closure_0 = {};
    closure_0.countryCode = yield closure_1_4.getStorefront();
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