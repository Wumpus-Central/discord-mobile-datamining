// === Module 13297: HeadlessCollectiblesPurchaseRunner ===

// Module 13297 (HeadlessCollectiblesPurchaseRunner)
import c from "c" /* 576 */;
import useHandleBuyNowDefault from "useHandleBuyNow" /* 13298 */;
import noop from "module_19" /* 19 */;

require = fn;
let useNativeCheckoutStore = fn(7132).useNativeCheckoutStore;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseRunner.tsx");

export const HeadlessCollectiblesPurchaseRunner = ReactCompilerGating.isReactCompilerEnabled() ? (function HeadlessCollectiblesPurchaseRunner(arg0) {
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
  const tmp5 = useNativeCheckoutStore(first);
  closure_1 = tmp5;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function b(orderRequired) {
      return orderRequired.orderRequired;
    };
    cResult[1] = fn2;
    let tmp6 = fn2;
  } else {
    tmp6 = cResult[1];
  }
  const tmp4Result = useNativeCheckoutStore(tmp6);
  closure_2 = tmp4Result;
  let id;
  if (tmp5 != null) {
    id = tmp5.id;
  }
  if (cResult[2] === analyticsLocations) {
    if (cResult[3] === onBuySettled) {
      if (cResult[4] === product) {
        if (cResult[5] === stageCollectibleChangeForEditProfile) {
          if (cResult[6] === id) {
            let tmp9 = cResult[7];
          }
          const handleBuyNow = useHandleBuyNowDefault(tmp9).handleBuyNow;
          useNativeCheckoutStore = noop.useRef(0);
          if (cResult[8] === attempt) {
            if (cResult[9] === handleBuyNow) {
              if (cResult[10] === tmp5) {
                if (cResult[11] === tmp4Result) {
                  let tmp11 = cResult[12];
                  let tmp12 = cResult[13];
                }
                const effect = noop.useEffect(tmp11, tmp12);
                return null;
              }
            }
          }
          class P {
            constructor() {
              if (closure_4.current !== attempt) {
                tmp3 = closure_2;
                if (closure_2) {
                  tmp4 = closure_1;
                  tmp5 = null;
                  tmp3 = null == closure_1;
                }
                if (!tmp3) {
                  tmp.current = tmp2;
                  tmp6 = handleBuyNow;
                  tmp7 = handleBuyNow();
                }
              }
              return;
            }
          }
          const items = [attempt, handleBuyNow, tmp5, tmp4Result];
          cResult[8] = attempt;
          cResult[9] = handleBuyNow;
          cResult[10] = tmp5;
          cResult[11] = tmp4Result;
          cResult[12] = P;
          cResult[13] = items;
          tmp12 = items;
          tmp11 = P;
        }
      }
    }
  }
  const obj2 = { product, analyticsLocations, orderId: id, onBuySettled, stageCollectibleChangeForEditProfile };
  cResult[2] = analyticsLocations;
  cResult[3] = onBuySettled;
  cResult[4] = product;
  cResult[5] = stageCollectibleChangeForEditProfile;
  cResult[6] = id;
  cResult[7] = obj2;
  tmp9 = obj2;
}) : (function HeadlessCollectiblesPurchaseRunner(attempt) {
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