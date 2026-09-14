// discord_app/modules/collectibles/profile_effects/useProfileEffectSections.tsx
import util from "../../../intl/index.native.tsx";
import CollectiblesUtils from "../CollectiblesUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";
import CollectiblesPurchaseStore from "../CollectiblesPurchaseStore.tsx";

require = fn;
const useMemo = fn(19).useMemo;
const Section = { PURCHASE: "purchase", PREMIUM_PURCHASE: "premium_purchase", PREVIEW: "preview" };
let obj2 = { skuId: "None" };
let obj3 = { skuId: "Shop" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/profile_effects/useProfileEffectSections.tsx");

export default function useProfileEffectSections() {
  let items = [CollectiblesPurchaseStore];
  stateFromStores = stateFromStores(first[4]).useStateFromStores(items, () => purchases.purchases);
  let obj = stateFromStores(first[4]);
  let items1 = [CollectiblesCategoryStore];
  const tmp2 = _slicedToArray(
    stateFromStores(first[4]).useStateFromStoresArray(items1, () => {
      const items = [,];
      ({ categories: arr[0], products: arr[1] } = CollectiblesCategoryStore);
      return items;
    }),
    2,
  );
  first = tmp2[0];
  _slicedToArray = tmp4;
  const items2 = [first, tmp2[1], stateFromStores];
  return useMemo(() => {
    let obj = CollectiblesUtils;
    const profileEffects = obj.getProfileEffects(stateFromStores, first);
    const reduced = profileEffects.reduce(
      (premium_purchase, skuId) => {
        value = closure_1_0.get(skuId.skuId);
        if (null != value) {
          let result = stateFromStores(first[5]).isPremiumCollectiblesPurchase(value);
          obj2 = stateFromStores(first[5]);
        } else {
          result = stateFromStores(first[5]).isPremiumCollectiblesProduct(closure_1_2.get(skuId.skuId));
          const obj = stateFromStores(first[5]);
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
      },
      { purchase: [], premium_purchase: [], preview: [] },
    );
    obj2 = { section: obj.PURCHASE, items: null, height: 12, header: null };
    const items = [obj2, obj3, ...reduced.purchase];
    obj2.items = items;
    const intl = util.intl;
    obj2.header = intl.string(util.t["9x1v/p"]);
    const items1 = [obj2, ,];
    obj3 = { section: obj.PREMIUM_PURCHASE, items: reduced.premium_purchase, height: 12, header: null };
    const intl2 = util.intl;
    obj3.header = intl2.string(util.t.TiLCgw);
    items1[1] = obj3;
    const obj4 = { section: obj.PREVIEW, items: reduced.preview, height: 12, header: null };
    const intl3 = util.intl;
    obj4.header = intl3.string(util.t["1vbbee"]);
    items1[2] = obj4;
    return items1.filter((items) => items.items.length > 0);
  }, items2);
}
export { Section };
export const NONE_ITEM = obj2;
export const SHOP_ITEM = obj3;
