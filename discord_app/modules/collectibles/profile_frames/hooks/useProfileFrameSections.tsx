// discord_app/modules/collectibles/profile_frames/hooks/useProfileFrameSections.tsx
import util from "../../../../intl/index.native.tsx";
import CollectiblesUtils from "../../CollectiblesUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import CollectiblesCategoryStore from "../../CollectiblesCategoryStore.tsx";
import CollectiblesPurchaseStore from "../../CollectiblesPurchaseStore.tsx";

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
  let obj2 = stateFromStores(first[4]);
  const isProfileFramesEarlyAccessPhase = stateFromStores(first[5]).useIsProfileFramesEarlyAccessPhase(
    "useProfileFrameSections",
  );
  const items2 = [first, tmp2[1], stateFromStores, isProfileFramesEarlyAccessPhase];
  return isProfileFramesEarlyAccessPhase(() => {
    obj = CollectiblesUtils;
    const profileFrames = obj.getProfileFrames(stateFromStores, first);
    const reduced = profileFrames.reduce(
      (premium_purchase, skuId) => {
        value = closure_1_0.get(skuId.skuId);
        if (null != value) {
          let result = stateFromStores(first[6]).isPremiumCollectiblesPurchase(value);
          const obj2 = stateFromStores(first[6]);
        } else {
          result = stateFromStores(first[6]).isPremiumCollectiblesProduct(closure_1_2.get(skuId.skuId));
          obj = stateFromStores(first[6]);
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
    const intl = util.intl;
    let stringResult = intl.string(util.t.TiLCgw);
    obj = { section: obj.PURCHASE, items: null, height: 12, header: null };
    const items = [obj, obj, ...reduced.purchase];
    obj.items = items;
    const intl2 = util.intl;
    obj.header = intl2.string(util.t["9eZ4aO"]);
    const items1 = [
      obj,
      { section: obj.PREMIUM_PURCHASE, items: reduced.premium_purchase, height: 12, header: stringResult },
    ];
    obj = { section: obj.PREVIEW, items: reduced.preview, height: 12, header: null };
    if (!isProfileFramesEarlyAccessPhase) {
      const intl3 = tmp(1114).intl;
      stringResult = intl3.string(tmp(1114).t["1vbbee"]);
    }
    obj.header = stringResult;
    items1[2] = obj;
    return items1.filter((items) => items.items.length > 0);
  }, items2);
}
export const Section = obj;
export const NONE_ITEM = obj;
export const SHOP_ITEM = obj;
