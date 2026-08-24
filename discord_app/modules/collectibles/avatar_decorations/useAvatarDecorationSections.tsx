// === Module 8393: useAvatarDecorationSections ===

// Module 8393 (useAvatarDecorationSections)
import closure_2 from "_slicedToArray" /* 32 */;
import { useMemo } from "noop" /* 19 */;
import closure_4 from "updateCategoriesAndProducts" /* 5301 */;
import closure_5 from "map" /* 5324 */;

const require = arg1;
let obj = { PURCHASE: "purchase", PREMIUM_PURCHASE: "premium_purchase", PREVIEW: "preview" };
obj = { skuId: "None" };
obj = { skuId: "Shop" };
let result = require("set").fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecorationSections.tsx");

export default function useAvatarDecorationSections() {
  let items = [closure_5];
  stateFromStores = stateFromStores(first[4]).useStateFromStores(items, () => purchases.purchases);
  obj = stateFromStores(first[4]);
  let items1 = [closure_4];
  const tmp2 = callback(stateFromStores(first[4]).useStateFromStoresArray(items1, () => {
    const items = [, ];
    ({ categories: arr[0], products: arr[1] } = closure_4);
    return items;
  }), 2);
  first = tmp2[0];
  callback = tmp4;
  const items2 = [first, tmp2[1], stateFromStores];
  return useMemo(() => {
    obj = stateFromStores(first[5]);
    const avatarDecorations = obj.getAvatarDecorations(stateFromStores, first);
    const reduced = avatarDecorations.reduce((premium_purchase, skuId) => {
      const value = closure_0.get(skuId.skuId);
      if (null != value) {
        let result = closure_1_0(closure_1_1[5]).isPremiumCollectiblesPurchase(value);
        const obj2 = closure_1_0(closure_1_1[5]);
      } else {
        result = closure_1_0(closure_1_1[5]).isPremiumCollectiblesProduct(closure_2.get(skuId.skuId));
        obj = closure_1_0(closure_1_1[5]);
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
    obj = { section: closure_1_6.PURCHASE, items, height: 12, header: null };
    items = [closure_1_7, closure_1_8, ...reduced.purchase];
    const intl = stateFromStores(first[6]).intl;
    obj[3] = intl.string(stateFromStores(first[6]).t.VqmVqE);
    const items1 = [obj, , ];
    obj = { section: closure_1_6.PREMIUM_PURCHASE, items: reduced.premium_purchase, height: 12, header: null };
    const intl2 = stateFromStores(first[6]).intl;
    obj[3] = intl2.string(stateFromStores(first[6]).t.TiLCgw);
    items1[1] = obj;
    obj1 = { section: closure_1_6.PREVIEW, items: reduced.preview, height: 12, header: null };
    const intl3 = stateFromStores(first[6]).intl;
    obj1[3] = intl3.string(stateFromStores(first[6]).t["1vbbee"]);
    items1[2] = obj1;
    return items1.filter((items) => items.items.length > 0);
  }, items2);
};
export const Section = obj;
export const NONE_ITEM = obj;
export const SHOP_ITEM = obj;