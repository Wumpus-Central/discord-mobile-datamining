// discord_app/modules/collectibles/profile_effects/useProfileEffectSections.tsx
import _slicedToArray from "_slicedToArray";
import { useMemo } from "noop";
import updateCategoriesAndProducts from "updateCategoriesAndProducts";
import map from "map";

const require = arg1;
let obj = { PURCHASE: "purchase", PREMIUM_PURCHASE: "premium_purchase", PREVIEW: "preview" };
obj = { skuId: "None" };
obj = { skuId: "Shop" };
let result = require("updateCategoriesAndProducts").fileFinishedImporting("modules/collectibles/profile_effects/useProfileEffectSections.tsx");

export default function useProfileEffectSections() {
  let items = [map];
  stateFromStores = stateFromStores(first[4]).useStateFromStores(items, () => purchases.purchases);
  let obj = stateFromStores(first[4]);
  let items1 = [updateCategoriesAndProducts];
  const tmp2 = callback(stateFromStores(first[4]).useStateFromStoresArray(items1, () => {
    const items = [, ];
    ({ categories: arr[0], products: arr[1] } = updateCategoriesAndProducts);
    return items;
  }), 2);
  first = tmp2[0];
  callback = tmp4;
  const items2 = [first, tmp2[1], stateFromStores];
  return useMemo(() => {
    let obj = stateFromStores(first[5]);
    const profileEffects = obj.getProfileEffects(stateFromStores, first);
    const reduced = profileEffects.reduce((premium_purchase, skuId) => {
      const value = closure_0.get(skuId.skuId);
      if (null != value) {
        let result = outer1_0(outer1_1[5]).isPremiumCollectiblesPurchase(value);
        const obj2 = outer1_0(outer1_1[5]);
      } else {
        result = outer1_0(outer1_1[5]).isPremiumCollectiblesProduct(_slicedToArray.get(skuId.skuId));
        const obj = outer1_0(outer1_1[5]);
      }
      if (result) {
        premium_purchase = premium_purchase.premium_purchase;
        premium_purchase.push(skuId);
      } else if (null != value) {
        const purchase = premium_purchase.purchase;
        purchase.push(skuId);
      } else {
        const preview = premium_purchase.preview;
        preview.push(skuId);
      }
      return premium_purchase;
    }, { purchase: [], premium_purchase: [], preview: [] });
    obj = { section: outer1_6.PURCHASE, items: null, height: 12, header: null };
    const items = [outer1_7, outer1_8, ...reduced.purchase];
    obj[1] = items;
    const intl = stateFromStores(first[6]).intl;
    obj[3] = intl.string(stateFromStores(first[6]).t["9x1v/p"]);
    const items1 = [obj, , ];
    obj = { section: outer1_6.PREMIUM_PURCHASE, items: reduced.premium_purchase, height: 12, header: null };
    const intl2 = stateFromStores(first[6]).intl;
    obj[3] = intl2.string(stateFromStores(first[6]).t.TiLCgw);
    items1[1] = obj;
    const obj1 = { section: outer1_6.PREVIEW, items: reduced.preview, height: 12, header: null };
    const intl3 = stateFromStores(first[6]).intl;
    obj1[3] = intl3.string(stateFromStores(first[6]).t["1vbbee"]);
    items1[2] = obj1;
    return items1.filter((items) => items.items.length > 0);
  }, items2);
};
export const Section = obj;
export const NONE_ITEM = obj;
export const SHOP_ITEM = obj;