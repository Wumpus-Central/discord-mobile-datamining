// discord_app/modules/collectibles/hooks/useProductPurchaseState.tsx
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import compactDefault from "../../../../_runtime/08530_compact.js";
import CollectiblesPurchaseStore from "../CollectiblesPurchaseStore.tsx";

const require = globalThis.__r;

require = fn;
function getProductPurchaseState(CollectiblesPurchaseStore, skuId) {
  let tmp = null != CollectiblesPurchaseStore.getPurchase(skuId.skuId);
  let items = skuId.items;
  if (items == null) {
    items = [];
  }
  const tmp3Result = compactDefault(items.map((skuId) => CollectiblesPurchaseStore.getPurchase(skuId.skuId)));
  let type;
  if (skuId != null) {
    type = skuId.type;
  }
  if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
    if (!tmp) {
      tmp = items.length > 0 && tmp3Result.length === items.length;
      const tmp7 = items.length > 0 && tmp3Result.length === items.length;
    }
    const obj2 = {
      isPurchased: tmp,
      isPartiallyOwnedBundle: tmp3Result.length > 0 && tmp3Result.length < items.length,
      isPartiallyOwnedVariantsGroup: false,
    };
    return obj2;
  } else if (CollectiblesItemType.CollectiblesItemType.VARIANTS_GROUP === type) {
    const variants = skuId.variants;
    let everyResult;
    if (variants != null) {
      everyResult = variants.every((skuId) => null != CollectiblesPurchaseStore.getPurchase(skuId.skuId));
    }
    let flag = everyResult;
    if (everyResult == null) {
      flag = false;
    }
    const obj3 = { isPurchased: flag, isPartiallyOwnedBundle: false, isPartiallyOwnedVariantsGroup: null };
    const variants2 = skuId.variants;
    let flag2;
    if (variants2 != null) {
      flag2 = variants2.some((skuId) => null != CollectiblesPurchaseStore.getPurchase(skuId.skuId));
    }
    if (flag2) {
      flag2 = !everyResult;
    }
    if (flag2 == null) {
      flag2 = false;
    }
    obj3.isPartiallyOwnedVariantsGroup = flag2;
    return obj3;
  } else {
    const obj = { isPurchased: tmp, isPartiallyOwnedBundle: false, isPartiallyOwnedVariantsGroup: false };
    return obj;
  }
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useProductPurchaseState.tsx");

export { getProductPurchaseState };
export const useProductPurchaseState = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CollectiblesPurchaseStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          return getProductPurchaseState(CollectiblesPurchaseStore, closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      return require("initialize").useStateFromStoresObject(first, tmp6);
    }
  : (arg0) => {
      _require = arg0;
      const items = [CollectiblesPurchaseStore];
      return require("initialize").useStateFromStoresObject(items, () =>
        getProductPurchaseState(CollectiblesPurchaseStore, closure_0),
      );
    };
