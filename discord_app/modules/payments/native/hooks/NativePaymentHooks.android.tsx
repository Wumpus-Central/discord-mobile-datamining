// discord_app/modules/payments/native/hooks/NativePaymentHooks.android.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import IAPStore from "../../../../stores/native/IAPStore.android.tsx";

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
  return closure_9;
}
function useGoogleSkuIds(memo2, arg1, arg2) {
  _require = memo2;
  closure_1 = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  noop = undefined;
  const items = [IAPStore];
  const items1 = [flag];
  const isFetchingGoogleSkus = require("initialize").useStateFromStores(
    items,
    () => {
      let isFetchingGoogleSkusResult = flag;
      if (flag) {
        isFetchingGoogleSkusResult = IAPStore.isFetchingGoogleSkus();
      }
      return isFetchingGoogleSkusResult;
    },
    items1,
  );
  _slicedToArray = noop.useRef([]);
  const fetchError = _slicedToArray(noop.useState(null), 2);
  noop = fetchError[1];
  const items2 = [arg1, isFetchingGoogleSkus, memo2];
  const effect = noop.useEffect(() => {
    closure_0 = async function _fetch() {
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
          return { value: "HermesInternal", done: null };
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
                      const obj7 = { value: memo2(9890).loadInAppSkus(differenceResult), done: false };
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
              const result = memo2(4822).captureBillingException(closure_128_1);
              const obj3 = memo2(4822);
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
}
function useLoadedGoogleSkuIds(memo1) {
  _require = memo1;
  [first, dependencyMap] = noop.useState(() => new Set());
  let items = [IAPStore, AuthenticationStore];
  let items1 = [
    memo1,
    require("initialize").useStateFromStores(items, () => {
      if (obj.isGooglePlayBillingSupported()) {
        let isReadyResult = ready.isReady();
      } else {
        isReadyResult = authenticated.isAuthenticated();
      }
      return isReadyResult;
    }),
  ];
  const effect = noop.useEffect(() => {
    c0 = true;
    const obj = memo1(9890);
    ({ settled, release: first } = memo1(9890).retainInAppSkus(c0));
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
  const items3 = [memo1];
  const stateFromStores = require("initialize").useStateFromStores(
    items2,
    () => {
      const found = memo1.filter((item) => null != product.getProduct(item));
      return found.join(",");
    },
    items3,
  );
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
}
function useResubscribeSubscription(id) {
  return { resubscribeSubscription: notSupported, nativePaymentsConnected: closure_9.nativePaymentsConnected };
}
function useCancelSubscription(id, isACOM) {
  return { cancelSubscription: notSupported, nativePaymentsConnected: closure_9.nativePaymentsConnected };
}
function useCreateSubscription(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const obj = {
      createSubscription: notSupportedReturnVoid,
      nativePaymentsConnected: closure_9.nativePaymentsConnected,
    };
    return obj;
  }
}
function useMobileStoreFront() {
  let items = [IAPStore];
  const tmp = _slicedToArray(
    first(504).useStateFromStoresArray(items, () => {
      const items = [authStore.getUserCountry()];
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
    }),
    2,
  );
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
let closure_8 = new LoggerDefault("NativePaymentHooks.android.tsx");
let closure_9 = { nativePaymentsConnected: true, storeFront: null, canMakePayments: true };
const size = fn(2);
let result = size.fileFinishedImporting("modules/payments/native/hooks/NativePaymentHooks.android.tsx");

export default {
  useNativeIAPPayments,
  useGoogleSkuIds,
  useLoadedGoogleSkuIds,
  useCreateSubscription,
  useCancelSubscription,
  useResubscribeSubscription,
  useMobileStoreFront,
};
export { useNativeIAPPayments };
export { useGoogleSkuIds };
export { useLoadedGoogleSkuIds };
export { useResubscribeSubscription };
export { useCancelSubscription };
export { useCreateSubscription };
export { useMobileStoreFront };
