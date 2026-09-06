// discord_app/modules/slayer_storefront/native/headless_components/HeadlessSlayerStorefrontPurchaseRunner.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let useNativeCheckoutStore = fn(7424).useNativeCheckoutStore;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/slayer_storefront/native/headless_components/HeadlessSlayerStorefrontPurchaseRunner.tsx",
);

export const HeadlessSlayerStorefrontPurchaseRunner = function HeadlessSlayerStorefrontPurchaseRunner(attempt) {
  attempt = attempt.attempt;
  ({ onPurchaseComplete: importDefault, onPurchaseError } = attempt);
  useNativeCheckoutStore = undefined;
  onPurchaseError = undefined;
  closure_9 = undefined;
  ({ skuId, sku, analyticsLocations } = attempt);
  const tmp = useNativeCheckoutStore((analyticsFields) => analyticsFields.analyticsFields);
  noop = tmp;
  const tmp2 = useNativeCheckoutStore((setCheckoutFailed) => setCheckoutFailed.setCheckoutFailed);
  useNativeCheckoutStore = tmp2;
  let tmp3 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  closure_5 = tmp3;
  const tmp4 = useNativeCheckoutStore((orderRequired) => orderRequired.orderRequired);
  closure_6 = tmp4;
  noop.useRef(false);
  const items = [tmp, tmp2, onPurchaseError];
  onPurchaseError = noop.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      AnalyticsUtilsDefault.track(AnalyticEvents.PAYMENT_FLOW_FAILED, closure_3);
      closure_4();
    }
    onPurchaseError();
  }, items);
  let obj = {
    skuId,
    sku,
    analyticsLoadId: tmp.load_id,
    analyticsLocations,
    orderId: null,
    analyticsData: null,
    onPurchaseComplete: null,
    onPurchaseError: null,
    onPurchasePending: null,
  };
  let id;
  if (tmp3 != null) {
    id = tmp3.id;
  }
  obj.orderId = id;
  obj.analyticsData = tmp;
  obj.onPurchaseComplete = function onPurchaseComplete() {
    closure_7.current = true;
    if (obj.isIOS()) {
      AnalyticsUtilsDefault.track(AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, closure_3);
    }
    closure_1_1();
    obj = PlatformUtils;
  };
  obj.onPurchaseError = onPurchaseError;
  obj.onPurchasePending = function onPurchasePending() {};
  const tmp6Result = require("useMobileSocialLayerPurchaseSKU")(obj);
  closure_9 = tmp6Result;
  obj.useRef(0);
  const items1 = [attempt, tmp6Result, onPurchaseError, tmp3, tmp4];
  const effect = obj.useEffect(() => {
    if (ref2.current !== attempt) {
      let tmp3 = closure_6;
      if (closure_6) {
        tmp3 = null == closure_5;
      }
      if (!tmp3) {
        tmp.current = tmp2;
        closure_7.current = false;
        closure_9().catch(callback);
        const promise = closure_9();
      }
    }
  }, items1);
  return null;
};
