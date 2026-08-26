// === Module 9561: useDefaultVariantIndex ===

// Module 9561 (useDefaultVariantIndex)
import closure_2 from "map" /* 7230 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useDefaultVariantIndex.tsx");

export const useDefaultVariantIndex = function useDefaultVariantIndex(product) {
  const items = [closure_2];
  _require = _require(589).useStateFromStores(items, () => purchases.purchases);
  let num = 0;
  if (null != product) {
    num = 0;
    if (tmpResult.getIsVariantProduct(product)) {
      const _Math = Math;
      const variants = product.variants;
      num = Math.max(0, variants.findIndex((skuId) => !set.has(skuId.skuId)));
    }
    tmpResult = _require(7225);
  }
  return num;
};