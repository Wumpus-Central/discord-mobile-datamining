// === Module 13007: CollectiblesRecommendationUtils ===

// Module 13007 (CollectiblesRecommendationUtils)
import size from "module_2" /* 2 */;

let map;

const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesRecommendationUtils.tsx");

export const reorderCollectiblesByRecommendation = function reorderCollectiblesByRecommendation(items, arr) {
  if (items.length > 1) {
    if (0 !== arr.length) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map(items.map((skuId) => {
        const items = [skuId.skuId, skuId];
        return items;
      }));
      items = [];
      const iter = arr[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        let value = map.get(nextResult);
        if (null != value) {
          arr = items.push(tmp6);
          let deleteResult = map.delete(tmp4);
        }
        continue;
      }
      let tmp11 = items;
      if (items.length > 0) {
        const items1 = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items1, items, 0);
        HermesBuiltin.arraySpread(items1, map.values(), arraySpreadResult);
        tmp11 = items1;
      }
      return tmp11;
    }
  }
  return items;
};