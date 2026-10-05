// === Module 8871: NativePaymentHooks ===

// Module 8871 (NativePaymentHooks)
import LoggerDefault from "Logger" /* 3 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import IAPStore from "IAPStore" /* 6739 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c5, closure_0, closure_2;

function notSupported() {
  const error = new Error("Native hook not supported for android");
  throw error;
}
function notSupportedReturnVoid() {
  const error = new Error("Native hook not supported for android");
  throw error;
}
let tmp2 = new LoggerDefault("NativePaymentHooks.android.tsx");
let closure_7 = tmp2;
let closure_8 = { nativePaymentsConnected: true, storeFront: null, canMakePayments: true };
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let fetchingGoogleSkus;
  let stateFromStores;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp8;
  _require = arg0;
  let closure_1 = arg1;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(11);
  const tmp2 = stateFromStores;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [IAPStore];
    const fn = function p() {
      return fetchingGoogleSkus.isFetchingGoogleSkus();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(tmp2[7]);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [];
    cResult[2] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
  }
  let closure_3 = react.useRef(tmp8);
  const tmp9 = _slicedToArray(react.useState(null), 2);
  [tmp10, _slicedToArray] = tmp9;
  if (cResult[3] === arg1) {
    if (cResult[4] === stateFromStores) {
      let tmp11;
      let tmp12;
      if (cResult[5] === arg0) {
        tmp11 = cResult[6];
        tmp12 = cResult[7];
      }
      const effect = react.useEffect(tmp11, tmp12);
      if (cResult[8] === tmp10) {
        let tmp14;
        if (cResult[9] === stateFromStores) {
          tmp14 = cResult[10];
        }
        return tmp14;
      }
      let obj2 = { isFetchingGoogleSkus: stateFromStores, fetchError: tmp10 };
      cResult[8] = tmp10;
      cResult[9] = stateFromStores;
      cResult[10] = obj2;
      tmp14 = obj2;
    }
  }
  const fn2 = function b() {
    let logger;
    function fetch() {
      return closure_0(...arguments);
    }
    closure_0 = closure_3(function*() {
      let obj5;
      let ref;
      let v1;
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
        try {
          let c0;
          c5 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              c0 = undefined;
              closure_1 = undefined;
              if (closure_1) {
                ref.current = [];
              }
              const obj4 = closure_2_1(stateFromStores[8]);
              const differenceResult = obj4.difference(tmp10, ref.current);
              c0 = differenceResult;
              const arr = tmp10;
              if (!closure_2) {
                if (!closure_1) {
                  if (0 !== arr.length) {
                    if (0 !== differenceResult.length) {
                      ref = 1;
                      v1 = 2;
                      c5 = 1;
                      const obj7 = { value: obj5.loadInAppSkus(differenceResult), done: false };
                      obj5 = closure_2(stateFromStores[9]);
                      return obj7;
                    }
                  }
                }
              }
            }
          } else if (1 === tmp4) {
            ref = 0;
            closure_1 = closure_2;
            logger.error("Unable to fetch product IDs from google play store: ", closure_1);
            v1("Unable to fetch");
            const obj3 = tmp10(stateFromStores[10]);
            const result = obj3.captureBillingException(closure_1);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            ref = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            const obj = closure_2_1(stateFromStores[8]);
            ref.current = obj.union(ref.current, c0);
            v1(null);
            ref = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp34) {
          closure_2 = tmp34;
          if (0 === ref) {
            c5 = 3;
            throw tmp34;
          } else {
            v1 = 1;
          }
        }
      }
    });
    const tmp = fetch();
  };
  const items2 = [arg1, stateFromStores, arg0];
  cResult[3] = arg1;
  cResult[4] = stateFromStores;
  cResult[5] = arg0;
  cResult[6] = fn2;
  cResult[7] = items2;
  tmp12 = items2;
  tmp11 = fn2;
}) : ((arg0, arg1) => {
  let closure_4;
  let fetchError;
  let fetchingGoogleSkus;
  let isFetchingGoogleSkus;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("get initialized");
  const items = [IAPStore];
  isFetchingGoogleSkus = obj.useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
  let closure_3 = react.useRef([]);
  [fetchError, _slicedToArray] = react.useState(null);
  const items1 = [arg1, isFetchingGoogleSkus, arg0];
  const effect = react.useEffect(() => {
    function fetch() {
      return obj(...arguments);
    }
    let obj = function _fetch2() {
      let logger;
      obj = _asyncToGenerator(async () => {
        let obj5;
        let ref;
        let v1;
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
          try {
            let c0;
            c5 = 2;
            if (0 === v1) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_1 = tmp;
                closure_0 = tmp10;
                c0 = undefined;
                if (closure_1) {
                  ref.current = [];
                }
                const obj4 = closure_2_1(isFetchingGoogleSkus[8]);
                const differenceResult = obj4.difference(closure_0, ref.current);
                c0 = differenceResult;
                const arr = closure_0;
                if (!closure_2) {
                  if (!closure_1) {
                    if (0 !== arr.length) {
                      if (0 !== differenceResult.length) {
                        ref = 1;
                        v1 = 2;
                        c5 = 1;
                        const obj7 = { value: obj5.loadInAppSkus(differenceResult), done: false };
                        obj5 = closure_2_0(isFetchingGoogleSkus[9]);
                        return obj7;
                      }
                    }
                  }
                }
              }
            } else if (1 === tmp4) {
              ref = 0;
              closure_1 = closure_2;
              logger.error("Unable to fetch product IDs from google play store: ", closure_1);
              v1("Unable to fetch");
              const obj3 = closure_2_0(isFetchingGoogleSkus[10]);
              const result = obj3.captureBillingException(closure_1);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              ref = 0;
              c5 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              obj = closure_2_1(isFetchingGoogleSkus[8]);
              ref.current = obj.union(ref.current, c0);
              v1(null);
              ref = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp34) {
            closure_2 = tmp34;
            if (0 === ref) {
              c5 = 3;
              throw tmp34;
            } else {
              v1 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = !fetch();
  }, items1);
  return { isFetchingGoogleSkus, fetchError };
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useResubscribeSubscription(arg0) {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  const nativePaymentsConnected = closure_8.nativePaymentsConnected;
  if (cResult[0] !== nativePaymentsConnected) {
    const obj2 = { resubscribeSubscription: notSupported, nativePaymentsConnected };
    cResult[0] = nativePaymentsConnected;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function useResubscribeSubscription(arg0) {
  return { resubscribeSubscription: notSupported, nativePaymentsConnected: closure_8.nativePaymentsConnected };
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCancelSubscription(arg0, arg1) {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  const nativePaymentsConnected = closure_8.nativePaymentsConnected;
  if (cResult[0] !== nativePaymentsConnected) {
    const obj2 = { cancelSubscription: notSupported, nativePaymentsConnected };
    cResult[0] = nativePaymentsConnected;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function useCancelSubscription(arg0, arg1) {
  return { cancelSubscription: notSupported, nativePaymentsConnected: closure_8.nativePaymentsConnected };
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCreateSubscription(arg0) {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  const nativePaymentsConnected = closure_8.nativePaymentsConnected;
  if (cResult[0] !== nativePaymentsConnected) {
    const obj2 = { createSubscription: notSupportedReturnVoid, nativePaymentsConnected };
    cResult[0] = nativePaymentsConnected;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function useCreateSubscription(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    return { createSubscription: notSupportedReturnVoid, nativePaymentsConnected: closure_8.nativePaymentsConnected };
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMobileStoreFront() {
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [IAPStore];
    const fn = function n() {
      const items = [authStore.getUserCountry(), ];
      const products = authStore.getProducts();
      let currencyCode;
      if (products != null) {
        const first = products[0];
        if (first != null) {
          currencyCode = first.currencyCode;
        }
      }
      items[1] = currencyCode;
      return items;
    };
    cResult[0] = items;
    cResult[1] = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  [tmp8, tmp9] = tmpResult.useStateFromStoresArray(tmp4, tmp5);
  let tmp10 = null;
  _slicedToArray(tmpResult.useStateFromStoresArray(tmp4, tmp5), 2);
  if (null != tmp8) {
    tmp10 = null;
    if (null != tmp9) {
      if (cResult[2] === tmp8) {
        let tmp11;
        if (cResult[3] === tmp9) {
          tmp11 = cResult[4];
        }
        tmp10 = tmp11;
      }
      const obj2 = { country: tmp8, currency: tmp9 };
      cResult[2] = tmp8;
      cResult[3] = tmp9;
      cResult[4] = obj2;
      tmp11 = obj2;
    }
  }
  return tmp10;
}) : (function useMobileStoreFront() {
  let first;
  let tmp3;
  let obj = first(504);
  let items = [IAPStore];
  [first, tmp3] = obj.useStateFromStoresArray(items, () => {
    const items = [authStore.getUserCountry(), ];
    const products = authStore.getProducts();
    let currencyCode;
    if (products != null) {
      first = products[0];
      if (first != null) {
        currencyCode = first.currencyCode;
      }
    }
    items[1] = currencyCode;
    return items;
  });
  let closure_1 = tmp3;
  const items1 = [first, tmp3];
  return react.useMemo(() => {
    let tmp2 = null;
    if (null != first) {
      tmp2 = null;
      if (null != closure_1) {
        tmp2 = { country: tmp, currency: tmp3 };
        const obj = { country: tmp, currency: tmp3 };
      }
    }
    return tmp2;
  }, items1);
});
function useNativeIAPPayments() {
  return closure_8;
}
let result = size.fileFinishedImporting("modules/payments/native/hooks/NativePaymentHooks.android.tsx");

export default { useNativeIAPPayments, useGoogleSkuIds: tmp3, useCreateSubscription: tmp6, useCancelSubscription: tmp5, useResubscribeSubscription: tmp4, useMobileStoreFront: tmp7 };
export { useNativeIAPPayments };
export const useGoogleSkuIds = tmp3;
export const useResubscribeSubscription = tmp4;
export const useCancelSubscription = tmp5;
export const useCreateSubscription = tmp6;
export const useMobileStoreFront = tmp7;