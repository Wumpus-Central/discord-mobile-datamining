// === Module 11210: ? ===

// Module 11210
import _mod11212 from "module_11212" /* 11212 */;
import RNIapAmazonModuleAll from "RNIapAmazonModule" /* 11218 */;
import _modAll11219 from "module_11219" /* 11219 */;
import _modAll11220 from "module_11220" /* 11220 */;
import syncAll from "sync" /* 11221 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
get_ActivityIndicator = fn(17);
({ NativeModules, Platform } = get_ActivityIndicator);
({ RNIapIos, RNIapIosSk2, RNIapModule: closure_4, RNIapAmazonModule: hasOwnProperty } = NativeModules);
const subs = fn(11211).ProductType.subs;
const inapp = fn(11211).ProductType.inapp;
function addSubscriptionPlatform(arr, platform) {
  return arr.map((item) => {
    const obj = {};
    const merged = Object.assign(item);
    obj.platform = platform;
    return obj;
  });
}

export const IapAndroid = _modAll11219;
export const IapAmazon = RNIapAmazonModuleAll;
export const IapIos = _modAll11220;
export const IapIosSk2 = syncAll;
export const isIosStorekit2 = fn(11212).isIosStorekit2;
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
    _mod11212.storekit1Mode();
  } else if ("STOREKIT2_MODE" === str) {
    _mod11212.storekit2Mode();
  } else if ("STOREKIT_HYBRID_MODE" === str) {
    _mod11212.storekitHybridMode();
  }
};
export const initConnection = () => {
  const nativeModule = _mod11212.getNativeModule();
  return nativeModule.initConnection();
};
export const endConnection = () => {
  const nativeModule = _mod11212.getNativeModule();
  return nativeModule.endConnection();
};
export const flushFailedPurchasesCachedAsPendingAndroid = () => {
  const androidModule = _mod11212.getAndroidModule();
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
    closure_1 = asyncGeneratorStep(async () => {
      closure_1 = tmp5;
      const androidModule = tmp2(11212).getAndroidModule();
      await androidModule.getItemsByType(closure_1_7, skus);
      closure_128_0 = value.map(tmp2(11217).singleProductAndroidMap);
      return tmp2(11212).fillProductsWithAdditionalData(closure_128_0);
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
    closure_1 = asyncGeneratorStep(async () => {
      const androidModuleType = tmp2(11212).getAndroidModuleType();
      const androidModule = tmp2(11212).getAndroidModule();
      await androidModule.getItemsByType(closure_1_6, skus);
      closure_128_1 = value;
      if ("android" === androidModuleType) {
        return addSubscriptionPlatform(closure_128_1, tmp2(11211).SubscriptionPlatform.android);
      }
      if ("amazon" !== tmp34) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("getSubscriptions received unknown platform " + androidModuleType + ". Verify the logic in getAndroidModuleType");
        throw error;
      }
      closure_128_2 = closure_128_1;
      await tmp2(11212).fillProductsWithAdditionalData(closure_128_2);
      closure_128_2 = value;
      return addSubscriptionPlatform(closure_128_2, tmp2(11211).SubscriptionPlatform.amazon);
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
  closure_0 = asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
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
            closure_1 = tmp5;
            closure_0 = tmp2;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
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
        } else if (1 === tmp5) {
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
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_128_0 = value;
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
          closure_128_1 = value;
          c3 = 3;
          const obj = { value: closure_128_0.concat(closure_128_1), done: true };
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
export const getAvailablePurchases = (arg0) => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ alsoPublishToEventListener, automaticallyFinishRestoredTransactions, onlyIncludeActiveItems } = obj);
  closure_0 = asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
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
            closure_1 = tmp5;
            closure_0 = tmp2;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
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
        } else if (1 === tmp5) {
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
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_128_0 = value;
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
          closure_128_1 = value;
          c3 = 3;
          const obj = { value: closure_128_0.concat(closure_128_1), done: true };
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
  closure_1 = asyncGeneratorStep(async () => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
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
        } else if (c0(dependencyMap[3]).isAmazon) {
          if ("sku" in closure_0) {
            c1 = 3;
            const obj4 = { value: closure_1_5.buyItemByType(closure_0.sku, ""), done: true };
            return obj4;
          } else {
            const _Error2 = Error;
            const error = new Error("sku is required for Amazon purchase");
            throw error;
          }
        } else {
          if ("skus" in closure_0) {
            if (closure_0.skus.length) {
              ({ skus, obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, isOfferPersonalized } = closure_0);
              c0 = isOfferPersonalized;
              if (isOfferPersonalized == null) {
                c0 = false;
              }
              c1 = 3;
              const obj = { value: closure_1_4.buyItemByType(inapp, skus, undefined, -1, obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, [], c0), done: true };
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
  closure_1 = asyncGeneratorStep(async () => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
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
        } else if (c0(dependencyMap[3]).isAmazon) {
          if ("sku" in closure_0) {
            let str7 = "";
            if ("prorationModeAmazon" in closure_0) {
              let str8 = closure_0.prorationModeAmazon;
              if (!str8) {
                str8 = "";
              }
              str7 = str8;
            }
            c1 = 3;
            const obj4 = { value: closure_1_5.buyItemByType(closure_0.sku, str7), done: true };
            return obj4;
          } else {
            const _Error2 = Error;
            const error = new Error("sku is required for Amazon subscriptions");
            throw error;
          }
        } else {
          if ("subscriptionOffers" in closure_0) {
            if (0 !== closure_0.subscriptionOffers.length) {
              ({ subscriptionOffers, purchaseTokenAndroid, replacementModeAndroid } = closure_0);
              if (undefined === replacementModeAndroid) {
                replacementModeAndroid = -1;
              }
              ({ obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, isOfferPersonalized } = closure_0);
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
              const obj = { value: closure_1_4.buyItemByType(subs, mapped, purchaseTokenAndroid, replacementModeAndroid, obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, mapped1, c0), done: true };
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
  asyncGeneratorStep = undefined;
  asyncGeneratorStep = asyncGeneratorStep(async () => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
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
          let purchaseToken = require;
          let purchaseToken1;
          if (require != null) {
            purchaseToken1 = purchaseToken.purchaseToken;
          }
          if (!purchaseToken1) {
            const _Error = Error;
            const error = new Error("purchase is not suitable to be purchased");
            Promise.reject(error);
            v3 = 3;
          }
          if (importAll) {
            const androidModule = v3(11212).getAndroidModule();
            purchaseToken = purchaseToken.purchaseToken;
            let consumeProductResult = androidModule.consumeProduct(purchaseToken, dependencyMap);
            const obj3 = v3(11212);
          } else if (purchaseToken.userIdAmazon) {
            const androidModule1 = v3(11212).getAndroidModule();
            consumeProductResult = androidModule1.acknowledgePurchase(purchaseToken.purchaseToken, dependencyMap);
            const obj = v3(11212);
          } else {
            const _Error2 = Error;
            const error1 = new Error("purchase is not suitable to be purchased");
            consumeProductResult = Promise.reject(error1);
          }
        }
      } catch (tmp27) {
        v3 = tmp;
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
export const deepLinkToSubscriptions = (isAmazonDevice2) => {
  ({ sku: require, isAmazonDevice } = isAmazonDevice2);
  if (isAmazonDevice === undefined) {
    isAmazonDevice = true;
  }
  closure_2 = asyncGeneratorStep(async () => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          let result = closure_1_2;
          let tmp14;
          if (v3(closure_1_2[3]).isAmazon) {
            tmp14 = isAmazonDevice(result[5]);
            const obj4 = { isAmazonDevice };
            result = tmp14.deepLinkToSubscriptionsAmazon(obj4);
            v3 = 3;
          } else if (!require) {
            const _Error = Error;
            const error = new Error("Sku is required to locate subscription in Android Store");
            Promise.reject(error);
          }
          const obj5 = { sku: require };
          const result1 = isAmazonDevice(result[6]).deepLinkToSubscriptionsAndroid(obj5);
          const obj = isAmazonDevice(result[6]);
        }
      } catch (tmp17) {
        v3 = tmp;
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
  closure_0 = asyncGeneratorStep(async () => {
    value = {};
    await storefront.getStorefront();
    value.countryCode = value;
    value.currency = null;
    return value;
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