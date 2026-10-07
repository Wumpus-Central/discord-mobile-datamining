// === Module 13019: HeadlessCollectiblesPurchaseRunner ===

// Module 13019 (HeadlessCollectiblesPurchaseRunner)
import c from "c" /* 576 */;
import useHandleBuyNowDefault from "useHandleBuyNow" /* 13020 */;
import noop from "module_19" /* 19 */;

require = fn;
const useNativeCheckoutStore = fn(6943).useNativeCheckoutStore;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseRunner.tsx");

export const HeadlessCollectiblesPurchaseRunner = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(14);
  ({ product, attempt } = arg0);
  ({ analyticsLocations, onBuySettled, stageCollectibleChangeForEditProfile } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(orderRecord) {
      return orderRecord.orderRecord;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp4 = useNativeCheckoutStore(first);
  closure_1 = tmp4;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(arg0) {
        return arg0.orderRequired;
      }
    }
    cResult[1] = C;
  } else {
    class C {
      constructor(arg0) {
        return arg0.orderRequired;
      }
    }
  }
  closure_2 = useNativeCheckoutStore(C);
  if (tmp4 != null) {
    class C {
      constructor(arg0) {
        return arg0.orderRequired;
      }
    }
  }
  if (cResult[2] === analyticsLocations) {
    class C {
      constructor(arg0) {
        return arg0.orderRequired;
      }
    }
  }
  cResult[2] = analyticsLocations;
  cResult[3] = onBuySettled;
  cResult[4] = product;
  cResult[5] = stageCollectibleChangeForEditProfile;
  cResult[6] = undefined;
  cResult[7] = { product, analyticsLocations, orderId: undefined, onBuySettled, stageCollectibleChangeForEditProfile };
  const obj2 = { product, analyticsLocations, orderId: undefined, onBuySettled, stageCollectibleChangeForEditProfile };
  const tmp3Result = useNativeCheckoutStore(C);
}) : ((attempt) => {
  attempt = attempt.attempt;
  let handleBuyNow;
  ({ product, analyticsLocations, onBuySettled, stageCollectibleChangeForEditProfile } = attempt);
  const tmp = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  closure_1 = tmp;
  const tmp2 = useNativeCheckoutStore((orderRequired) => orderRequired.orderRequired);
  closure_2 = tmp2;
  const obj = { product, analyticsLocations, orderId: null, onBuySettled: null, stageCollectibleChangeForEditProfile: null };
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
});