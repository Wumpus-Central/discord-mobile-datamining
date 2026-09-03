// === Module 12810: HeadlessCollectiblesPurchaseRunner ===

// Module 12810 (HeadlessCollectiblesPurchaseRunner)
import closure_2 from "noop" /* 19 */;
import { useNativeCheckoutStore } from "context" /* 7179 */;

const result = require("set").fileFinishedImporting("modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseRunner.tsx");

export const HeadlessCollectiblesPurchaseRunner = function HeadlessCollectiblesPurchaseRunner(attempt) {
  attempt = attempt.attempt;
  dependencyMap = undefined;
  let React;
  let handleBuyNow;
  closure_4 = undefined;
  ({ product, analyticsLocations, onBuy, onBuySettled } = attempt);
  const tmp = handleBuyNow((orderRecord) => orderRecord.orderRecord);
  dependencyMap = tmp;
  const tmp2 = handleBuyNow((orderRequired) => orderRequired.orderRequired);
  React = tmp2;
  const obj = { product, analyticsLocations, onBuy, orderId: null, onBuySettled: null };
  let id;
  if (tmp != null) {
    id = tmp.id;
  }
  obj[3] = id;
  obj[4] = onBuySettled;
  handleBuyNow = attempt(12811)(obj).handleBuyNow;
  closure_4 = React.useRef(0);
  const items = [attempt, handleBuyNow, tmp, tmp2];
  const effect = React.useEffect(() => {
    if (ref.current !== attempt) {
      let tmp3 = closure_2;
      if (closure_2) {
        tmp3 = null == closure_1;
      }
      if (!tmp3) {
        tmp.current = tmp2;
        handleBuyNow();
      }
    }
  }, items);
  return null;
};