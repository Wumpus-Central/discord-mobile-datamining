// discord_app/modules/collectibles/hooks/useProductPurchaseState.tsx
import compactDefault from "../../../../_runtime/09560_compact.js";
import closure_3 from "../CollectiblesPurchaseStore.tsx";

const require = arg1;
function getProductPurchaseState(closure_1_5, skuId) {
  const _require = closure_1_5;
  let tmp = null != closure_1_5.getPurchase(skuId.skuId);
  let items = skuId.items;
  if (items == null) {
    items = [];
  }
  const tmp3Result = compactDefault(items.map((skuId) => store.getPurchase(skuId.skuId)));
  let type;
  if (skuId != null) {
    type = skuId.type;
  }
  if (require("../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx").CollectiblesItemType.BUNDLE === type) {
    if (!tmp) {
      tmp = items.length > 0 && tmp3Result.length === items.length;
      const tmp7 = items.length > 0 && tmp3Result.length === items.length;
    }
    let obj = { isPurchased: null, isPartiallyOwnedBundle: null, isPartiallyOwnedVariantsGroup: false };
    obj[0] = tmp;
    obj[1] = tmp3Result.length > 0 && tmp3Result.length < items.length;
    return obj;
  } else if (tmp5(1950).CollectiblesItemType.VARIANTS_GROUP === type) {
    const variants = skuId.variants;
    let everyResult;
    if (variants != null) {
      everyResult = variants.every((skuId) => null != store.getPurchase(skuId.skuId));
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
      flag2 = variants2.some((skuId) => null != store.getPurchase(skuId.skuId));
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
  const tmp3 = compactDefault;
  tmp5 = _require;
}
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useProductPurchaseState.tsx");

export { getProductPurchaseState };
export const useProductPurchaseState = function useProductPurchaseState(product) {
  const _require = product;
  const items = [closure_3];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresObject(items, () => closure_1_4(closure_1_3, closure_0));
};