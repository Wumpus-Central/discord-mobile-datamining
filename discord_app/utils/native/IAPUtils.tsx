// === Module 13816: IAPUtils ===

// Module 13816 (IAPUtils)
import LoggerDefault from "Logger" /* 3 */;
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import v1 from "v1" /* 1281 */;
import ClientInfoUtilsAll from "ClientInfoUtils" /* 1383 */;
import PlatformUtils2 from "PlatformUtils" /* 1384 */;
import DeviceUtils from "DeviceUtils" /* 4923 */;
import ProductIds from "ProductIds" /* 7496 */;
import StorekitIAPQueueDefault from "StorekitIAPQueue" /* 13837 */;
import GeneratedPaymentCurrencies from "GeneratedPaymentCurrencies" /* 13838 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import DevSettingsStore from "DevSettingsStore" /* 5219 */;
import UserStore from "UserStore" /* 1392 */;
import IAPStore from "IAPStore" /* 7501 */;

const require = globalThis.__r;

require = fn;
function serializePurchaseResponse(originalTransactionDate) {
  _modDef38(null != originalTransactionDate.transactionId, "should have transactionId");
  const obj = { originalTransactionDate: originalTransactionDate.originalTransactionDateIOS, originalTransactionIdentifier: null, transactionDate: null, transactionIdentifier: null, productIdentifier: null, transactionReceipt: null, jwsRepresentation: null };
  let parsed;
  if (null != originalTransactionDate.originalTransactionIdentifierIOS) {
    const _parseInt = parseInt;
    parsed = parseInt(originalTransactionDate.originalTransactionIdentifierIOS);
  }
  obj.originalTransactionIdentifier = parsed;
  obj.transactionDate = originalTransactionDate.transactionDate;
  obj.transactionIdentifier = parseInt(originalTransactionDate.transactionId);
  ({ productId: obj.productIdentifier, transactionReceipt: obj.transactionReceipt, verificationResultIOS: obj.jwsRepresentation } = originalTransactionDate);
  return obj;
}
function convertToUUID(id) {
  return v1.v5(id, NAMESPACE_SNOWFLAKE_UUID);
}
let closure_16 = async function _makeIAPRequest() {
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            closure_131_0 = undefined;
            currentUser = currentUser.getCurrentUser();
            if (null == currentUser) {
              const _Error2 = Error;
              const error = new Error("purchaseProduct: no valid user");
              throw error;
            } else {
              c6 = 1;
              const obj6 = { requestJSONString, sku, appAccountToken: convertToUUID(currentUser.id), andDangerouslyFinishTransactionAutomaticallyIOS: false, useACOM };
              c7 = 2;
              c8 = 1;
              const obj7 = { value: require("module_13818").requestPurchase(obj6), done: false };
              return obj7;
            }
          }
        } else if (1 === tmp7) {
          c6 = 0;
          closure_131_1 = closure_5;
          if (!closure_132_13.has(closure_131_1.code)) {
            const result = closure_132_0(closure_132_3[17]).captureBillingException(closure_131_1);
            const obj3 = closure_132_0(closure_132_3[17]);
          }
          throw closure_131_1;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_131_0 = value;
          const _Object = Object;
          if (closure_131_0 instanceof Object) {
            const obj = { purchaseResponse: closure_132_14(closure_131_0), originalPurchase: null };
            const _Array = Array;
            if (Array.isArray(closure_131_0)) {
              let first = tmp18[0];
            } else {
              first = tmp18;
            }
            obj.originalPurchase = first;
            c6 = 0;
            c8 = 3;
          } else {
            const _Error = Error;
            const error1 = new Error("Unable to select a platform, no request was made");
            throw error1;
          }
        }
      } catch (tmp41) {
        closure_5 = tmp41;
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp41;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
};
let closure_17 = async function _purchaseProduct(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          closure_131_2 = closure_2;
          closure_131_3 = undefined;
          if (null == currentUser.getCurrentUser()) {
            const _Error2 = Error;
            const error = new Error("purchaseProduct: no valid user");
            throw error;
          } else {
            c5 = 1;
            c6 = 1;
            const obj5 = { value: require("module_13818").clearTransactionIOS(), done: false };
            return obj5;
          }
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          const obj8 = { sku: closure_131_0, appAccountToken: closure_131_2, withOffer: closure_131_1 };
          c5 = 2;
          c6 = 1;
          const obj9 = { value: closure_132_0(closure_132_3[10]).requestPurchase(obj8), done: false };
          return obj9;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj10 = { value, done: true };
        return obj10;
      } else {
        closure_131_3 = value;
        const _Object = Object;
        if (closure_131_3 instanceof Object) {
          c6 = 3;
          const obj = { value: closure_132_14(closure_131_3), done: true };
          return obj;
        } else {
          const _Error = Error;
          const error1 = new Error("Unable to select a platform, no request was made");
          throw error1;
        }
      }
    } catch (tmp31) {
      c6 = tmp;
      throw tmp31;
    }
  }
};
let closure_18 = async function _restorePurchases(arg0) {
  let fullRestore = arg0;
  c7 = 0;
  c8 = 0;
  let iter = (async (arg0) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp2;
            closure_4 = tmp5;
            let fullRestore2;
            fullRestore2 = fullRestore.fullRestore;
            closure_132_1 = undefined;
            closure_132_2 = undefined;
            closure_132_3 = undefined;
            c7 = 1;
            c8 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (closure_131_19()) {
            if (fullRestore2) {
              c7 = 2;
              c8 = 1;
              const obj6 = { value: closure_131_11.sync(), done: false };
              return obj6;
            } else {
              c7 = 3;
              c8 = 1;
              const obj7 = { value: closure_131_11.getPendingTransactions(), done: false };
              return obj7;
            }
          } else {
            c8 = 3;
            const obj8 = { value: [], done: true };
            return obj8;
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            arr2 = closure_131_1(closure_131_3[15]);
            c7 = 4;
            c8 = 1;
            const obj11 = { value: closure_131_0(closure_131_3[10]).getAvailablePurchases({ onlyIncludeActiveItems: false }), done: false };
            return obj11;
          }
        } else if (3 === tmp5) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            closure_132_2 = value;
            closure_132_3 = closure_131_1(closure_131_3[15]).map(closure_132_2, (id) => id.id);
            arr4 = closure_131_1(closure_131_3[15]);
            filter = arr4.filter;
            const arr3 = closure_131_1(closure_131_3[15]);
            c7 = 5;
            c8 = 1;
            const obj13 = { value: closure_131_0(closure_131_3[10]).getAvailablePurchases({ onlyIncludeActiveItems: false }), done: false };
            return obj13;
          }
        } else {
          if (4 === tmp5) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj14 = { value, done: true };
              return obj14;
            } else {
              closure_132_1 = map(value, (originalPurchase) => {
                const obj = { originalPurchase, purchaseResponse: null };
                filter(closure_1_3[12])(null != originalPurchase.transactionId, "should have transactionId");
                const obj3 = { originalTransactionDate: originalPurchase.originalTransactionDateIOS, originalTransactionIdentifier: null, transactionDate: null, transactionIdentifier: null, productIdentifier: null, transactionReceipt: null, jwsRepresentation: null };
                let parsed;
                if (null != originalPurchase.originalTransactionIdentifierIOS) {
                  const _parseInt = parseInt;
                  parsed = parseInt(originalPurchase.originalTransactionIdentifierIOS);
                }
                obj3.originalTransactionIdentifier = parsed;
                obj3.transactionDate = originalPurchase.transactionDate;
                obj3.transactionIdentifier = parseInt(originalPurchase.transactionId);
                ({ productId: obj2.productIdentifier, transactionReceipt: obj2.transactionReceipt, verificationResultIOS: obj2.jwsRepresentation } = originalPurchase);
                obj.purchaseResponse = obj3;
                return obj;
              });
              c8 = 3;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_132_1 = filter(value, (transactionId) => {
              let hasItem = null != transactionId.transactionId;
              if (hasItem) {
                const _parseInt = parseInt;
                hasItem = closure_1_3.includes(parseInt(transactionId.transactionId));
              }
              return hasItem;
            }).map((originalPurchase) => {
              const obj = { originalPurchase, purchaseResponse: null };
              filter(closure_1_3[12])(null != originalPurchase.transactionId, "should have transactionId");
              const obj3 = { originalTransactionDate: originalPurchase.originalTransactionDateIOS, originalTransactionIdentifier: null, transactionDate: null, transactionIdentifier: null, productIdentifier: null, transactionReceipt: null, jwsRepresentation: null };
              let parsed;
              if (null != originalPurchase.originalTransactionIdentifierIOS) {
                const _parseInt = parseInt;
                parsed = parseInt(originalPurchase.originalTransactionIdentifierIOS);
              }
              obj3.originalTransactionIdentifier = parsed;
              obj3.transactionDate = originalPurchase.transactionDate;
              obj3.transactionIdentifier = parseInt(originalPurchase.transactionId);
              ({ productId: obj2.productIdentifier, transactionReceipt: obj2.transactionReceipt, verificationResultIOS: obj2.jwsRepresentation } = originalPurchase);
              obj.purchaseResponse = obj3;
              return obj;
            });
            const arr = filter(value, (transactionId) => {
              let hasItem = null != transactionId.transactionId;
              if (hasItem) {
                const _parseInt = parseInt;
                hasItem = closure_1_3.includes(parseInt(transactionId.transactionId));
              }
              return hasItem;
            });
          }
          c8 = 3;
          let obj = { value, done: true };
          return obj;
        }
      } catch (tmp23) {
        c8 = tmp;
        throw tmp23;
      }
    }
  })();
  iter.next();
  return iter;
};
function isStorekit2Available() {
  let isIOSResult = PlatformUtils2.isIOS();
  if (isIOSResult) {
    let isAvailableResult;
    if (RNIapIosSk2 != null) {
      isAvailableResult = RNIapIosSk2.isAvailable();
    }
    isIOSResult = 1 === isAvailableResult;
  }
  return isIOSResult;
}
function remapStorefront(countryCode) {
  const country = convertToAlpha2(countryCode.countryCode);
  if (null == countryCode.currency) {
    if (null == GeneratedPaymentCurrencies.GeneratedPaymentCurrenciesSets.APPLE_STORE_COUNTRY_CURRENCIES[country]) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Unable to get currency from countryCode " + countryCode.countryCode);
      throw error;
    }
  } else {
    const currency = closure_1_8[str.toUpperCase(str)];
  }
  return { currency, country };
}
let closure_21 = async function _fetchStoreFront() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj4 = { value, done: true };
      return obj4;
    } else {
      return { value: "IconComponent", done: null };
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
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          closure_128_0 = undefined;
          if (isStorekit2Available()) {
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj6 = { value: require("module_13818").getStorefront(), done: false };
            return obj6;
          } else {
            c5 = 3;
            return { value: null, done: true };
          }
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_1 = closure_2;
        const result = closure_129_0(closure_129_3[17]).captureBillingException(closure_128_1);
        c5 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_128_0 = value;
        if (null != closure_128_0) {
          closure_129_20(closure_128_0);
        }
        c3 = 0;
        c5 = 3;
      }
    } catch (tmp28) {
      closure_2 = tmp28;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp28;
      } else {
        c4 = tmp;
      }
    }
  }
};
const convertToAlpha2 = fn(5628).convertToAlpha2;
const Constants = fn(1087);
({ CurrencyCodes: closure_8, IOS_BUNDLE_ID } = Constants);
const NAMESPACE_SNOWFLAKE_UUID = fn(1394).NAMESPACE_SNOWFLAKE_UUID;
const RNIapIosSk2 = fn(17).NativeModules.RNIapIosSk2;
let PlatformUtils = fn(1384);
let _default = null;
if (PlatformUtils.isIOS()) {
  _default = fn(13817).default;
}
let items = [fn(13818).ErrorCode.E_USER_CANCELLED, Constants.StoreKitErrors.PAYMENT_CANCELED, fn(13818).ErrorCode.E_UNKNOWN];
let set = new Set(items);
new LoggerDefault("IAPUtils.tsx");
const ReactCompilerGating = fn(558);
let obj = {
  loadProducts() {
    if (obj.isIOS()) {
      const _Object = Object;
      let items = [StorekitIAPQueueDefault.fetchSubscriptions(Object.values(ProductIds.ProductIds)), ];
      const _Object2 = Object;
      items[1] = StorekitIAPQueueDefault.fetchProducts(Object.values(ProductIds.ProductIds));
      let nextPromise = _Promise.all(items).then((result) => {
        [r10007, tmp] = result;
        set = new Set();
        const items = [...tmp];
        return _modDef12.filter(items, (identifier) => {
          const hasItem = set.has(identifier.identifier);
          let flag = !hasItem;
          if (!hasItem) {
            set.add(identifier.identifier);
            flag = true;
          }
          return flag;
        });
      });
      const allResult = _Promise.all(items);
    } else {
      nextPromise = _Promise.resolve([]);
    }
    return nextPromise;
  },
  purchaseProduct() {
    const self = this;
    const apply = closure_17.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  canMakePayments() {
    return new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      _modDef38(null != _default, "StoreKit payments are only available on iOS");
      _default.canMakePayments((arg0) => {
        if (!arg0) {
          const _Error = Error;
          const error = new Error();
          closure_1(error);
        }
        closure_0(arg0);
      });
    });
  },
  restorePurchases() {
    const self = this;
    const apply = closure_18.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  fetchStoreFront() {
    const self = this;
    const apply = closure_21.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
};
PlatformUtils = fn(1384);
PlatformUtils = PlatformUtils.isIOS();
if (PlatformUtils) {
  let isIOSResult1 = fn(1384).isIOS();
  if (isIOSResult1) {
    let Identifier = ClientInfoUtilsAll.getConstants().Identifier;
    let _HermesInternal = HermesInternal;
    let isRunningOnSimulator = Identifier.startsWith("" + IOS_BUNDLE_ID + ".local");
    if (!isRunningOnSimulator) {
      isRunningOnSimulator = fn(4923).getIsRunningOnSimulator();
      let obj8 = fn(4923);
    }
    isIOSResult1 = isRunningOnSimulator;
    const importAllResult = ClientInfoUtilsAll;
  }
  let value = isIOSResult1;
  if (!value) {
    value = DevSettingsStore.get("force_mock_iap");
  }
  PlatformUtils = value;
  let obj6 = fn(1384);
}
if (PlatformUtils) {
  obj = fn(13839).default;
}
function shouldMockIAPForceEnable() {
  let isIOSResult = PlatformUtils2.isIOS();
  if (isIOSResult) {
    const Identifier = ClientInfoUtilsAll.getConstants().Identifier;
    const _HermesInternal = HermesInternal;
    let isRunningOnSimulator = Identifier.startsWith("" + IOS_BUNDLE_ID + ".local");
    if (!isRunningOnSimulator) {
      isRunningOnSimulator = DeviceUtils.getIsRunningOnSimulator();
      const tmpResult = DeviceUtils;
    }
    isIOSResult = isRunningOnSimulator;
  }
  return isIOSResult;
}
const size = fn(2);
let result = size.fileFinishedImporting("utils/native/IAPUtils.tsx");

export default obj;
export { convertToUUID };
export const makeIAPRequest = function makeIAPRequest() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const useCanPurchaseIAP = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanPurchaseIAP(arg0) {
  _require = arg0;
  const cResult = require("c").c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      currentUser = currentUser.getCurrentUser();
      let flag;
      if (currentUser != null) {
        flag = currentUser.verified;
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [IAPStore];
    cResult[3] = items2;
    let tmp9 = items2;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === arg0) {
    if (cResult[5] === stateFromStores) {
      let tmp11 = cResult[6];
    }
    return !tmp(504).useStateFromStores(tmp9, tmp11);
  }
  const fn2 = function f() {
    const isReadyResult = IAPStore.isReady();
    let tmp2 = !isReadyResult;
    if (isReadyResult) {
      let isBusyResult = IAPStore.isBusy();
      if (isBusyResult) {
        isBusyResult = null == closure_0 || !IAPStore.isPurchasingProduct(tmp4);
        const tmp6 = null == closure_0 || !IAPStore.isPurchasingProduct(tmp4);
      }
      tmp2 = isBusyResult;
    }
    if (!tmp2) {
      tmp2 = !stateFromStores;
    }
    return tmp2;
  };
  cResult[4] = arg0;
  cResult[5] = stateFromStores;
  cResult[6] = fn2;
  tmp11 = fn2;
  const tmpResult = require("initialize");
}) : (function useCanPurchaseIAP(arg0) {
  _require = arg0;
  const items = [UserStore];
  closure_1 = require("initialize").useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.verified;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }, []);
  const obj = require("initialize");
  const items1 = [IAPStore];
  return !require("initialize").useStateFromStores(items1, () => {
    const isReadyResult = IAPStore.isReady();
    let tmp2 = !isReadyResult;
    if (isReadyResult) {
      let isBusyResult = IAPStore.isBusy();
      if (isBusyResult) {
        isBusyResult = null == closure_0 || !IAPStore.isPurchasingProduct(tmp4);
        const tmp6 = null == closure_0 || !IAPStore.isPurchasingProduct(tmp4);
      }
      tmp2 = isBusyResult;
    }
    if (!tmp2) {
      tmp2 = !closure_1;
    }
    return tmp2;
  });
});
export { isStorekit2Available };
export { remapStorefront };
export const manageSubscription = function manageSubscription() {
  let isIOSResult = PlatformUtils2.isIOS();
  if (isIOSResult) {
    let isAvailableResult;
    if (RNIapIosSk2 != null) {
      isAvailableResult = RNIapIosSk2.isAvailable();
    }
    isIOSResult = 1 === isAvailableResult;
  }
  if (isIOSResult) {
    let result = RNIapIosSk2.showManageSubscriptions();
  } else {
    const _Error = Error;
    const error = new Error("StoreKit 2 is not available");
    result = Promise.reject(error);
  }
  return result;
};
export { shouldMockIAPForceEnable };