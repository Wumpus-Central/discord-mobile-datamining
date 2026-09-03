// === Module 10812: HeadlessSlayerStorefrontPurchaseRunner ===

// Module 10812 (HeadlessSlayerStorefrontPurchaseRunner)
import closure_3 from "noop" /* 19 */;
import { useNativeCheckoutStore } from "context" /* 7179 */;
import { AnalyticEvents } from "ME" /* 673 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/slayer_storefront/native/headless_components/HeadlessSlayerStorefrontPurchaseRunner.tsx");

export const HeadlessSlayerStorefrontPurchaseRunner = function HeadlessSlayerStorefrontPurchaseRunner(attempt) {
  attempt = attempt.attempt;
  ({ onPurchaseComplete: importDefault, onPurchaseError } = attempt);
  let React;
  useNativeCheckoutStore = undefined;
  closure_5 = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  let callback;
  closure_9 = undefined;
  closure_10 = undefined;
  ({ skuId, sku, analyticsLocations } = attempt);
  const tmp = useNativeCheckoutStore((analyticsFields) => analyticsFields.analyticsFields);
  React = tmp;
  const tmp2 = useNativeCheckoutStore((setCheckoutFailed) => setCheckoutFailed.setCheckoutFailed);
  useNativeCheckoutStore = tmp2;
  let tmp3 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  closure_5 = tmp3;
  const tmp4 = useNativeCheckoutStore((orderRequired) => orderRequired.orderRequired);
  closure_6 = tmp4;
  let obj = React;
  closure_7 = React.useRef(false);
  const items = [tmp, tmp2, onPurchaseError];
  callback = React.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      closure_1_1(onPurchaseError[3]).track(constants.PAYMENT_FLOW_FAILED, closure_3);
      callback2();
      const obj = closure_1_1(onPurchaseError[3]);
    }
    onPurchaseError();
  }, items);
  obj = { skuId, sku, analyticsLoadId: tmp.load_id, analyticsLocations, orderId: null, analyticsData: null, onPurchaseComplete: null, onPurchaseError: null, onPurchasePending: null };
  let id;
  if (tmp3 != null) {
    id = tmp3.id;
  }
  obj[4] = id;
  obj[5] = tmp;
  obj[6] = function onPurchaseComplete() {
    closure_7.current = true;
    if (obj.isIOS()) {
      closure_1_1(onPurchaseError[3]).track(constants.PAYMENT_FLOW_SUCCEEDED, closure_3);
      const obj2 = closure_1_1(onPurchaseError[3]);
    }
    callback();
  };
  obj[7] = callback;
  obj[8] = function onPurchasePending() {

  };
  const tmp6Result = importDefault(onPurchaseError[4])(obj);
  closure_9 = tmp6Result;
  closure_10 = obj.useRef(0);
  const items1 = [attempt, tmp6Result, callback, tmp3, tmp4];
  const effect = obj.useEffect(() => {
    if (ref2.current !== attempt) {
      let tmp3 = closure_6;
      if (closure_6) {
        tmp3 = null == closure_5;
      }
      if (!tmp3) {
        tmp.current = tmp2;
        closure_7.current = false;
        callback3().catch(callback);
        const promise = callback3();
      }
    }
  }, items1);
  return null;
};