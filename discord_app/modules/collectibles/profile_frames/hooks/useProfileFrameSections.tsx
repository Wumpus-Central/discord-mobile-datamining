// === Module 14053: useProfileFrameSections ===

// Module 14053 (useProfileFrameSections)
import _slicedToArray from "_slicedToArray" /* 32 */;
import { useMemo } from "noop" /* 19 */;
import updateCategoriesAndProducts from "updateCategoriesAndProducts" /* 5301 */;
import map from "map" /* 5324 */;

const require = fn;
let obj = { skuId: "Shop" };
let result = require("obj132").fileFinishedImporting("modules/collectibles/profile_frames/hooks/useProfileFrameSections.tsx");

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
    const reduced = profileFrames.reduce((acc, item, index) => {
      const value = closure_0.get(item.skuId);
      if (null != value) {
        let result = stateFromStores(first[6]).isPremiumCollectiblesPurchase(value);
        const obj2 = stateFromStores(first[6]);
      } else {
        result = stateFromStores(first[6]).isPremiumCollectiblesProduct(closure_2.get(item.skuId));
        obj = stateFromStores(first[6]);
      }
      if (result) {
        const premium_purchase = acc.premium_purchase;
        premium_purchase.push(item);
      } else if (null != value) {
        const purchase = acc.purchase;
        purchase.push(item);
      } else {
        const preview = acc.preview;
        preview.push(item);
      }
      return acc;
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
      const intl3 = stateFromStores(first[7]).intl;
      stringResult = intl3.string(stateFromStores(first[7]).t["1vbbee"]);
    }
    obj[3] = stringResult;
    items1[2] = obj;
    return items1.filter((item, index) => item.items.length > 0);
  }, items2);
};
export const Section = obj;
export const NONE_ITEM = obj;
export const SHOP_ITEM = obj;