// === Module 13449: CollectiblesRecommendationUtils ===

// Module 13449 (CollectiblesRecommendationUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesRecommendationUtils.tsx");

export const reorderCollectiblesByRecommendation = function reorderCollectiblesByRecommendation(items, arr) {
  if (items.length > 1) {
    if (0 !== arr.length) {
      const _Map = Map;
      const map = new Map(items.map((skuId) => {
        const items = [skuId.skuId, skuId];
        return items;
      }));
      items = [];
      const iter = arr[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        value = map.get(nextResult);
        if (null != value) {
          arr = items.push(tmp6);
          let deleteResult = map.delete(tmp4);
        }
        continue;
      }
      let tmp11 = items;
      if (items.length > 0) {
        const items1 = [];
        HermesBuiltin.arraySpread(map.values(), HermesBuiltin.arraySpread(items, 0));
        tmp11 = items1;
        const arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
      }
      return tmp11;
    }
  }
  return items;
};