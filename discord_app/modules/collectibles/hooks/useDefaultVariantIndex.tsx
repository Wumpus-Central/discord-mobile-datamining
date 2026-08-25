// === Module 9493: useDefaultVariantIndex ===

// Module 9493 (useDefaultVariantIndex)
import closure_2 from "map" /* 7164 */;

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
    tmpResult = _require(7159);
  }
  return num;
};