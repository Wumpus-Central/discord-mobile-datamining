// discord_app/modules/collectibles/hooks/useDefaultVariantIndex.tsx
import CollectiblesPurchaseStore from "../CollectiblesPurchaseStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useDefaultVariantIndex.tsx");

export const useDefaultVariantIndex = function useDefaultVariantIndex(product) {
  const items = [CollectiblesPurchaseStore];
  _require = require("initialize").useStateFromStores(items, () => purchases.purchases);
  let num = 0;
  if (null != product) {
    num = 0;
    if (tmpResult.getIsVariantProduct(product)) {
      const _Math = Math;
      const variants = product.variants;
      num = Math.max(
        0,
        variants.findIndex((skuId) => !set.has(skuId.skuId)),
      );
    }
    tmpResult = require("CollectiblesProductUtils");
  }
  return num;
};
