// === Module 11047: IAPUtils ===

// Module 11047 (IAPUtils)
import LoggerDefault from "Logger" /* 3 */;
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import PlatformUtils2 from "PlatformUtils" /* 1115 */;
import v1 from "v1" /* 1256 */;
import ClientInfoUtilsAll from "ClientInfoUtils" /* 1364 */;
import DeviceUtils from "DeviceUtils" /* 4539 */;
import ProductIds from "ProductIds" /* 7240 */;
import StorekitIAPQueueDefault from "StorekitIAPQueue" /* 11067 */;
import GeneratedPaymentCurrencies from "GeneratedPaymentCurrencies" /* 11068 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import DevSettingsStore from "DevSettingsStore" /* 4559 */;
import UserStore from "UserStore" /* 1371 */;
import IAPStore from "IAPStore" /* 7237 */;

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
let closure_16 = async function _restorePurchases(arg0) {
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
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
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
            return { value: "PX_16", done: true };
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else if (closure_131_17()) {
            let obj8 = closure_131_12;
            if (fullRestore2) {
              c7 = 2;
              c8 = 1;
              const obj2 = { value: obj8.sync(), done: false };
              return obj2;
            } else {
              c7 = 3;
              c8 = 1;
              const obj3 = { value: obj8.getPendingTransactions(), done: false };
              return obj3;
            }
          } else {
            c8 = 3;
            let obj4 = { value: [], done: true };
            return obj4;
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            arr2 = closure_131_1(closure_131_3[14]);
            obj4 = closure_131_0(closure_131_3[8]);
            c7 = 4;
            c8 = 1;
            const obj6 = { value: obj4.getAvailablePurchases({ onlyIncludeActiveItems: false }), done: false };
            return obj6;
          }
        } else if (3 === tmp5) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_132_2 = value;
            closure_132_3 = closure_131_1(closure_131_3[14]).map(closure_132_2, (id) => id.id);
            arr4 = closure_131_1(closure_131_3[14]);
            filter = arr4.filter;
            const arr3 = closure_131_1(closure_131_3[14]);
            c7 = 5;
            c8 = 1;
            obj8 = { value: closure_131_0(closure_131_3[8]).getAvailablePurchases({ onlyIncludeActiveItems: false }), done: false };
            return obj8;
          }
        } else {
          if (4 === tmp5) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              closure_132_1 = map(value, (originalPurchase) => {
                let obj = { originalPurchase, purchaseResponse: null };
                filter(closure_1_3[10])(null != originalPurchase.transactionId, "should have transactionId");
                obj = { originalTransactionDate: originalPurchase.originalTransactionDateIOS, originalTransactionIdentifier: null, transactionDate: null, transactionIdentifier: null, productIdentifier: null, transactionReceipt: null, jwsRepresentation: null };
                let parsed;
                if (null != originalPurchase.originalTransactionIdentifierIOS) {
                  const _parseInt = parseInt;
                  parsed = parseInt(originalPurchase.originalTransactionIdentifierIOS);
                }
                obj.originalTransactionIdentifier = parsed;
                obj.transactionDate = originalPurchase.transactionDate;
                obj.transactionIdentifier = parseInt(originalPurchase.transactionId);
                ({ productId: obj2.productIdentifier, transactionReceipt: obj2.transactionReceipt, verificationResultIOS: obj2.jwsRepresentation } = originalPurchase);
                obj.purchaseResponse = obj;
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
              let obj = { originalPurchase, purchaseResponse: null };
              filter(closure_1_3[10])(null != originalPurchase.transactionId, "should have transactionId");
              obj = { originalTransactionDate: originalPurchase.originalTransactionDateIOS, originalTransactionIdentifier: null, transactionDate: null, transactionIdentifier: null, productIdentifier: null, transactionReceipt: null, jwsRepresentation: null };
              let parsed;
              if (null != originalPurchase.originalTransactionIdentifierIOS) {
                const _parseInt = parseInt;
                parsed = parseInt(originalPurchase.originalTransactionIdentifierIOS);
              }
              obj.originalTransactionIdentifier = parsed;
              obj.transactionDate = originalPurchase.transactionDate;
              obj.transactionIdentifier = parseInt(originalPurchase.transactionId);
              ({ productId: obj2.productIdentifier, transactionReceipt: obj2.transactionReceipt, verificationResultIOS: obj2.jwsRepresentation } = originalPurchase);
              obj.purchaseResponse = obj;
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
          obj = { value, done: true };
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
    if (closure_1_12 != null) {
      isAvailableResult = closure_1_12.isAvailable();
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
    const currency = React6[str.toUpperCase(str)];
  }
  return { currency, country };
}
let closure_19 = async function _fetchStoreFront() {
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
          if (isStorekit2Available()) {
            c3 = 1;
            c4 = 2;
            c5 = 1;
            let obj1 = { value: require("module_11048").getStorefront(), done: false };
            return obj1;
          } else {
            c5 = 3;
            return { value: null, done: true };
          }
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_1 = closure_2;
        obj1 = closure_129_0(closure_129_3[16]);
        const result = obj1.captureBillingException(closure_128_1);
        c5 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_128_0 = value;
        if (null != closure_128_0) {
          closure_129_18(closure_128_0);
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
const convertToAlpha2 = fn(4776).convertToAlpha2;
const Constants = fn(1074);
({ CurrencyCodes: closure_8, IOS_BUNDLE_ID } = Constants);
const NAMESPACE_SNOWFLAKE_UUID = fn(1373).NAMESPACE_SNOWFLAKE_UUID;
({ InAppUtils: closure_11, RNIapIosSk2: closure_12 } = fn(17).NativeModules);
let items = [fn(11048).ErrorCode.E_USER_CANCELLED, Constants.StoreKitErrors.PAYMENT_CANCELED];
let set = new Set(items);
new LoggerDefault("IAPUtils.tsx");
let _default = {
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
  purchaseProduct(arg0, arg1, arg2) {
    closure_1 = arg1;
    closure_2 = arg2;
    closure_0 = asyncGeneratorStep(async (sku, withOffer) => {
      c6 = 0;
      c7 = 0;
      c5 = 0;
      return (async (arg0, value) => {
        if (c7 === 2) {
          c7 = 3;
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
            c7 = 2;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_3 = tmp3;
                appAccountToken = tmp7;
                closure_130_0 = sku;
                closure_130_1 = withOffer;
                closure_130_2 = undefined;
                if (null != currentUser.getCurrentUser()) {
                  c5 = 1;
                  c6 = 2;
                  c7 = 1;
                  let obj1 = { value: sku(11048).clearTransactionIOS(), done: false };
                  return obj1;
                } else {
                  const _Error2 = Error;
                  const error = new Error("purchaseProduct: no valid user");
                  withOffer(error);
                }
              }
            } else {
              if (1 === tmp7) {
                c5 = 0;
                closure_130_1(closure_4);
              } else if (2 === tmp7) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 0;
                  c7 = 3;
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  obj1 = sku(11048);
                  const obj3 = { sku, appAccountToken, withOffer };
                  c6 = 3;
                  c7 = 1;
                  const obj4 = { value: obj1.requestPurchase(obj3), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 !== 2) {
                closure_130_2 = value;
                const _Object = Object;
                if (closure_130_2 instanceof Object) {
                  closure_130_0(serializePurchaseResponse(closure_130_2));
                  c5 = 0;
                } else {
                  const _Error = Error;
                  const error1 = new Error("Unable to select a platform, no request was made");
                  throw error1;
                }
              }
              c5 = 0;
              c7 = 3;
              obj = { value, done: true };
              return obj;
            }
            c7 = 3;
          } catch (tmp38) {
            closure_4 = tmp38;
            if (tmp4 === c5) {
              c7 = tmp2;
              throw tmp38;
            } else {
              c6 = tmp;
            }
          }
        }
      })();
    });
    return new Promise(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    });
  },
  canMakePayments() {
    return new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_1_11.canMakePayments((arg0) => {
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
    const apply = closure_16.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  fetchStoreFront() {
    const self = this;
    const apply = closure_19.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
};
let PlatformUtils = fn(1115);
PlatformUtils = PlatformUtils.isIOS();
if (PlatformUtils) {
  let isIOSResult1 = fn(1115).isIOS();
  if (isIOSResult1) {
    let Identifier = ClientInfoUtilsAll.getConstants().Identifier;
    let _HermesInternal = HermesInternal;
    let isRunningOnSimulator = Identifier.startsWith("" + IOS_BUNDLE_ID + ".local");
    if (!isRunningOnSimulator) {
      isRunningOnSimulator = fn(4539).getIsRunningOnSimulator();
      let obj6 = fn(4539);
    }
    isIOSResult1 = isRunningOnSimulator;
    const importAllResult = ClientInfoUtilsAll;
  }
  let value = isIOSResult1;
  if (!value) {
    value = DevSettingsStore.get("force_mock_iap");
  }
  PlatformUtils = value;
  let obj4 = fn(1115);
}
if (PlatformUtils) {
  _default = fn(11069).default;
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

export default _default;
export { convertToUUID };
export const makeIAPRequest = function makeIAPRequest(arg0, arg1, arg2) {
  closure_1 = arg1;
  closure_2 = arg2;
  closure_0 = asyncGeneratorStep(async (requestJSONString, sku) => {
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (async (arg0, value) => {
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_3 = tmp3;
              useACOM = tmp7;
              closure_130_0 = requestJSONString;
              closure_130_1 = sku;
              closure_130_2 = undefined;
              currentUser = currentUser.getCurrentUser();
              if (null != currentUser) {
                c5 = 1;
                let obj3 = requestJSONString(11048);
                const obj1 = { requestJSONString, sku, appAccountToken: convertToUUID(currentUser.id), andDangerouslyFinishTransactionAutomaticallyIOS: false, useACOM };
                c6 = 2;
                c7 = 1;
                let obj2 = { value: obj3.requestPurchase(obj1), done: false };
                return obj2;
              } else {
                const _Error2 = Error;
                const error = new Error("purchaseProduct: no valid user");
                sku(error);
              }
            }
          } else {
            if (1 === tmp7) {
              c5 = 0;
              closure_130_3 = closure_4;
              if (!set.has(closure_130_3.code)) {
                obj2 = requestJSONString(4233);
                const result = obj2.captureBillingException(closure_130_3);
              }
              closure_130_1(closure_130_3);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_130_2 = value;
              const _Object = Object;
              if (closure_130_2 instanceof Object) {
                obj = { purchaseResponse: serializePurchaseResponse(closure_130_2), originalPurchase: null };
                const _Array = Array;
                if (Array.isArray(closure_130_2)) {
                  let first = tmp19[0];
                } else {
                  first = tmp19;
                }
                obj.originalPurchase = first;
                closure_130_0(obj);
                c5 = 0;
              } else {
                const _Error = Error;
                const error1 = new Error("Unable to select a platform, no request was made");
                throw error1;
              }
            }
            c5 = 0;
            c7 = 3;
            obj3 = { value, done: true };
            return obj3;
          }
          c7 = 3;
        } catch (tmp49) {
          closure_4 = tmp49;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp49;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  return new Promise(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  });
};
export const useCanPurchaseIAP = function useCanPurchaseIAP(productId) {
  _require = productId;
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
};
export { isStorekit2Available };
export { remapStorefront };
export const manageSubscription = function manageSubscription() {
  let isIOSResult = PlatformUtils2.isIOS();
  if (isIOSResult) {
    let isAvailableResult;
    if (closure_1_12 != null) {
      isAvailableResult = closure_1_12.isAvailable();
    }
    isIOSResult = 1 === isAvailableResult;
  }
  if (isIOSResult) {
    let result = closure_1_12.showManageSubscriptions();
  } else {
    const _Error = Error;
    const error = new Error("StoreKit 2 is not available");
    result = Promise.reject(error);
  }
  return result;
};
export { shouldMockIAPForceEnable };