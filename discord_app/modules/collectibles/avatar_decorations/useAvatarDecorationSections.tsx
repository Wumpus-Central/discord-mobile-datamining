// === Module 13168: useAvatarDecorationSections ===

// Module 13168 (useAvatarDecorationSections)
import util from "util" /* 1114 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7554 */;
import _slicedToArray from "module_32" /* 32 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7542 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7558 */;

require = fn;
const useMemo = fn(19).useMemo;
let obj = { PURCHASE: "purchase", PREMIUM_PURCHASE: "premium_purchase", PREVIEW: "preview" };
obj = { skuId: "None" };
obj = { skuId: "Shop" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecorationSections.tsx");

export default function useAvatarDecorationSections() {
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
    const avatarDecorations = obj.getAvatarDecorations(stateFromStores, first);
    const reduced = avatarDecorations.reduce((premium_purchase, skuId) => {
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
    obj = { section: obj.PURCHASE, items: null, height: 12, header: null };
    const items = [obj, obj, ...reduced.purchase];
    obj.items = items;
    const intl = util.intl;
    obj.header = intl.string(util.t.VqmVqE);
    const items1 = [obj, , ];
    obj = { section: obj.PREMIUM_PURCHASE, items: reduced.premium_purchase, height: 12, header: null };
    const intl2 = util.intl;
    obj.header = intl2.string(util.t.TiLCgw);
    items1[1] = obj;
    const obj1 = { section: obj.PREVIEW, items: reduced.preview, height: 12, header: null };
    const intl3 = util.intl;
    obj1.header = intl3.string(util.t["1vbbee"]);
    items1[2] = obj1;
    return items1.filter((items) => items.items.length > 0);
  }, items2);
};
export const Section = obj;
export const NONE_ITEM = obj;
export const SHOP_ITEM = obj;