// === Module 8719: getProductPurchaseState ===

// Module 8719 (getProductPurchaseState)
import map from "map";

const require = arg1;
function getProductPurchaseState(outer1_5, skuId) {
  const _require = outer1_5;
  let tmp = null != outer1_5.getPurchase(skuId.skuId);
  let items = skuId.items;
  if (items == null) {
    items = [];
  }
  const tmp3Result = importDefault(8720)(items.map((skuId) => outer1_5.getPurchase(skuId.skuId)));
  let type;
  if (skuId != null) {
    type = skuId.type;
  }
  if (_require(1901).CollectiblesItemType.BUNDLE === type) {
    if (!tmp) {
      tmp = items.length > 0 && tmp3Result.length === items.length;
      const tmp7 = items.length > 0 && tmp3Result.length === items.length;
    }
    let obj = { isPurchased: null, isPartiallyOwnedBundle: null, isPartiallyOwnedVariantsGroup: false };
    obj[0] = tmp;
    obj[1] = tmp3Result.length > 0 && tmp3Result.length < items.length;
    return obj;
  } else if (tmp5(1901).CollectiblesItemType.VARIANTS_GROUP === type) {
    const variants = skuId.variants;
    let everyResult;
    if (variants != null) {
      everyResult = variants.every((skuId) => null != outer1_5.getPurchase(skuId.skuId));
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
      flag2 = variants2.some((skuId) => null != outer1_5.getPurchase(skuId.skuId));
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
  const tmp3 = importDefault(8720);
  tmp5 = _require;
}
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useProductPurchaseState.tsx");

export { getProductPurchaseState };
export const useProductPurchaseState = function useProductPurchaseState(product) {
  const _require = product;
  const items = [map];
  return _require(589).useStateFromStoresObject(items, () => outer1_4(outer1_3, closure_0));
};