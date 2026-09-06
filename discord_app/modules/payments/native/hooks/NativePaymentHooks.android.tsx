// === Module 9366: NativePaymentHooks ===

// Module 9366 (NativePaymentHooks)
import LoggerDefault from "Logger" /* 3 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7237 */;

const require = fn;
function notSupported() {
  const error = new Error("Native hook not supported for android");
  throw error;
}
function notSupportedReturnVoid() {
  const error = new Error("Native hook not supported for android");
  throw error;
}
function useNativeIAPPayments() {
  return closure_8;
}
function useGoogleSkuIds(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const items = [IAPStore];
  isFetchingGoogleSkus = require("initialize").useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
  closure_3 = noop.useRef([]);
  const fetchError = _slicedToArray(noop.useState(null), 2);
  _slicedToArray = fetchError[1];
  const items1 = [arg1, isFetchingGoogleSkus, arg0];
  const effect = noop.useEffect(() => {
    closure_0 = async function _fetch() {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
          if (0 === v2) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
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
                      const obj1 = { value: closure_2_0(9367).loadInAppSkus(differenceResult), done: false };
                      return obj1;
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
              let obj2 = closure_2_0(4233);
              const result = obj2.captureBillingException(closure_128_1);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              obj = closure_2_1(12);
              ref.current = obj.union(ref.current, closure_128_0);
              v2(null);
              ref = 0;
            }
            ref = 0;
            c5 = 3;
            obj2 = { value, done: true };
            return obj2;
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
}
function useResubscribeSubscription(arg0) {
  return { resubscribeSubscription: notSupported, nativePaymentsConnected: closure_8.nativePaymentsConnected };
}
function useCancelSubscription(arg0, arg1) {
  return { cancelSubscription: notSupported, nativePaymentsConnected: closure_8.nativePaymentsConnected };
}
function useCreateSubscription(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const obj = { createSubscription: notSupportedReturnVoid, nativePaymentsConnected: closure_8.nativePaymentsConnected };
    return obj;
  }
}
let closure_7 = new LoggerDefault("NativePaymentHooks.android.tsx");
let closure_8 = { nativePaymentsConnected: true, storeFront: null };
const size = fn(2);
let result = size.fileFinishedImporting("modules/payments/native/hooks/NativePaymentHooks.android.tsx");

export default { useNativeIAPPayments, useGoogleSkuIds, useCreateSubscription, useCancelSubscription, useResubscribeSubscription };
export { useNativeIAPPayments };
export { useGoogleSkuIds };
export { useResubscribeSubscription };
export { useCancelSubscription };
export { useCreateSubscription };