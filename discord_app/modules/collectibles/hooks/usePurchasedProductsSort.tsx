// === Module 15077: usePurchasedProductsSort ===

// Module 15077 (usePurchasedProductsSort)
import _mod19 from "module_19" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7558 */;
import size from "module_2" /* 2 */;

let useMemo = _mod19.useMemo;
let closure_4 = { NOT_PURCHASED: 0, [0]: "NOT_PURCHASED", PARTIAL_OWNED_BUNDLE: 1, [1]: "PARTIAL_OWNED_BUNDLE", PURCHASED: 2, [2]: "PURCHASED" };
const result = size.fileFinishedImporting("modules/collectibles/hooks/usePurchasedProductsSort.tsx");

export const usePurchasedProductsSort = function usePurchasedProductsSort(memo) {
  _require = memo;
  let items = [CollectiblesPurchaseStore];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => purchases.purchases);
  const items1 = [stateFromStores];
  const tmp2 = useMemo(() => {
    const items = [...stateFromStores];
    return items.map((item) => {
      [tmp] = item;
      return tmp;
    });
  }, items1);
  useMemo = tmp2;
  let items2 = [memo, tmp2];
  return useMemo(() => {
    let items = [...closure_0];
    return items.sort((type, type2) => {
      const obj = closure_1_2;
      if (type.type === closure_0(stateFromStores[2]).CollectiblesItemType.BUNDLE) {
        const items = type.items;
        if (items.some((skuId) => obj.includes(skuId.skuId))) {
          let NOT_PURCHASED = constants.PARTIAL_OWNED_BUNDLE;
          let tmp4 = constants;
        }
        if (type2.type === tmp(tmp2[2]).CollectiblesItemType.BUNDLE) {
          const items2 = type2.items;
          if (items2.some((skuId) => obj.includes(skuId.skuId))) {
            let PARTIAL_OWNED_BUNDLE = tmp4.PARTIAL_OWNED_BUNDLE;
          }
          return NOT_PURCHASED - PARTIAL_OWNED_BUNDLE;
        }
        let tmpResult = tmp(tmp2[3]);
        if (tmpResult.getIsVariantProduct(type2)) {
          const variants2 = type2.variants;
          variants2.every((skuId) => obj.includes(skuId.skuId)) ? tmp4.PURCHASED : tmp4.NOT_PURCHASED;
        } else {
          PARTIAL_OWNED_BUNDLE = obj.includes(type2.skuId) ? tmp4.PURCHASED : tmp4.NOT_PURCHASED;
        }
      }
      tmpResult = tmp(tmp2[3]);
      if (tmpResult.getIsVariantProduct(type)) {
        const variants = type.variants;
        if (variants.every((skuId) => obj.includes(skuId.skuId))) {
          let NOT_PURCHASED2 = tmp5.PURCHASED;
        } else {
          NOT_PURCHASED2 = tmp5.NOT_PURCHASED;
        }
      } else if (obj.includes(type.skuId)) {
        NOT_PURCHASED = tmp3.PURCHASED;
        tmp4 = tmp3;
      } else {
        NOT_PURCHASED = tmp3.NOT_PURCHASED;
        tmp4 = tmp3;
      }
    });
  }, items2);
};