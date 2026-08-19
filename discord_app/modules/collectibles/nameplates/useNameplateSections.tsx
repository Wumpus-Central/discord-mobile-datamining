// === Module 14058: useNameplateSections ===

// Module 14058 (useNameplateSections)
import _slicedToArray from "_slicedToArray" /* 32 */;
import { useMemo } from "noop" /* 19 */;
import updateCategoriesAndProducts from "updateCategoriesAndProducts" /* 5301 */;
import map from "map" /* 5324 */;

const require = fn;
let obj = { skuId: "Shop" };
let result = require("obj132").fileFinishedImporting("modules/collectibles/nameplates/useNameplateSections.tsx");

export default function useNameplateSections() {
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
  const items2 = [first, stateFromStores, tmp2[1]];
  return useMemo(() => {
    obj = stateFromStores(first[5]);
    const nameplates = obj.getNameplates(stateFromStores, first);
    const reduced = nameplates.reduce((acc, item, index) => {
      closure_0.get(item.skuId);
      const value = closure_2.get(item.skuId);
      if (null != value) {
        let result = stateFromStores(first[5]).isPremiumCollectiblesPurchase(value);
        const obj2 = stateFromStores(first[5]);
      } else {
        result = stateFromStores(first[5]).isPremiumCollectiblesProduct(value);
        obj = stateFromStores(first[5]);
      }
      let flag;
      if (value != null) {
        flag = value.isCategoryReward;
      }
      if (flag == null) {
        flag = false;
      }
      if (result) {
        const premium_purchase = acc.premium_purchase;
        premium_purchase.push(item);
      } else if (null != value) {
        const purchase = acc.purchase;
        purchase.push(item);
      } else if (!flag) {
        const preview = acc.preview;
        preview.push(item);
      }
      return acc;
    }, { purchase: [], premium_purchase: [], preview: [] });
    obj = { section: closure_1_6.PURCHASE, items, height: 12, header: null };
    items = [closure_1_7, closure_1_8, ...reduced.purchase];
    const intl = stateFromStores(first[6]).intl;
    obj[3] = intl.string(stateFromStores(first[6]).t.WfGV52);
    const items1 = [obj, , ];
    obj = { section: closure_1_6.PREMIUM_PURCHASE, items: reduced.premium_purchase, height: 12, header: null };
    const intl2 = stateFromStores(first[6]).intl;
    obj[3] = intl2.string(stateFromStores(first[6]).t.TiLCgw);
    items1[1] = obj;
    obj1 = { section: closure_1_6.PREVIEW, items: reduced.preview, height: 12, header: null };
    const intl3 = stateFromStores(first[6]).intl;
    obj1[3] = intl3.string(stateFromStores(first[6]).t["1vbbee"]);
    items1[2] = obj1;
    return items1.filter((item, index) => item.items.length > 0);
  }, items2);
};
export const Section = obj;
export const NONE_ITEM = obj;
export const SHOP_ITEM = obj;