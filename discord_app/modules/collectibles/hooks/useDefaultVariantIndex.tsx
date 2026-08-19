// === Module 9173: useDefaultVariantIndex ===

// Module 9173 (useDefaultVariantIndex)
import map from "map" /* 5324 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/hooks/useDefaultVariantIndex.tsx");

export const useDefaultVariantIndex = function useDefaultVariantIndex(product) {
  const items = [closure_2];
  _require = _require(589).useStateFromStores(items, () => purchases.purchases);
  let num = 0;
  if (null != product) {
    num = 0;
    if (tmpResult.getIsVariantProduct(product)) {
      const _Math = Math;
      const variants = product.variants;
      num = Math.max(0, variants.findIndex((item, index) => !set.has(item.skuId)));
    }
    tmpResult = _require(5312);
  }
  return num;
};