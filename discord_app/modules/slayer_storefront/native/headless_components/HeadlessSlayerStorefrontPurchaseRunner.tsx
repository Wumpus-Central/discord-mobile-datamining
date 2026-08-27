// discord_app/modules/slayer_storefront/native/headless_components/HeadlessSlayerStorefrontPurchaseRunner.tsx
import closure_2 from "../../../../../_runtime/00019_noop.js";
import { useNativeCheckoutStore } from "../../../checkout/native/NativeCheckoutStore.tsx";

const result = require("set").fileFinishedImporting("modules/slayer_storefront/native/headless_components/HeadlessSlayerStorefrontPurchaseRunner.tsx");

export const HeadlessSlayerStorefrontPurchaseRunner = function HeadlessSlayerStorefrontPurchaseRunner(attempt) {
  attempt = attempt.attempt;
  const onPurchaseError = attempt.onPurchaseError;
  let React;
  useNativeCheckoutStore = undefined;
  closure_4 = undefined;
  closure_5 = undefined;
  ({ skuId, sku, analyticsLoadId, analyticsLocations, analyticsData, onPurchaseComplete } = attempt);
  const tmp = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  React = tmp;
  const tmp2 = useNativeCheckoutStore((orderRequired) => orderRequired.orderRequired);
  useNativeCheckoutStore = tmp2;
  const obj = { skuId, sku, analyticsLoadId, analyticsLocations, orderId: null, analyticsData: null, onPurchaseComplete: null, onPurchaseError: null, onPurchasePending: null };
  let id;
  if (tmp != null) {
    id = tmp.id;
  }
  obj[4] = id;
  obj[5] = analyticsData;
  obj[6] = onPurchaseComplete;
  obj[7] = function onPurchaseError() {
    return onPurchaseError(null);
  };
  obj[8] = function onPurchasePending() {

  };
  const tmp3Result = attempt(onPurchaseError[2])(obj);
  closure_4 = tmp3Result;
  closure_5 = React.useRef(0);
  const items = [attempt, tmp3Result, onPurchaseError, tmp, tmp2];
  const effect = React.useEffect(() => {
    if (ref.current !== attempt) {
      let tmp3 = closure_3;
      if (closure_3) {
        tmp3 = null == closure_2;
      }
      if (!tmp3) {
        tmp.current = tmp2;
        callback().catch(onPurchaseError);
        const promise = callback();
      }
    }
  }, items);
  return null;
};