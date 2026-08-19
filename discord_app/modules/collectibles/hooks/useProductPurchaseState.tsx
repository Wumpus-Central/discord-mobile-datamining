// discord_app/modules/collectibles/hooks/useProductPurchaseState.tsx
import compactDefault from "../../../../_runtime/09244_compact.js";
import map from "../CollectiblesPurchaseStore.tsx";

const require = fn;
function getProductPurchaseState(closure_1_5, skuId) {
  const _require = closure_1_5;
  let tmp = null != closure_1_5.getPurchase(skuId.skuId);
  let items = skuId.items;
  if (items == null) {
    items = [];
  }
  const tmp3Result = compactDefault(items.map((item, index) => store.getPurchase(item.skuId)));
  let type;
  if (skuId != null) {
    type = skuId.type;
  }
  if (require("../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx").CollectiblesItemType.BUNDLE === type) {
    if (!tmp) {
      tmp = items.length > 0 && tmp3Result.length === items.length;
    }
    let obj = { isPurchased: null, isPartiallyOwnedBundle: null, isPartiallyOwnedVariantsGroup: false };
    obj[0] = tmp;
    obj[1] = tmp3Result.length > 0 && tmp3Result.length < items.length;
    return obj;
  } else if (tmp5(1949).CollectiblesItemType.VARIANTS_GROUP === type) {
    const variants = skuId.variants;
    let everyResult;
    if (variants != null) {
      everyResult = variants.every((item, index) => null != store.getPurchase(item.skuId));
    }
    let flag = everyResult;
    if (everyResult == null) {
      flag = false;
    }
    obj = { isPurchased: null, isPartiallyOwnedBundle: false, isPartiallyOwnedVariantsGroup: null };
    obj[0] = flag;
    const variants2 = skuId.variants;
    let flag2;
    if (variants2 != null) {
      flag2 = variants2.some((item, index) => null != store.getPurchase(item.skuId));
    }
    if (flag2) {
      flag2 = !everyResult;
    }
    if (flag2 == null) {
      flag2 = false;
    }
    obj[2] = flag2;
    return obj;
  } else {
    obj = { isPurchased: null, isPartiallyOwnedBundle: false, isPartiallyOwnedVariantsGroup: false };
    obj[0] = tmp;
    return obj;
  }
  tmp5 = _require;
}
const result = require("obj132").fileFinishedImporting("modules/collectibles/hooks/useProductPurchaseState.tsx");

export { getProductPurchaseState };
export const useProductPurchaseState = function useProductPurchaseState(product) {
  const _require = product;
  const items = [closure_3];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresObject(items, () => getProductPurchaseState(closure_1_3, closure_0));
};