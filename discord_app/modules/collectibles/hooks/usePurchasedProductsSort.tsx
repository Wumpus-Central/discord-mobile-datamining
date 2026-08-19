// discord_app/modules/collectibles/hooks/usePurchasedProductsSort.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import noop from "../../../../_runtime/00019_noop.js";
import map from "../CollectiblesPurchaseStore.tsx";

let useMemo = noop.useMemo;
let closure_4 = { NOT_PURCHASED: 0, [0]: "NOT_PURCHASED", PARTIAL_OWNED_BUNDLE: 1, [1]: "PARTIAL_OWNED_BUNDLE", PURCHASED: 2, [2]: "PURCHASED" };
const result = obj132.fileFinishedImporting("modules/collectibles/hooks/usePurchasedProductsSort.tsx");

export const usePurchasedProductsSort = function usePurchasedProductsSort(memo) {
  const _require = memo;
  let items = [closure_3];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => purchases.purchases);
  const items1 = [stateFromStores];
  const tmp2 = useMemo(() => {
    const items = [...stateFromStores];
    return items.map((item, index) => {
      [tmp] = item;
      return tmp;
    });
  }, items1);
  useMemo = tmp2;
  let items2 = [memo, tmp2];
  return useMemo(() => {
    let items = [...closure_0];
    return items.sort((type, type2) => {
      const obj = closure_2;
      if (type.type === memo(stateFromStores[2]).CollectiblesItemType.BUNDLE) {
        const items = type.items;
        if (items.some((item, index) => obj.includes(item.skuId))) {
          let NOT_PURCHASED = closure_1_4.PARTIAL_OWNED_BUNDLE;
          let tmp4 = closure_1_4;
        }
        if (type2.type === memo(stateFromStores[2]).CollectiblesItemType.BUNDLE) {
          const items2 = type2.items;
          if (items2.some((item, index) => obj.includes(item.skuId))) {
            let PARTIAL_OWNED_BUNDLE = tmp4.PARTIAL_OWNED_BUNDLE;
          }
          return NOT_PURCHASED - PARTIAL_OWNED_BUNDLE;
        }
        let tmpResult = memo(stateFromStores[3]);
        if (tmpResult.getIsVariantProduct(type2)) {
          const variants2 = type2.variants;
          variants2.every((item, index) => obj.includes(item.skuId)) ? tmp4.PURCHASED : tmp4.NOT_PURCHASED;
        } else {
          PARTIAL_OWNED_BUNDLE = obj.includes(type2.skuId) ? tmp4.PURCHASED : tmp4.NOT_PURCHASED;
        }
      }
      tmpResult = memo(stateFromStores[3]);
      if (tmpResult.getIsVariantProduct(type)) {
        const variants = type.variants;
        if (variants.every((item, index) => obj.includes(item.skuId))) {
          let NOT_PURCHASED2 = closure_1_4.PURCHASED;
        } else {
          NOT_PURCHASED2 = closure_1_4.NOT_PURCHASED;
        }
      } else if (obj.includes(type.skuId)) {
        NOT_PURCHASED = closure_1_4.PURCHASED;
        tmp4 = closure_1_4;
      } else {
        NOT_PURCHASED = closure_1_4.NOT_PURCHASED;
        tmp4 = closure_1_4;
      }
    });
  }, items2);
};