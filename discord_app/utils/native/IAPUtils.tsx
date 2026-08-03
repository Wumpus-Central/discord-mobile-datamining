// === Module 7330: serializePurchaseResponse ===

// Module 7330 (serializePurchaseResponse)
import updateProduct from "updateProduct";
import { convertToAlpha2 } from "DEFAULT_COUNTRY_CODE_NAME";
import mergeGuildAvatar from "mergeGuildAvatar";
import closure_7 from "updateProduct";
import ME from "ME";
import { NAMESPACE_SNOWFLAKE_UUID } from "GuildFeatures";
import set from "set";
import set from "getUserAgnosticState";

let IOS_BUNDLE_ID;
let closure_12;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function serializePurchaseResponse(originalTransactionDate) {
  importDefault(38)(null != originalTransactionDate.transactionId, "should have transactionId");
  const obj = { originalTransactionDate: originalTransactionDate.originalTransactionDateIOS, originalTransactionIdentifier: null, transactionDate: null, transactionIdentifier: null, productIdentifier: null, transactionReceipt: null, jwsRepresentation: null };
  let parsed;
  if (null != originalTransactionDate.originalTransactionIdentifierIOS) {
    const _parseInt = parseInt;
    parsed = parseInt(originalTransactionDate.originalTransactionIdentifierIOS);
  }
  obj[1] = parsed;
  obj[2] = originalTransactionDate.transactionDate;
  obj[3] = parseInt(originalTransactionDate.transactionId);
  ({ productId: obj[4], transactionReceipt: obj[5], verificationResultIOS: obj[6] } = originalTransactionDate);
  return obj;
}
function convertToUUID(arg0) {
  return require(514) /* v1 */.v5(arg0, NAMESPACE_SNOWFLAKE_UUID);
}
function _restorePurchases() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c7 = 0;
    let c8 = 0;
    const iter = (function*(arg0) {
      if (c8 === 2) {
        c8 = 3;
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_3 = tmp2;
              let updateProduct = tmp5;
              let fullRestore;
              fullRestore = fullRestore.fullRestore;
              let callback2;
              let arr4;
              closure_3 = undefined;
              c7 = 1;
              c8 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else if (outer1_17()) {
              let obj8 = closure_12;
              if (callback) {
                c7 = 2;
                c8 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = obj8.sync();
                return obj2;
              } else {
                c7 = 3;
                c8 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = obj8.getPendingTransactions();
                return obj3;
              }
            } else {
              c8 = 3;
              let obj4 = { value: null, done: true };
              obj4[0] = [];
              return obj4;
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else {
              const arr2 = outer1_1(outer1_3[14]);
              obj4 = callback(outer1_3[8]);
              c7 = 4;
              c8 = 1;
              const obj6 = { value: null, done: false };
              obj6[0] = obj4.getAvailablePurchases({ onlyIncludeActiveItems: false });
              return obj6;
            }
          } else if (3 === tmp5) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj7 = { value: null, done: true };
              obj7[0] = arg1;
              return obj7;
            } else {
              arr4 = arg1;
              closure_3 = outer1_1(outer1_3[14]).map(arr4, (id) => id.id);
              arr4 = outer1_1(outer1_3[14]);
              callback2 = arr4.filter;
              const arr3 = outer1_1(outer1_3[14]);
              c7 = 5;
              c8 = 1;
              obj8 = { value: null, done: false };
              obj8[0] = callback(outer1_3[8]).getAvailablePurchases({ onlyIncludeActiveItems: false });
              return obj8;
            }
          } else {
            if (4 === tmp5) {
              if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj9 = { value: null, done: true };
                obj9[0] = arg1;
                return obj9;
              } else {
                callback2 = map(arg1, (originalPurchase) => {
                  let obj = { originalPurchase, purchaseResponse: null };
                  callback(closure_3[10])(null != originalPurchase.transactionId, "should have transactionId");
                  obj = { originalTransactionDate: originalPurchase.originalTransactionDateIOS, originalTransactionIdentifier: null, transactionDate: null, transactionIdentifier: null, productIdentifier: null, transactionReceipt: null, jwsRepresentation: null };
                  let parsed;
                  if (null != originalPurchase.originalTransactionIdentifierIOS) {
                    const _parseInt = parseInt;
                    parsed = parseInt(originalPurchase.originalTransactionIdentifierIOS);
                  }
                  obj[1] = parsed;
                  obj[2] = originalPurchase.transactionDate;
                  obj[3] = parseInt(originalPurchase.transactionId);
                  ({ productId: obj2[4], transactionReceipt: obj2[5], verificationResultIOS: obj2[6] } = originalPurchase);
                  obj[1] = obj;
                  return obj;
                });
                c8 = 3;
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              callback2 = callback2(arg1, (transactionId) => {
                let hasItem = null != transactionId.transactionId;
                if (hasItem) {
                  const _parseInt = parseInt;
                  hasItem = closure_3.includes(parseInt(transactionId.transactionId));
                }
                return hasItem;
              }).map((originalPurchase) => {
                let obj = { originalPurchase, purchaseResponse: null };
                callback(closure_3[10])(null != originalPurchase.transactionId, "should have transactionId");
                obj = { originalTransactionDate: originalPurchase.originalTransactionDateIOS, originalTransactionIdentifier: null, transactionDate: null, transactionIdentifier: null, productIdentifier: null, transactionReceipt: null, jwsRepresentation: null };
                let parsed;
                if (null != originalPurchase.originalTransactionIdentifierIOS) {
                  const _parseInt = parseInt;
                  parsed = parseInt(originalPurchase.originalTransactionIdentifierIOS);
                }
                obj[1] = parsed;
                obj[2] = originalPurchase.transactionDate;
                obj[3] = parseInt(originalPurchase.transactionId);
                ({ productId: obj2[4], transactionReceipt: obj2[5], verificationResultIOS: obj2[6] } = originalPurchase);
                obj[1] = obj;
                return obj;
              });
              const arr = callback2(arg1, (transactionId) => {
                let hasItem = null != transactionId.transactionId;
                if (hasItem) {
                  const _parseInt = parseInt;
                  hasItem = closure_3.includes(parseInt(transactionId.transactionId));
                }
                return hasItem;
              });
            }
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
  });
  const _restorePurchases = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function isStorekit2Available() {
  let isIOSResult = require(500) /* set */.isIOS();
  if (isIOSResult) {
    let isAvailableResult;
    if (closure_12 != null) {
      isAvailableResult = obj2.isAvailable();
    }
    isIOSResult = 1 === isAvailableResult;
    obj2 = closure_12;
  }
  return isIOSResult;
}
function remapStorefront(countryCode) {
  const country = convertToAlpha2(countryCode.countryCode);
  if (null == countryCode.currency) {
    if (null == require(7351) /* GeneratedPaymentCurrencies */.GeneratedPaymentCurrenciesSets.APPLE_STORE_COUNTRY_CURRENCIES[country]) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Unable to get currency from countryCode " + countryCode.countryCode);
      throw error;
    }
  } else {
    const currency = table[str.toUpperCase(str)];
  }
  return { currency, country };
}
function _fetchStoreFront() {
  const self = this;
  const tmp = callback(function*() {
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
            let callback = tmp7;
            callback = undefined;
            if (outer1_17()) {
              let dependencyMap = 1;
              c4 = 2;
              c5 = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = outer1_0(7331).getStorefront();
              return obj1;
            } else {
              c5 = 3;
              return { value: null, done: true };
            }
          }
        } else if (1 === tmp7) {
          dependencyMap = 0;
          closure_1 = closure_2;
          obj1 = callback(3916);
          const result = obj1.captureBillingException(closure_1);
          c5 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          dependencyMap = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          callback = arg1;
          if (null != callback) {
            callback2(callback);
          }
          dependencyMap = 0;
          c5 = 3;
        }
      } catch (tmp28) {
        closure_2 = tmp28;
        if (tmp4 === dependencyMap) {
          c5 = tmp2;
          throw tmp28;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  const _fetchStoreFront = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ CurrencyCodes: metroImportAll, IOS_BUNDLE_ID } = ME);
({ InAppUtils: unpackModuleId, RNIapIosSk2: closure_12 } = require("initialize").NativeModules);
let items = [require("module_7331").ErrorCode.E_USER_CANCELLED, ME.StoreKitErrors.PAYMENT_CANCELED];
let set = new Set(items);
new require("DEFAULT_COUNTRY_CODE_NAME")("IAPUtils.tsx");
let _default = {
  loadProducts() {
    if (obj.isIOS()) {
      const _Object = Object;
      let items = [importDefault(7350).fetchSubscriptions(Object.values(tmp(5741).ProductIds)), ];
      const obj2 = importDefault(7350);
      const _Object2 = Object;
      items[1] = importDefault(7350).fetchProducts(Object.values(tmp(5741).ProductIds));
      const obj3 = importDefault(7350);
      let nextPromise = _Promise.all(items).then((arg0) => {
        let tmp;
        [r10007, tmp] = arg0;
        let set;
        set = new Set();
        const items = [...tmp];
        return callback(table[14]).filter(items, (identifier) => {
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    closure_0 = undefined;
    closure_0 = callback((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let c6 = 0;
      let c7 = 0;
      let c5 = 0;
      return (function*(arg0, arg1) {
        if (c7 === 2) {
          c7 = 3;
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
            c7 = 2;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_3 = tmp3;
                let closure_2 = tmp7;
                closure_2 = undefined;
                if (null != outer2_6.getCurrentUser()) {
                  let c5 = 1;
                  c6 = 2;
                  c7 = 1;
                  let obj1 = { value: null, done: false };
                  obj1[0] = callback(outer2_3[8]).clearTransactionIOS();
                  return obj1;
                } else {
                  const _Error2 = Error;
                  const error = new Error("purchaseProduct: no valid user");
                  tmp49(error);
                }
                tmp49 = callback2;
              }
            } else {
              if (1 === tmp7) {
                c5 = 0;
                callback2(updateProduct);
              } else if (2 === tmp7) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c5 = 0;
                  c7 = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = arg1;
                  return obj2;
                } else {
                  obj1 = callback(outer2_3[8]);
                  const obj3 = { sku: null, appAccountToken: null, withOffer: null };
                  obj3[0] = callback;
                  obj3[1] = outer1_2;
                  obj3[2] = callback2;
                  c6 = 3;
                  c7 = 1;
                  const obj4 = { value: null, done: false };
                  obj4[0] = obj1.requestPurchase(obj3);
                  return obj4;
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                closure_2 = arg1;
                const _Object = Object;
                if (closure_2 instanceof Object) {
                  callback(outer2_14(closure_2));
                  c5 = 0;
                } else {
                  const _Error = Error;
                  const error1 = new Error("Unable to select a platform, no request was made");
                  throw error1;
                }
              }
              c5 = 0;
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c7 = 3;
          } catch (tmp38) {
            updateProduct = tmp38;
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
      let closure_0 = arg0;
      let closure_1 = arg1;
      closure_11.canMakePayments((arg0) => {
        if (!arg0) {
          const _Error = Error;
          const error = new Error();
          callback2(error);
        }
        callback(arg0);
      });
    });
  },
  restorePurchases() {
    const self = this;
    const apply = _restorePurchases.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  fetchStoreFront() {
    const self = this;
    const apply = _fetchStoreFront.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
};
set = set.isIOS();
if (set) {
  let isIOSResult1 = require("set").isIOS();
  if (isIOSResult1) {
    let Identifier = require("getConstants").getConstants().Identifier;
    let _HermesInternal = HermesInternal;
    let isRunningOnSimulator = Identifier.startsWith("" + IOS_BUNDLE_ID + ".local");
    if (!isRunningOnSimulator) {
      isRunningOnSimulator = require("DCDDeviceManager").getIsRunningOnSimulator();
      let obj6 = require("DCDDeviceManager");
    }
    isIOSResult1 = isRunningOnSimulator;
    const importAllResult = require("getConstants");
  }
  let value = isIOSResult1;
  if (!value) {
    value = importDefaultResult.get("force_mock_iap");
  }
  set = value;
  let obj4 = require("set");
}
if (set) {
  _default = require("items").default;
}
function shouldMockIAPForceEnable() {
  let isIOSResult = require(500) /* set */.isIOS();
  if (isIOSResult) {
    const Identifier = importAll(1578).getConstants().Identifier;
    const _HermesInternal = HermesInternal;
    let isRunningOnSimulator = Identifier.startsWith("" + IOS_BUNDLE_ID + ".local");
    if (!isRunningOnSimulator) {
      isRunningOnSimulator = require(4235) /* DCDDeviceManager */.getIsRunningOnSimulator();
      const tmpResult = require(4235) /* DCDDeviceManager */;
    }
    isIOSResult = isRunningOnSimulator;
    const obj2 = importAll(1578);
  }
  return isIOSResult;
}
let result = set.fileFinishedImporting("utils/native/IAPUtils.tsx");

export default _default;
export { convertToUUID };
export const makeIAPRequest = function makeIAPRequest(closure_1, closure_2, closure_3) {
  let closure_0 = closure_1;
  closure_1 = closure_2;
  closure_2 = closure_3;
  closure_0 = undefined;
  closure_0 = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let code = tmp3;
              let closure_2 = tmp7;
              closure_2 = undefined;
              const currentUser = outer2_6.getCurrentUser();
              if (null != currentUser) {
                let c5 = 1;
                let obj3 = callback(outer2_3[8]);
                const obj1 = { requestJSONString: null, sku: null, appAccountToken: null, andDangerouslyFinishTransactionAutomaticallyIOS: false, useACOM: null };
                obj1[0] = callback;
                obj1[1] = callback2;
                obj1[2] = outer2_15(currentUser.id);
                obj1[4] = outer1_2;
                c6 = 2;
                c7 = 1;
                let obj2 = { value: null, done: false };
                obj2[0] = obj3.requestPurchase(obj1);
                return obj2;
              } else {
                const _Error2 = Error;
                const error = new Error("purchaseProduct: no valid user");
                tmp62(error);
              }
              tmp62 = callback2;
            }
          } else {
            if (1 === tmp7) {
              c5 = 0;
              code = updateProduct;
              if (!outer2_13.has(code.code)) {
                obj2 = callback(outer2_3[16]);
                const result = obj2.captureBillingException(code);
              }
              callback2(code);
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              closure_2 = arg1;
              const _Object = Object;
              if (closure_2 instanceof Object) {
                obj = { purchaseResponse: null, originalPurchase: null };
                obj[0] = outer2_14(closure_2);
                const _Array = Array;
                if (Array.isArray(closure_2)) {
                  let first = tmp19[0];
                } else {
                  first = tmp19;
                }
                obj[1] = first;
                callback(obj);
                c5 = 0;
                const tmp14 = callback;
              } else {
                const _Error = Error;
                const error1 = new Error("Unable to select a platform, no request was made");
                throw error1;
              }
            }
            c5 = 0;
            c7 = 3;
            obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          }
          c7 = 3;
        } catch (tmp49) {
          updateProduct = tmp49;
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
  const _require = productId;
  const items = [mergeGuildAvatar];
  let closure_1 = _require(589).useStateFromStores(items, () => {
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
  const obj = _require(589);
  const items1 = [closure_7];
  return !_require(589).useStateFromStores(items1, () => {
    const isReadyResult = outer1_7.isReady();
    let tmp2 = !isReadyResult;
    if (isReadyResult) {
      let isBusyResult = obj.isBusy();
      if (isBusyResult) {
        isBusyResult = null == closure_0 || !obj.isPurchasingProduct(tmp4);
        const tmp6 = null == closure_0 || !obj.isPurchasingProduct(tmp4);
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
  let isIOSResult = require(500) /* set */.isIOS();
  if (isIOSResult) {
    let isAvailableResult;
    if (closure_12 != null) {
      isAvailableResult = obj2.isAvailable();
    }
    isIOSResult = 1 === isAvailableResult;
    obj2 = closure_12;
  }
  if (isIOSResult) {
    let result = closure_12.showManageSubscriptions();
  } else {
    const _Error = Error;
    const error = new Error("StoreKit 2 is not available");
    result = Promise.reject(error);
  }
  return result;
};
export { shouldMockIAPForceEnable };