// === Module 13239: HeadlessCollectiblesPurchaseRunner ===

// Module 13239 (HeadlessCollectiblesPurchaseRunner)
import useHandleBuyNowDefault from "useHandleBuyNow" /* 13240 */;
import noop from "module_19" /* 19 */;

const useNativeCheckoutStore = fn(7476).useNativeCheckoutStore;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseRunner.tsx");

export const HeadlessCollectiblesPurchaseRunner = function HeadlessCollectiblesPurchaseRunner(attempt) {
  attempt = attempt.attempt;
  let handleBuyNow;
  ({ product, analyticsLocations, onBuy, onBuySettled, stageCollectibleChangeForEditProfile } = attempt);
  const tmp = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  closure_1 = tmp;
  const tmp2 = useNativeCheckoutStore((orderRequired) => orderRequired.orderRequired);
  closure_2 = tmp2;
  const obj = { product, analyticsLocations, onBuy, orderId: null, onBuySettled: null, stageCollectibleChangeForEditProfile: null };
  let id;
  if (tmp != null) {
    id = tmp.id;
  }
  obj.orderId = id;
  obj.onBuySettled = onBuySettled;
  obj.stageCollectibleChangeForEditProfile = stageCollectibleChangeForEditProfile;
  handleBuyNow = useHandleBuyNowDefault(obj).handleBuyNow;
  noop.useRef(0);
  const items = [attempt, handleBuyNow, tmp, tmp2];
  const effect = noop.useEffect(() => {
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