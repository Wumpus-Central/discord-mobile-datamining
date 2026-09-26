// === Module 8667: NativePaymentHooks ===

// Module 8667 (NativePaymentHooks)
import LoggerDefault from "Logger" /* 3 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 6658 */;

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
function useGoogleSkuIds(memo1, arg1) {
  _require = memo1;
  closure_1 = arg1;
  const items = [IAPStore];
  isFetchingGoogleSkus = require("initialize").useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
  closure_3 = noop.useRef([]);
  const fetchError = _slicedToArray(noop.useState(null), 2);
  _slicedToArray = fetchError[1];
  const items1 = [arg1, isFetchingGoogleSkus, memo1];
  const effect = noop.useEffect(() => {
    closure_0 = async function _fetch() {
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
                      const obj7 = { value: memo1(8668).loadInAppSkus(differenceResult), done: false };
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
              const result = memo1(4503).captureBillingException(closure_128_1);
              const obj3 = memo1(4503);
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
}
function useResubscribeSubscription(id) {
  return { resubscribeSubscription: notSupported, nativePaymentsConnected: closure_8.nativePaymentsConnected };
}
function useCancelSubscription(id, isACOM) {
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
function useMobileStoreFront() {
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
}
let closure_7 = new LoggerDefault("NativePaymentHooks.android.tsx");
let closure_8 = { nativePaymentsConnected: true, storeFront: null, canMakePayments: true };
const size = fn(2);
let result = size.fileFinishedImporting("modules/payments/native/hooks/NativePaymentHooks.android.tsx");

export default { useNativeIAPPayments, useGoogleSkuIds, useCreateSubscription, useCancelSubscription, useResubscribeSubscription, useMobileStoreFront };
export { useNativeIAPPayments };
export { useGoogleSkuIds };
export { useResubscribeSubscription };
export { useCancelSubscription };
export { useCreateSubscription };
export { useMobileStoreFront };