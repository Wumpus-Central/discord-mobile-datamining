import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { getProductOrbPrice } from "../utils/CollectiblesProductUtils.tsx";
// discord_app/modules/collectibles/hooks/useDefaultVariantIndex.tsx
import map from "map";

const require = arg1;
const result = require("getProductOrbPrice").fileFinishedImporting("modules/collectibles/hooks/useDefaultVariantIndex.tsx");

export const useDefaultVariantIndex = function useDefaultVariantIndex(product) {
  const items = [map];
  _require = _initialize.useStateFromStores(items, () => purchases.purchases);
  let num = 0;
  if (null != product) {
    num = 0;
    if (tmpResult.getIsVariantProduct(product)) {
      const _Math = Math;
      const variants = product.variants;
      num = Math.max(0, variants.findIndex((skuId) => !set.has(skuId.skuId)));
    }
    tmpResult = _getProductOrbPrice;
  }
  return num;
};