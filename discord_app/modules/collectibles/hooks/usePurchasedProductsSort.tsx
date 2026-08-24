// === Module 14499: usePurchasedProductsSort ===

// Module 14499 (usePurchasedProductsSort)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import closure_3 from "map" /* 5329 */;

let useMemo = noop.useMemo;
let closure_4 = { NOT_PURCHASED: 0, [0]: "NOT_PURCHASED", PARTIAL_OWNED_BUNDLE: 1, [1]: "PARTIAL_OWNED_BUNDLE", PURCHASED: 2, [2]: "PURCHASED" };
const result = set.fileFinishedImporting("modules/collectibles/hooks/usePurchasedProductsSort.tsx");

export const usePurchasedProductsSort = function usePurchasedProductsSort(memo) {
  const _require = memo;
  let items = [closure_3];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => purchases.purchases);
  const items1 = [stateFromStores];
  const tmp2 = useMemo(() => {
    const items = [...stateFromStores];
    return items.map((arg0) => {
      [tmp] = arg0;
      return tmp;
    });
  }, items1);
  useMemo = tmp2;
  let items2 = [memo, tmp2];
  return useMemo(() => {
    let items = [...closure_0];
    return items.sort((type, type2) => {
      let obj = closure_2;
      obj = closure_2;
      if (type.type === closure_1_0(closure_1_1[2]).CollectiblesItemType.BUNDLE) {
        const items = type.items;
        if (items.some((skuId) => obj.includes(skuId.skuId))) {
          let NOT_PURCHASED = closure_1_4.PARTIAL_OWNED_BUNDLE;
          let tmp4 = closure_1_4;
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
          let tmp6 = tmp5;
        } else {
          NOT_PURCHASED2 = tmp5.NOT_PURCHASED;
          tmp6 = tmp5;
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