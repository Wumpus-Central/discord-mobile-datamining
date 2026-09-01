// === Module 8221: notSupported ===

// Module 8221 (notSupported)
import timestampDefault from "timestamp" /* 3 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "updateProduct" /* 6084 */;

const require = arg1;
function notSupported() {
  error = new Error("Native hook not supported for android");
  throw error;
}
function notSupportedReturnVoid() {
  error = new Error("Native hook not supported for android");
  throw error;
}
function useNativeIAPPayments() {
  return closure_8;
}
function useGoogleSkuIds(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  const items = [closure_6];
  isFetchingGoogleSkus = _require(isFetchingGoogleSkus[5]).useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
  closure_3 = React.useRef([]);
  const fetchError = callback(React.useState(null), 2);
  callback = fetchError[1];
  const items1 = [arg1, isFetchingGoogleSkus, arg0];
  const effect = React.useEffect(() => {
    function _fetch() {
      const self = this;
      const tmp = callback(function*() {
        if (c5 === 2) {
          c5 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp7 === 3) {
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
            if (0 === v0) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = tmp3;
                c0 = tmp5;
                c0 = undefined;
                if (closure_1) {
                  ref.current = [];
                }
                const differenceResult = closure_2_1(closure_2_2[6]).difference(closure_1_0, ref.current);
                c0 = differenceResult;
                if (!closure_1_2) {
                  if (!tmp47) {
                    if (0 !== arr.length) {
                      if (0 !== differenceResult.length) {
                        ref = 1;
                        v0 = 2;
                        c5 = 1;
                        obj1 = { value: null, done: false };
                        obj1[0] = callback(closure_2_2[7]).loadInAppSkus(differenceResult);
                        return obj1;
                      }
                    }
                  }
                }
                arr = closure_1_0;
                const obj4 = closure_2_1(closure_2_2[6]);
                tmp47 = closure_1;
              }
            } else {
              if (1 === tmp8) {
                ref = 0;
                closure_1 = closure_2;
                closure_2_7.error("Unable to fetch product IDs from google play store: ", closure_1);
                v0("Unable to fetch");
                let obj2 = callback(closure_2_2[8]);
                const result = obj2.captureBillingException(closure_1);
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                obj = closure_2_1(closure_2_2[6]);
                ref.current = obj.union(ref.current, c0);
                v0(null);
                ref = 0;
              }
              ref = 0;
              c5 = 3;
              obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            }
            c5 = 3;
          } catch (tmp38) {
            closure_2 = tmp38;
            if (tmp4 === ref) {
              c5 = tmp2;
              throw tmp38;
            } else {
              v0 = tmp;
            }
          }
        }
      });
      closure_0 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    !(function fetch() {
      const self = this;
      const apply = _fetch.apply;
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
    HermesBuiltin.throwTypeError();
  } else {
    const obj = { createSubscription: null, nativePaymentsConnected: null };
    obj[0] = notSupportedReturnVoid;
    obj[1] = closure_8.nativePaymentsConnected;
    return obj;
  }
}
let closure_7 = new timestampDefault("NativePaymentHooks.android.tsx");
let closure_8 = { nativePaymentsConnected: true, storeFront: null };
const tmp2 = new timestampDefault("NativePaymentHooks.android.tsx");
let result = require("set").fileFinishedImporting("modules/payments/native/hooks/NativePaymentHooks.android.tsx");

export default { useNativeIAPPayments, useGoogleSkuIds, useCreateSubscription, useCancelSubscription, useResubscribeSubscription };
export { useNativeIAPPayments };
export { useGoogleSkuIds };
export { useResubscribeSubscription };
export { useCancelSubscription };
export { useCreateSubscription };