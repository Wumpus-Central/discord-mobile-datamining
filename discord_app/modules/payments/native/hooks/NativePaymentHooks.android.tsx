// === Module 9398: NativePaymentHooks ===

// Module 9398 (NativePaymentHooks)
import LoggerDefault from "Logger" /* 3 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import IAPStore from "IAPStore" /* 7131 */;

require = fn;
function notSupported() {
  const error = new Error("Native hook not supported for android");
  throw error;
}
function notSupportedReturnVoid() {
  const error = new Error("Native hook not supported for android");
  throw error;
}
let closure_8 = new LoggerDefault("NativePaymentHooks.android.tsx");
let closure_9 = { nativePaymentsConnected: true, storeFront: null, canMakePayments: true };
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGoogleSkuIds(arg0, arg1, arg2) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(13);
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [IAPStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== (undefined === arg2 || arg2)) {
    const fn = function p() {
      let isFetchingGoogleSkusResult = closure_2;
      if (closure_2) {
        isFetchingGoogleSkusResult = IAPStore.isFetchingGoogleSkus();
      }
      return isFetchingGoogleSkusResult;
    };
    const items1 = [tmp4];
    cResult[1] = tmp4;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [];
    cResult[4] = items2;
    let tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  _slicedToArray = noop.useRef(tmp10);
  const tmpResult = require("initialize");
  [tmp12, noop] = noop.useState(null);
  if (cResult[5] === arg1) {
    if (cResult[6] === stateFromStores) {
      if (cResult[7] === arg0) {
        let tmp13 = cResult[8];
        let tmp14 = cResult[9];
      }
      const effect = noop.useEffect(tmp13, tmp14);
      if (cResult[10] === tmp12) {
        if (cResult[11] === stateFromStores) {
          let tmp16 = cResult[12];
        }
        return tmp16;
      }
      let obj2 = { isFetchingGoogleSkus: stateFromStores, fetchError: tmp12 };
      cResult[10] = tmp12;
      cResult[11] = stateFromStores;
      cResult[12] = obj2;
      tmp16 = obj2;
    }
  }
  const fn2 = function h() {
    closure_0 = stateFromStores(function*() {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          v3 = 2;
          if (0 === ref) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
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
              if (!c3) {
                if (!tmp46) {
                  if (0 !== tmp5.length) {
                    if (0 !== differenceResult.length) {
                      c3 = 1;
                      ref = 2;
                      v3 = 1;
                      const obj7 = { value: tmp5(9399).loadInAppSkus(differenceResult), done: false };
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
              c3 = 0;
              closure_128_1 = closure_2;
              logger.error("Unable to fetch product IDs from google play store: ", closure_128_1);
              v3("Unable to fetch");
              const result = tmp5(4784).captureBillingException(closure_128_1);
              const obj3 = tmp5(4784);
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 !== 2) {
              ref.current = closure_2_1(12).union(ref.current, closure_128_0);
              v3(null);
              c3 = 0;
              const obj = closure_2_1(12);
            }
            c3 = 0;
            v3 = 3;
            const obj8 = { value, done: true };
            return obj8;
          }
          v3 = 3;
        } catch (tmp38) {
          closure_2 = tmp38;
          if (tmp4 === c3) {
            v3 = tmp2;
            throw tmp38;
          } else {
            ref = tmp;
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
  const items3 = [arg1, stateFromStores, arg0];
  cResult[5] = arg1;
  cResult[6] = stateFromStores;
  cResult[7] = arg0;
  cResult[8] = fn2;
  cResult[9] = items3;
  tmp14 = items3;
  tmp13 = fn2;
  const tmp11 = _slicedToArray(noop.useState(null), 2);
}) : (function useGoogleSkuIds(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  noop = undefined;
  const items = [IAPStore];
  const items1 = [flag];
  const isFetchingGoogleSkus = require("initialize").useStateFromStores(items, () => {
    let isFetchingGoogleSkusResult = flag;
    if (flag) {
      isFetchingGoogleSkusResult = IAPStore.isFetchingGoogleSkus();
    }
    return isFetchingGoogleSkusResult;
  }, items1);
  _slicedToArray = noop.useRef([]);
  const fetchError = _slicedToArray(noop.useState(null), 2);
  noop = fetchError[1];
  const items2 = [arg1, isFetchingGoogleSkus, arg0];
  const effect = noop.useEffect(() => {
    closure_0 = async function _fetch2() {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          v3 = 2;
          if (0 === ref) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
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
              if (!c3) {
                if (!tmp46) {
                  if (0 !== arr.length) {
                    if (0 !== differenceResult.length) {
                      c3 = 1;
                      ref = 2;
                      v3 = 1;
                      const obj7 = { value: closure_2_0(9399).loadInAppSkus(differenceResult), done: false };
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
              c3 = 0;
              closure_128_1 = closure_2;
              logger.error("Unable to fetch product IDs from google play store: ", closure_128_1);
              v3("Unable to fetch");
              const result = closure_2_0(4784).captureBillingException(closure_128_1);
              const obj3 = closure_2_0(4784);
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 !== 2) {
              ref.current = closure_2_1(12).union(ref.current, closure_128_0);
              v3(null);
              c3 = 0;
              const obj = closure_2_1(12);
            }
            c3 = 0;
            v3 = 3;
            const obj8 = { value, done: true };
            return obj8;
          }
          v3 = 3;
        } catch (tmp38) {
          closure_2 = tmp38;
          if (tmp4 === c3) {
            v3 = tmp2;
            throw tmp38;
          } else {
            ref = tmp;
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
  }, items2);
  return { isFetchingGoogleSkus, fetchError: fetchError[0] };
});
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useLoadedGoogleSkuIds(arg0) {
  _require = arg0;
  const cResult = require("c").c(15);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      return new Set();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  let obj = require("c");
  [tmp6, importDefault] = noop.useState(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [IAPStore, AuthenticationStore];
    class S {
      constructor() {
        obj = closure_0(closure_1_2[12]);
        if (obj.isGooglePlayBillingSupported()) {
          tmp3 = closure_1_7;
          isReadyResult = closure_1_7.isReady();
        } else {
          tmp = closure_1_6;
          isReadyResult = closure_1_6.isAuthenticated();
        }
        return isReadyResult;
      }
    }
    cResult[1] = items;
    cResult[2] = S;
    let tmp8 = S;
    let tmp7 = items;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const tmp5 = _slicedToArray(noop.useState(first), 2);
  const stateFromStores = require("initialize").useStateFromStores(tmp7, tmp8);
  if (cResult[3] !== arg0) {
    const fn2 = function b() {
      c0 = true;
      const obj = closure_0(9399);
      ({ settled, release: closure_1 } = closure_0(9399).retainInAppSkus(c0));
      settled.then(() => {
        if (c0) {
          importDefault((arg0) => {
            const items = [...closure_1_0];
            return new Set(items);
          });
        }
      });
      return () => {
        c0 = false;
        closure_1_1();
      };
    };
    cResult[3] = arg0;
    cResult[4] = fn2;
    class S {
      constructor() {
        obj = closure_0(closure_1_2[12]);
        if (obj.isGooglePlayBillingSupported()) {
          tmp3 = closure_1_7;
          isReadyResult = closure_1_7.isReady();
        } else {
          tmp = closure_1_6;
          isReadyResult = closure_1_6.isAuthenticated();
        }
        return isReadyResult;
      }
    }
  } else {
    const tmp12 = cResult[4];
  }
  if (cResult[5] === arg0) {
    if (cResult[6] === stateFromStores) {
      let tmp13 = cResult[7];
    }
    const effect = noop.useEffect(tmp12, tmp13);
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [IAPStore];
      cResult[8] = items1;
      class S {
        constructor() {
          obj = closure_0(closure_1_2[12]);
          if (obj.isGooglePlayBillingSupported()) {
            tmp3 = closure_1_7;
            isReadyResult = closure_1_7.isReady();
          } else {
            tmp = closure_1_6;
            isReadyResult = closure_1_6.isAuthenticated();
          }
          return isReadyResult;
        }
      }
    } else {
      const tmp15 = cResult[8];
    }
    class S {
      constructor() {
        obj = closure_0(closure_1_2[12]);
        if (obj.isGooglePlayBillingSupported()) {
          tmp3 = closure_1_7;
          isReadyResult = closure_1_7.isReady();
        } else {
          tmp = closure_1_6;
          isReadyResult = closure_1_6.isAuthenticated();
        }
        return isReadyResult;
      }
    }
    const str = tmp(504).useStateFromStores(tmp15, tmp17, tmp18);
    if (cResult[12] === str) {
      if (cResult[13] === tmp6) {
        return cResult[14];
      }
    }
    let items2 = [];
    let num7 = HermesBuiltin.arraySpread(tmp6, 0);
    if ("" === str) {
      let items3 = [];
    } else {
      items3 = str.split(",");
    }
    HermesBuiltin.arraySpread(items3, num7);
    const set = new Set(items2);
    items2 = set;
    cResult[12] = str;
    cResult[13] = tmp6;
    num7 = 14;
    cResult[14] = set;
    const tmpResult2 = tmp(504);
  }
  const items4 = [arg0, stateFromStores];
  cResult[5] = arg0;
  cResult[6] = stateFromStores;
  cResult[7] = items4;
  tmp13 = items4;
  const tmpResult = require("initialize");
}) : (function useLoadedGoogleSkuIds(arg0) {
  _require = arg0;
  [first, dependencyMap] = noop.useState(() => new Set());
  let items = [IAPStore, AuthenticationStore];
  let items1 = [
    arg0,
    require("initialize").useStateFromStores(items, () => {
      if (obj.isGooglePlayBillingSupported()) {
        let isReadyResult = ready.isReady();
      } else {
        isReadyResult = authenticated.isAuthenticated();
      }
      return isReadyResult;
    })
  ];
  const effect = noop.useEffect(() => {
    c0 = true;
    const obj = closure_0(9399);
    ({ settled, release: first } = closure_0(9399).retainInAppSkus(c0));
    settled.then(() => {
      if (c0) {
        closure_2((arg0) => {
          const items = [...closure_1_0];
          return new Set(items);
        });
      }
    });
    return () => {
      c0 = false;
      first();
    };
  }, items1);
  let obj = require("initialize");
  const items2 = [IAPStore];
  const items3 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items2, () => {
    const found = closure_0.filter((item) => null != product.getProduct(item));
    return found.join(",");
  }, items3);
  const items4 = [first, stateFromStores];
  return noop.useMemo(() => {
    const items = [...first];
    if ("" === stateFromStores) {
      let items1 = [];
    } else {
      items1 = stateFromStores.split(",");
    }
    HermesBuiltin.arraySpread(items1, tmp);
    return new Set(items);
  }, items4);
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useResubscribeSubscription(arg0) {
  const cResult = c.c(2);
  const nativePaymentsConnected = closure_9.nativePaymentsConnected;
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
  return { resubscribeSubscription: notSupported, nativePaymentsConnected: closure_9.nativePaymentsConnected };
});
ReactCompilerGating = fn(558);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCancelSubscription(arg0, arg1) {
  const cResult = c.c(2);
  const nativePaymentsConnected = closure_9.nativePaymentsConnected;
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
  return { cancelSubscription: notSupported, nativePaymentsConnected: closure_9.nativePaymentsConnected };
});
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCreateSubscription(arg0) {
  const cResult = c.c(2);
  const nativePaymentsConnected = closure_9.nativePaymentsConnected;
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
    const obj = { createSubscription: notSupportedReturnVoid, nativePaymentsConnected: closure_9.nativePaymentsConnected };
    return obj;
  }
});
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMobileStoreFront() {
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
  return closure_9;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/payments/native/hooks/NativePaymentHooks.android.tsx");

export default { useNativeIAPPayments, useGoogleSkuIds: tmp3, useLoadedGoogleSkuIds: tmp4, useCreateSubscription: tmp7, useCancelSubscription: tmp6, useResubscribeSubscription: tmp5, useMobileStoreFront: tmp8 };
export { useNativeIAPPayments };
export const useGoogleSkuIds = tmp3;
export const useLoadedGoogleSkuIds = tmp4;
export const useResubscribeSubscription = tmp5;
export const useCancelSubscription = tmp6;
export const useCreateSubscription = tmp7;
export const useMobileStoreFront = tmp8;