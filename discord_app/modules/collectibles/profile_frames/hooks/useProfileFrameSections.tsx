// === Module 14719: useProfileFrameSections ===

// Module 14719 (useProfileFrameSections)
import util from "util" /* 1114 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7657 */;
import _slicedToArray from "module_32" /* 32 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7645 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7660 */;

require = fn;
const useMemo = fn(19).useMemo;
let obj = { PURCHASE: "purchase", PREMIUM_PURCHASE: "premium_purchase", PREVIEW: "preview" };
obj = { skuId: "None" };
obj = { skuId: "Shop" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/hooks/useProfileFrameSections.tsx");

export default function useProfileFrameSections() {
  let items = [CollectiblesPurchaseStore];
  stateFromStores = stateFromStores(first[4]).useStateFromStores(items, () => purchases.purchases);
  obj = stateFromStores(first[4]);
  let items1 = [CollectiblesCategoryStore];
  const tmp2 = _slicedToArray(stateFromStores(first[4]).useStateFromStoresArray(items1, () => {
    const items = [, ];
    ({ categories: arr[0], products: arr[1] } = CollectiblesCategoryStore);
    return items;
  }), 2);
  first = tmp2[0];
  _slicedToArray = tmp4;
  const items2 = [first, tmp2[1], stateFromStores];
  return useMemo(() => {
    obj = CollectiblesUtils;
    const profileFrames = obj.getProfileFrames(stateFromStores, first);
    const reduced = profileFrames.reduce((premium_purchase, skuId) => {
      value = closure_1_0.get(skuId.skuId);
      if (null != value) {
        let result = stateFromStores(first[5]).isPremiumCollectiblesPurchase(value);
        const obj2 = stateFromStores(first[5]);
      } else {
        result = stateFromStores(first[5]).isPremiumCollectiblesProduct(closure_1_2.get(skuId.skuId));
        obj = stateFromStores(first[5]);
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
    const intl = util.intl;
    obj = { section: obj.PURCHASE, items: null, height: 12, header: null };
    const items = [obj, obj];
    HermesBuiltin.arraySpread(reduced.purchase, 2);
    obj.items = items;
    const intl2 = util.intl;
    obj.header = intl2.string(util.t["9eZ4aO"]);
    const items1 = [obj, { section: obj.PREMIUM_PURCHASE, items: reduced.premium_purchase, height: 12, header: intl.string(util.t.TiLCgw) }, ];
    obj = { section: obj.PREVIEW, items: reduced.preview, height: 12, header: null };
    const intl3 = util.intl;
    obj.header = intl3.string(util.t["1vbbee"]);
    items1[2] = obj;
    return items1.filter((items) => items.items.length > 0);
  }, items2);
};
export const Section = obj;
export const NONE_ITEM = obj;
export const SHOP_ITEM = obj;