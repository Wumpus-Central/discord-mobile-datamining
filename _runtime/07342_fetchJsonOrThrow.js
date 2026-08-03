// === Module 7342: fetchJsonOrThrow ===

// Module 7342 (fetchJsonOrThrow)
import importDefaultResult from "asyncGeneratorStep";
import get_ActivityIndicator from "get ActivityIndicator";

let closure_0 = arg1;
const Linking = get_ActivityIndicator.Linking;
const RNIapIos = get_ActivityIndicator.NativeModules.RNIapIos;
closure_0 = importDefaultResult(function*() {
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
        obj = v0(outer1_1[2]);
        const iosModule = obj.getIosModule();
        v0 = 3;
        const obj1 = { value: null, done: true };
        obj1[0] = iosModule.getPendingTransactions();
        return obj1;
      }
    } catch (tmp6) {
      v0 = tmp;
      throw tmp6;
    }
  }
});
closure_0 = importDefaultResult((arg0) => {
  let closure_0 = arg0;
  let c4 = 0;
  let c5 = 0;
  const iter = (function*(arg0) {
    if (c5 === 2) {
      c5 = 3;
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
            let closure_3 = tmp5;
            let closure_2 = tmp2;
            let forceRefresh;
            forceRefresh = forceRefresh.forceRefresh;
            c4 = 1;
            c5 = 1;
            return { value: "ct", done: "Array" };
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          if (obj4.isIosStorekit2()) {
            Promise.reject("Only available on Sk1");
          } else {
            let c1 = callback;
            if (callback == null) {
              c1 = false;
            }
            const receipt = outer1_3.requestReceipt(c1);
          }
          c5 = 3;
          obj4 = callback(outer1_1[2]);
        }
      } catch (tmp16) {
        c5 = tmp;
        throw tmp16;
      }
    }
  })();
  iter.next();
  return iter;
});
closure_0 = importDefaultResult(function*() {
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
        obj = v0(outer1_1[2]);
        const iosModule = obj.getIosModule();
        v0 = 3;
        const obj1 = { value: null, done: true };
        obj1[0] = iosModule.presentCodeRedemptionSheet();
        return obj1;
      }
    } catch (tmp6) {
      v0 = tmp;
      throw tmp6;
    }
  }
});
closure_0 = importDefaultResult((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let c3 = 0;
  let c4 = 0;
  return (function*(arg0, arg1) {
    if (c4 === 2) {
      c4 = 3;
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_2 = tmp4;
            let closure_0;
            const _fetch = fetch;
            const obj1 = { method: "POST", headers: null, body: null };
            obj1[1] = { Accept: "application/json", "Content-Type": "application/json" };
            const _JSON = JSON;
            obj1[2] = JSON.stringify(closure_1);
            c3 = 1;
            c4 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = fetch(closure_0, obj1);
            return obj2;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          closure_0 = arg1;
          if (closure_0.ok) {
            c4 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = closure_0.json();
            return obj4;
          } else {
            const _Object = Object;
            const _Error = Error;
            const error = new Error(closure_0.statusText);
            obj = { statusCode: null };
            obj[0] = closure_0.status;
            throw Object.assign(error, obj);
          }
        }
      } catch (tmp16) {
        c4 = tmp;
        throw tmp16;
      }
    }
  })();
});
function fetchJsonOrThrow(arg0, arg1) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
closure_0 = importDefaultResult((arg0) => {
  let closure_0 = arg0;
  let c3 = 0;
  let c4 = 0;
  return (function*(arg0) {
    if (v0 === 2) {
      v0 = 3;
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
        v0 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_2 = tmp5;
            let status = tmp2;
            status = undefined;
            c3 = 1;
            v0 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = v0("https://buy.itunes.apple.com/verifyReceipt", closure_0);
            return obj1;
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              status = arg1;
              if (status) {
                if (21007 === status.status) {
                  c3 = 2;
                  v0 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = v0("https://sandbox.itunes.apple.com/verifyReceipt", closure_0);
                  return obj3;
                }
              }
              let tmp6 = status;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else {
            tmp6 = arg1;
            if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          }
          v0 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = tmp6;
          return obj4;
        }
      } catch (tmp15) {
        v0 = tmp;
        throw tmp15;
      }
    }
  })();
});
function requestAgnosticReceiptValidationIos(arg0) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
closure_0 = importDefaultResult((arg0) => {
  let closure_0 = arg0;
  let c3 = 0;
  let c4 = 0;
  const iter = (function*(arg0) {
    let c0;
    let c1;
    if (v0 === 2) {
      v0 = 3;
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
        v0 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let str = tmp5;
            c1 = tmp2;
            c0 = undefined;
            c1 = undefined;
            ({ receiptBody: c0, isTest: c1 } = c0);
            str = undefined;
            c3 = 1;
            v0 = 1;
            return { value: "ct", done: "Array" };
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            const obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else if (null == c1) {
            c3 = 2;
            v0 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = outer1_5(c0);
            return obj2;
          } else {
            str = "https://buy.itunes.apple.com/verifyReceipt";
            if (c1) {
              str = "https://sandbox.itunes.apple.com/verifyReceipt";
            }
            c3 = 3;
            v0 = 1;
            const obj3 = { value: null, done: false };
            obj3[0] = v0(str, c0);
            return obj3;
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            v0 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          const obj6 = { value: null, done: true };
          obj6[0] = arg1;
          return obj6;
        } else {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp17) {
        v0 = tmp;
        throw tmp17;
      }
    }
  })();
  iter.next();
  return iter;
});

export const getPendingPurchasesIOS = function getPendingPurchasesIOS() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getReceiptIOS = function getReceiptIOS(arg0) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const presentCodeRedemptionSheetIOS = function presentCodeRedemptionSheetIOS() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getPromotedProductIOS = () => {
  if (obj.isIosStorekit2()) {
    let rejectResult = Promise.reject("Only available on Sk1");
  } else {
    rejectResult = RNIapIos.promotedProduct();
  }
  return rejectResult;
};
export const buyPromotedProductIOS = () => {
  const iosModule = callback(7334).getIosModule();
  return iosModule.buyPromotedProduct();
};
export const validateReceiptIos = function validateReceiptIos(arg0) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const clearTransactionIOS = () => {
  const iosModule = callback(7334).getIosModule();
  return iosModule.clearTransaction();
};
export const clearProductsIOS = () => {
  const iosModule = callback(7334).getIosModule();
  return iosModule.clearProducts();
};
export const deepLinkToSubscriptionsIos = () => Linking.openURL("https://apps.apple.com/account/subscriptions");