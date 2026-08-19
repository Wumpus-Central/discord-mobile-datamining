// discord_app/modules/collectibles/hooks/useDefaultVariantIndex.tsx
import map from "../CollectiblesPurchaseStore.tsx";
import { getProductOrbPrice } from "../utils/CollectiblesProductUtils.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/hooks/useDefaultVariantIndex.tsx");

export const useDefaultVariantIndex = function useDefaultVariantIndex(product) {
  const items = [closure_2];
  _require = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => purchases.purchases);
  let num = 0;
  if (null != product) {
    num = 0;
    if (tmpResult.getIsVariantProduct(product)) {
      const _Math = Math;
      const variants = product.variants;
      num = Math.max(0, variants.findIndex((item, index) => !set.has(item.skuId)));
    }
    tmpResult = getProductOrbPrice;
  }
  return num;
};