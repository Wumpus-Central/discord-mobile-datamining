// === Module 9371: NativePaymentHooks ===

// Module 9371 (NativePaymentHooks)
import LoggerDefault from "Logger" /* 3 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7125 */;

require = fn;
function notSupported() {
  const error = new Error("Native hook not supported for android");
  throw error;
}
function notSupportedReturnVoid() {
  const error = new Error("Native hook not supported for android");
  throw error;
}
let closure_7 = new LoggerDefault("NativePaymentHooks.android.tsx");
let closure_8 = { nativePaymentsConnected: true, storeFront: null, canMakePayments: true };
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGoogleSkuIds(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(11);
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
  let obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [];
    cResult[2] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
  }
  closure_3 = noop.useRef(tmp8);
  const tmpResult = require("initialize");
  [tmp10, _slicedToArray] = noop.useState(null);
  if (cResult[3] === arg1) {
    if (cResult[4] === stateFromStores) {
      if (cResult[5] === arg0) {
        let tmp11 = cResult[6];
        let tmp12 = cResult[7];
      }
      const effect = noop.useEffect(tmp11, tmp12);
      if (cResult[8] === tmp10) {
        if (cResult[9] === stateFromStores) {
          let tmp14 = cResult[10];
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
    closure_0 = closure_3(function*() {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
          c5 = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_1 = tmp3;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              if (closure_1) {
                ref.current = [];
              }
              const differenceResult = closure_2_1(12).difference(tmp5, ref.current);
              closure_128_0 = differenceResult;
              if (!closure_2) {
                if (!tmp46) {
                  if (0 !== tmp5.length) {
                    if (0 !== differenceResult.length) {
                      ref = 1;
                      v2 = 2;
                      c5 = 1;
                      const obj7 = { value: tmp5(9372).loadInAppSkus(differenceResult), done: false };
                      return obj7;
                    }
                  }
                }
              }
              const obj4 = closure_2_1(12);
              tmp46 = closure_1;
            }
          } else {
            if (1 === tmp8) {
              ref = 0;
              closure_128_1 = closure_2;
              logger.error("Unable to fetch product IDs from google play store: ", closure_128_1);
              v2("Unable to fetch");
              const result = tmp5(4743).captureBillingException(closure_128_1);
              const obj3 = tmp5(4743);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              ref.current = closure_2_1(12).union(ref.current, closure_128_0);
              v2(null);
              ref = 0;
              const obj = closure_2_1(12);
            }
            ref = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          }
          c5 = 3;
        } catch (tmp38) {
          closure_2 = tmp38;
          if (tmp4 === ref) {
            c5 = tmp2;
            throw tmp38;
          } else {
            v2 = tmp;
          }
        }
      }
    });
    (function fetch() {
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
  const items2 = [arg1, stateFromStores, arg0];
  cResult[3] = arg1;
  cResult[4] = stateFromStores;
  cResult[5] = arg0;
  cResult[6] = fn2;
  cResult[7] = items2;
  tmp12 = items2;
  tmp11 = fn2;
  const tmp9 = _slicedToArray(noop.useState(null), 2);
}) : (function useGoogleSkuIds(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const items = [IAPStore];
  isFetchingGoogleSkus = require("initialize").useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
  closure_3 = noop.useRef([]);
  const fetchError = _slicedToArray(noop.useState(null), 2);
  _slicedToArray = fetchError[1];
  const items1 = [arg1, isFetchingGoogleSkus, arg0];
  const effect = noop.useEffect(() => {
    closure_0 = async function _fetch2() {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
          c5 = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_1 = tmp3;
              closure_0 = tmp5;
              closure_128_0 = undefined;
              if (closure_1) {
                ref.current = [];
              }
              const differenceResult = closure_2_1(12).difference(closure_0, ref.current);
              closure_128_0 = differenceResult;
              if (!closure_2) {
                if (!tmp46) {
                  if (0 !== arr.length) {
                    if (0 !== differenceResult.length) {
                      ref = 1;
                      v2 = 2;
                      c5 = 1;
                      const obj7 = { value: closure_2_0(9372).loadInAppSkus(differenceResult), done: false };
                      return obj7;
                    }
                  }
                }
              }
              arr = closure_0;
              const obj4 = closure_2_1(12);
              tmp46 = closure_1;
            }
          } else {
            if (1 === tmp8) {
              ref = 0;
              closure_128_1 = closure_2;
              logger.error("Unable to fetch product IDs from google play store: ", closure_128_1);
              v2("Unable to fetch");
              const result = closure_2_0(4743).captureBillingException(closure_128_1);
              const obj3 = closure_2_0(4743);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              ref.current = closure_2_1(12).union(ref.current, closure_128_0);
              v2(null);
              ref = 0;
              const obj = closure_2_1(12);
            }
            ref = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          }
          c5 = 3;
        } catch (tmp38) {
          closure_2 = tmp38;
          if (tmp4 === ref) {
            c5 = tmp2;
            throw tmp38;
          } else {
            v2 = tmp;
          }
        }
      }
    };
    !(function fetch() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, items1);
  return { isFetchingGoogleSkus, fetchError: fetchError[0] };
});
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useResubscribeSubscription(arg0) {
  const cResult = c.c(2);
  const nativePaymentsConnected = closure_8.nativePaymentsConnected;
  if (cResult[0] !== nativePaymentsConnected) {
    const obj2 = { resubscribeSubscription: notSupported, nativePaymentsConnected };
    cResult[0] = nativePaymentsConnected;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function useResubscribeSubscription(arg0) {
  return { resubscribeSubscription: notSupported, nativePaymentsConnected: closure_8.nativePaymentsConnected };
});
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCancelSubscription(arg0, arg1) {
  const cResult = c.c(2);
  const nativePaymentsConnected = closure_8.nativePaymentsConnected;
  if (cResult[0] !== nativePaymentsConnected) {
    const obj2 = { cancelSubscription: notSupported, nativePaymentsConnected };
    cResult[0] = nativePaymentsConnected;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function useCancelSubscription(arg0, arg1) {
  return { cancelSubscription: notSupported, nativePaymentsConnected: closure_8.nativePaymentsConnected };
});
ReactCompilerGating = fn(558);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCreateSubscription(arg0) {
  const cResult = c.c(2);
  const nativePaymentsConnected = closure_8.nativePaymentsConnected;
  if (cResult[0] !== nativePaymentsConnected) {
    const obj2 = { createSubscription: notSupportedReturnVoid, nativePaymentsConnected };
    cResult[0] = nativePaymentsConnected;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function useCreateSubscription(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const obj = { createSubscription: notSupportedReturnVoid, nativePaymentsConnected: closure_8.nativePaymentsConnected };
    return obj;
  }
});
ReactCompilerGating = fn(558);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMobileStoreFront() {
  const cResult = c.c(5);
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
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let num3 = 2;
  const tmpResult = initialize;
  [tmp8, tmp9] = initialize.useStateFromStoresArray(tmp4, tmp5);
  let tmp10 = null;
  if (null != tmp8) {
    tmp10 = null;
    if (null != tmp9) {
      if (cResult[2] === tmp8) {
      }
      const obj2 = { country: tmp8, currency: tmp9 };
      cResult[num3] = tmp8;
      cResult[3] = tmp9;
      num3 = 4;
      cResult[4] = obj2;
    }
  }
  return tmp10;
}) : (function useMobileStoreFront() {
  let items = [IAPStore];
  const tmp = _slicedToArray(first(504).useStateFromStoresArray(items, () => {
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
  }), 2);
  first = tmp[0];
  closure_1 = tmp3;
  const items1 = [first, tmp[1]];
  return noop.useMemo(() => {
    let tmp2 = null;
    if (null != first) {
      tmp2 = null;
      if (null != closure_1) {
        const obj = { country: tmp, currency: tmp3 };
        tmp2 = obj;
      }
    }
    return tmp2;
  }, items1);
});
function useNativeIAPPayments() {
  return closure_8;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/payments/native/hooks/NativePaymentHooks.android.tsx");

export default { useNativeIAPPayments, useGoogleSkuIds: tmp3, useCreateSubscription: tmp6, useCancelSubscription: tmp5, useResubscribeSubscription: tmp4, useMobileStoreFront: tmp7 };
export { useNativeIAPPayments };
export const useGoogleSkuIds = tmp3;
export const useResubscribeSubscription = tmp4;
export const useCancelSubscription = tmp5;
export const useCreateSubscription = tmp6;
export const useMobileStoreFront = tmp7;