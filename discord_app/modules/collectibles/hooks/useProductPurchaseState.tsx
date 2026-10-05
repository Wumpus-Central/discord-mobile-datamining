// === Module 8496: useProductPurchaseState ===

// Module 8496 (useProductPurchaseState)
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import compactDefault from "compact" /* 8497 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7068 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function getProductPurchaseState(CollectiblesPurchaseStore, skuId) {
  let flag2;
  let closure_0 = CollectiblesPurchaseStore;
  let tmp = null != CollectiblesPurchaseStore.getPurchase(skuId.skuId);
  let items = skuId.items;
  if (items == null) {
    items = [];
  }
  const tmp3 = compactDefault;
  const tmp3Result = tmp3(items.map((skuId) => closure_0.getPurchase(skuId.skuId)));
  let type;
  if (skuId != null) {
    type = skuId.type;
  }
  if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
    if (!tmp) {
      tmp = items.length > 0 && tmp3Result.length === items.length;
    }
    return { isPurchased: tmp, isPartiallyOwnedBundle: tmp3Result.length > 0 && tmp3Result.length < items.length, isPartiallyOwnedVariantsGroup: false };
  } else if (CollectiblesItemType.CollectiblesItemType.VARIANTS_GROUP === type) {
    const variants = skuId.variants;
    let everyResult;
    if (variants != null) {
      everyResult = variants.every((skuId) => null != closure_0.getPurchase(skuId.skuId));
    }
    let flag = everyResult;
    if (everyResult == null) {
      flag = false;
    }
    const variants2 = skuId.variants;
    const obj3 = { isPurchased: flag, isPartiallyOwnedBundle: false, isPartiallyOwnedVariantsGroup: flag2 };
    flag2 = undefined;
    if (variants2 != null) {
      flag2 = variants2.some((skuId) => null != closure_0.getPurchase(skuId.skuId));
    }
    if (flag2) {
      flag2 = !everyResult;
    }
    if (flag2 == null) {
      flag2 = false;
    }
    return obj3;
  } else {
    return { isPurchased: tmp, isPartiallyOwnedBundle: false, isPartiallyOwnedVariantsGroup: false };
  }
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesPurchaseStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return getProductPurchaseState(CollectiblesPurchaseStore, closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresObject(first, tmp6);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [CollectiblesPurchaseStore];
  const obj = require("get initialized");
  return obj.useStateFromStoresObject(items, () => getProductPurchaseState(CollectiblesPurchaseStore, closure_0));
});
const result = size.fileFinishedImporting("modules/collectibles/hooks/useProductPurchaseState.tsx");

export { getProductPurchaseState };
export const useProductPurchaseState = tmp2;