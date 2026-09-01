// === Module 14286: useProfileFrameSections ===

// Module 14286 (useProfileFrameSections)
import closure_2 from "_slicedToArray" /* 32 */;
import { useMemo } from "noop" /* 19 */;
import closure_4 from "updateCategoriesAndProducts" /* 7287 */;
import closure_5 from "map" /* 7303 */;

const require = arg1;
let obj = { PURCHASE: "purchase", PREMIUM_PURCHASE: "premium_purchase", PREVIEW: "preview" };
obj = { skuId: "None" };
obj = { skuId: "Shop" };
let result = require("set").fileFinishedImporting("modules/collectibles/profile_frames/hooks/useProfileFrameSections.tsx");

export default function useProfileFrameSections() {
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
  let obj2 = stateFromStores(first[4]);
  const isProfileFramesEarlyAccessPhase = stateFromStores(first[5]).useIsProfileFramesEarlyAccessPhase("useProfileFrameSections");
  const items2 = [first, tmp2[1], stateFromStores, isProfileFramesEarlyAccessPhase];
  return isProfileFramesEarlyAccessPhase(() => {
    obj = stateFromStores(first[6]);
    const profileFrames = obj.getProfileFrames(stateFromStores, first);
    const reduced = profileFrames.reduce((premium_purchase, skuId) => {
      const value = closure_0.get(skuId.skuId);
      if (null != value) {
        let result = closure_1_0(closure_1_1[6]).isPremiumCollectiblesPurchase(value);
        const obj2 = closure_1_0(closure_1_1[6]);
      } else {
        result = closure_1_0(closure_1_1[6]).isPremiumCollectiblesProduct(closure_2.get(skuId.skuId));
        obj = closure_1_0(closure_1_1[6]);
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
    const intl = stateFromStores(first[7]).intl;
    let stringResult = intl.string(stateFromStores(first[7]).t.TiLCgw);
    obj = { section: closure_1_6.PURCHASE, items, height: 12, header: null };
    items = [closure_1_7, closure_1_8, ...reduced.purchase];
    const intl2 = stateFromStores(first[7]).intl;
    obj[3] = intl2.string(stateFromStores(first[7]).t["9eZ4aO"]);
    const items1 = [obj, { section: closure_1_6.PREMIUM_PURCHASE, items: reduced.premium_purchase, height: 12, header: stringResult }, ];
    obj = { section: closure_1_6.PREVIEW, items: reduced.preview, height: 12, header: null };
    if (!isProfileFramesEarlyAccessPhase) {
      const intl3 = tmp(tmp2[7]).intl;
      stringResult = intl3.string(tmp(tmp2[7]).t["1vbbee"]);
    }
    obj[3] = stringResult;
    items1[2] = obj;
    return items1.filter((items) => items.items.length > 0);
  }, items2);
};
export const Section = obj;
export const NONE_ITEM = obj;
export const SHOP_ITEM = obj;