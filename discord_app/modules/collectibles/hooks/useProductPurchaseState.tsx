// discord_app/modules/collectibles/hooks/useProductPurchaseState.tsx
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import compactDefault from "../../../../_runtime/08843_compact.js";
import CollectiblesPurchaseStore from "../CollectiblesPurchaseStore.tsx";

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
    let obj = {
      isPurchased: tmp,
      isPartiallyOwnedBundle: tmp3Result.length > 0 && tmp3Result.length < items.length,
      isPartiallyOwnedVariantsGroup: false,
    };
    return obj;
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
    obj = { isPurchased: flag, isPartiallyOwnedBundle: false, isPartiallyOwnedVariantsGroup: null };
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
    obj.isPartiallyOwnedVariantsGroup = flag2;
    return obj;
  } else {
    obj = { isPurchased: tmp, isPartiallyOwnedBundle: false, isPartiallyOwnedVariantsGroup: false };
    return obj;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useProductPurchaseState.tsx");

export { getProductPurchaseState };
export const useProductPurchaseState = function useProductPurchaseState(product) {
  _require = product;
  const items = [CollectiblesPurchaseStore];
  return require("initialize").useStateFromStoresObject(items, () =>
    getProductPurchaseState(CollectiblesPurchaseStore, closure_0),
  );
};
