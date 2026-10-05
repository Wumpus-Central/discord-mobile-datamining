// discord_app/modules/slayer_storefront/native/headless_components/HeadlessSlayerStorefrontPurchaseRunner.tsx
import Constants from "../../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import NativeCheckoutStore from "../../../checkout/native/NativeCheckoutStore.tsx";
import react_mod from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let onPurchaseComplete, ref;

let react = react_mod;
let useNativeCheckoutStore = NativeCheckoutStore.useNativeCheckoutStore;
const AnalyticEvents = Constants.AnalyticEvents;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPurchaseComplete) => {
      let analyticsLocations;
      let attempt;
      let closure_3;
      let closure_4;
      let first;
      let onPurchaseError;
      let ref2;
      let sku;
      let skuId;
      let obj = attempt(onPurchaseError[4]);
      const cResult = obj.c(27);
      ({ skuId, sku, analyticsLocations, attempt } = onPurchaseComplete);
      onPurchaseComplete = onPurchaseComplete.onPurchaseComplete;
      onPurchaseError = onPurchaseComplete.onPurchaseError;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s(analyticsFields) {
          return analyticsFields.analyticsFields;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      let tmp3 = useNativeCheckoutStore;
      const tmp4 = useNativeCheckoutStore(first);
      react = tmp4;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor(setCheckoutFailed) {
            return setCheckoutFailed.setCheckoutFailed;
          }
        }
        cResult[1] = P;
      } else {
        class P {
          constructor(setCheckoutFailed) {
            return setCheckoutFailed.setCheckoutFailed;
          }
        }
      }
      const tmp3Result = tmp3(P);
      useNativeCheckoutStore = tmp3Result;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(orderRecord) {
            return orderRecord.orderRecord;
          }
        }
        cResult[2] = S;
      } else {
        class S {
          constructor(orderRecord) {
            return orderRecord.orderRecord;
          }
        }
      }
      let closure_5 = tmp3(S);
      tmp3(S);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor(orderRequired) {
            return orderRequired.orderRequired;
          }
        }
        cResult[3] = C;
      } else {
        class C {
          constructor(orderRequired) {
            return orderRequired.orderRequired;
          }
        }
      }
      let closure_6 = tmp3(C);
      tmp3(C);
      ref = react.useRef(false);
      if (cResult[4] === tmp4) {
        class C {
          constructor(orderRequired) {
            return orderRequired.orderRequired;
          }
        }
      }
      class L {
        constructor() {
          if (!ref.current) {
            tmp.current = true;
            const obj = AnalyticsUtilsDefault;
            obj.track(AnalyticEvents.PAYMENT_FLOW_FAILED, closure_3);
            closure_4();
          }
          onPurchaseError();
        }
      }
      cResult[4] = tmp4;
      cResult[5] = onPurchaseError;
      cResult[6] = tmp3Result;
      cResult[7] = L;
    }
  : (attempt) => {
      let analyticsLocations;
      let closure_3;
      let closure_4;
      let id;
      let onPurchaseError;
      let sku;
      let skuId;
      attempt = attempt.attempt;
      ({ onPurchaseComplete: importDefault, onPurchaseError } = attempt);
      useNativeCheckoutStore = undefined;
      onPurchaseError = undefined;
      let closure_9;
      let ref2;
      ({ skuId, sku, analyticsLocations } = attempt);
      const tmp = useNativeCheckoutStore((analyticsFields) => analyticsFields.analyticsFields);
      react = tmp;
      const tmp2 = useNativeCheckoutStore((setCheckoutFailed) => setCheckoutFailed.setCheckoutFailed);
      useNativeCheckoutStore = tmp2;
      let tmp3 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
      let closure_5 = tmp3;
      const tmp4 = useNativeCheckoutStore((orderRequired) => orderRequired.orderRequired);
      let closure_6 = tmp4;
      let obj = react;
      ref = react.useRef(false);
      const items = [tmp, tmp2, onPurchaseError];
      onPurchaseError = react.useCallback(() => {
        if (!ref.current) {
          tmp.current = true;
          const obj = AnalyticsUtilsDefault;
          obj.track(AnalyticEvents.PAYMENT_FLOW_FAILED, closure_3);
          closure_4();
        }
        onPurchaseError();
      }, items);
      let obj2 = {
        skuId,
        sku,
        analyticsLoadId: tmp.load_id,
        analyticsLocations,
        orderId: id,
        analyticsData: tmp,
        onPurchaseComplete() {
          ref.current = true;
          const obj = PlatformUtils;
          if (obj.isIOS()) {
            const obj2 = AnalyticsUtilsDefault;
            obj2.track(AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, closure_3);
          }
          importDefault();
        },
        onPurchaseError,
        onPurchasePending() {},
      };
      id = undefined;
      const tmp6 = require("useMobileSocialLayerPurchaseSKU");
      if (tmp3 != null) {
        id = tmp3.id;
      }
      const tmp6Result = tmp6(obj2);
      closure_9 = tmp6Result;
      ref2 = obj.useRef(0);
      const items1 = [attempt, tmp6Result, onPurchaseError, tmp3, tmp4];
      const effect = obj.useEffect(() => {
        if (ref2.current !== attempt) {
          const tmp3 = closure_6 && null == closure_5;
          if (!tmp3) {
            tmp.current = tmp2;
            ref.current = false;
            const promise = closure_9();
            promise.catch(callback);
          }
        }
      }, items1);
      return null;
    };
const result = size.fileFinishedImporting(
  "modules/slayer_storefront/native/headless_components/HeadlessSlayerStorefrontPurchaseRunner.tsx",
);

export const HeadlessSlayerStorefrontPurchaseRunner = tmp2;
