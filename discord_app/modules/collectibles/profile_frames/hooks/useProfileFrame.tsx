// === Module 8322: useProfileFrame ===

// Module 8322 (useProfileFrame)
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7257 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7272 */;

const require = globalThis.__r;

const require = fn;
const isProfileFrameRecord = fn(7264).isProfileFrameRecord;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_frames/hooks/useProfileFrame.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useProfileFrame(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesCategoryStore, CollectiblesPurchaseStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      if (null != closure_0) {
        const product = CollectiblesCategoryStore.getProduct(closure_0);
        let first;
        if (product != null) {
          first = product.items[0];
        }
        if (isProfileFrameRecord(first)) {
          return product.items[0];
        } else {
          const purchase = CollectiblesPurchaseStore.getPurchase(closure_0);
          let first1;
          if (purchase != null) {
            first1 = purchase.items[0];
          }
          let first2;
          if (isProfileFrameRecord(first1)) {
            first2 = purchase.items[0];
          }
          return first2;
        }
      }
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7);
}) : (function useProfileFrame(arg0) {
  _require = arg0;
  const items = [CollectiblesCategoryStore, CollectiblesPurchaseStore];
  return require("initialize").useStateFromStores(items, () => {
    if (null != closure_0) {
      const product = CollectiblesCategoryStore.getProduct(closure_0);
      let first;
      if (product != null) {
        first = product.items[0];
      }
      if (isProfileFrameRecord(first)) {
        return product.items[0];
      } else {
        const purchase = CollectiblesPurchaseStore.getPurchase(closure_0);
        let first1;
        if (purchase != null) {
          first1 = purchase.items[0];
        }
        let first2;
        if (isProfileFrameRecord(first1)) {
          first2 = purchase.items[0];
        }
        return first2;
      }
    }
  });
});