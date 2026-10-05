// === Module 13000: HeadlessCollectiblesPurchaseRunner ===

// Module 13000 (HeadlessCollectiblesPurchaseRunner)
import react2 from "react" /* 576 */;
import NativeCheckoutStore from "NativeCheckoutStore" /* 6930 */;
import useHandleBuyNowDefault from "useHandleBuyNow" /* 13001 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useNativeCheckoutStore = NativeCheckoutStore.useNativeCheckoutStore;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let analyticsLocations;
  let attempt;
  let first;
  let onBuySettled;
  let product;
  let stageCollectibleChangeForEditProfile;
  const obj = react2;
  const cResult = obj.c(14);
  ({ product, attempt } = arg0);
  ({ analyticsLocations, onBuySettled, stageCollectibleChangeForEditProfile } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(orderRecord) {
      return orderRecord.orderRecord;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp4 = useNativeCheckoutStore(first);
  let closure_1 = tmp4;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(orderRequired) {
        return orderRequired.orderRequired;
      }
    }
    cResult[1] = C;
  } else {
    class C {
      constructor(orderRequired) {
        return orderRequired.orderRequired;
      }
    }
  }
  let closure_2 = useNativeCheckoutStore(C);
  useNativeCheckoutStore(C);
  if (tmp4 != null) {
    class C {
      constructor(orderRequired) {
        return orderRequired.orderRequired;
      }
    }
  }
  if (cResult[2] === analyticsLocations) {
    class C {
      constructor(orderRequired) {
        return orderRequired.orderRequired;
      }
    }
  }
  const obj2 = { product, analyticsLocations, orderId: undefined, onBuySettled, stageCollectibleChangeForEditProfile };
  cResult[2] = analyticsLocations;
  cResult[3] = onBuySettled;
  cResult[4] = product;
  cResult[5] = stageCollectibleChangeForEditProfile;
  cResult[6] = undefined;
  cResult[7] = obj2;
}) : ((attempt) => {
  let analyticsLocations;
  let id;
  let onBuySettled;
  let product;
  let stageCollectibleChangeForEditProfile;
  attempt = attempt.attempt;
  let handleBuyNow;
  let closure_4;
  ({ product, analyticsLocations, onBuySettled, stageCollectibleChangeForEditProfile } = attempt);
  const tmp = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  let closure_1 = tmp;
  const tmp2 = useNativeCheckoutStore((orderRequired) => orderRequired.orderRequired);
  let closure_2 = tmp2;
  const obj = { product, analyticsLocations, orderId: id, onBuySettled, stageCollectibleChangeForEditProfile };
  id = undefined;
  let tmp3 = useHandleBuyNowDefault;
  if (tmp != null) {
    id = tmp.id;
  }
  handleBuyNow = tmp3(obj).handleBuyNow;
  closure_4 = react.useRef(0);
  const items = [attempt, handleBuyNow, tmp, tmp2];
  const effect = react.useEffect(() => {
    if (ref.current !== attempt) {
      const tmp3 = closure_2 && null == closure_1;
      if (!tmp3) {
        tmp.current = tmp2;
        handleBuyNow();
      }
    }
  }, items);
  return null;
});
const result = size.fileFinishedImporting("modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseRunner.tsx");

export const HeadlessCollectiblesPurchaseRunner = tmp2;