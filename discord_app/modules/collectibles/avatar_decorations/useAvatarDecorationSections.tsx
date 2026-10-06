// === Module 13022: useAvatarDecorationSections ===

// Module 13022 (useAvatarDecorationSections)
import react from "react" /* 19 */;
import intl4 from "intl" /* 1126 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7078 */;
import useRecommendedCollectiblesSectionsDefault from "useRecommendedCollectiblesSections" /* 13023 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7066 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7081 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

const useMemo = react.useMemo;
const Section = { PURCHASE: "purchase", PREMIUM_PURCHASE: "premium_purchase", PREVIEW: "preview" };
let obj2 = { skuId: "None" };
let obj3 = { skuId: "Shop" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_1;
  let purchases;
  let stateFromStores;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = stateFromStores(576);
  const cResult = obj.c(27);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [CollectiblesPurchaseStore];
    const fn = function l() {
      return purchases.purchases;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmp2Result = stateFromStores(573);
  stateFromStores = tmp2Result.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CollectiblesCategoryStore];
    const fn2 = function v() {
      const items = [, ];
      ({ categories: arr[0], products: arr[1] } = CollectiblesCategoryStore);
      return items;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmp2Result3 = stateFromStores(573);
  [tmp13, tmp14] = tmp2Result3.useStateFromStoresArray(tmp9, tmp10);
  importDefault = tmp14;
  _slicedToArray(tmp2Result3.useStateFromStoresArray(tmp9, tmp10), 2);
  if (cResult[4] === tmp13) {
    if (cResult[5] === tmp14) {
      let tmp25;
      if (cResult[6] === stateFromStores) {
        tmp15 = cResult[7];
        tmp16 = cResult[8];
      }
      const _Symbol = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp2(1126).intl;
        const stringResult = intl.string(stateFromStores(1126).t.VqmVqE);
        cResult[13] = stringResult;
        tmp25 = stringResult;
      } else {
        tmp25 = cResult[13];
      }
      if (cResult[14] === tmp16) {
        let tmp27;
        let tmp28;
        let tmp30;
        let tmp32;
        let tmp34;
        if (cResult[15] === tmp17) {
          tmp27 = cResult[16];
        }
        const _Symbol2 = Symbol;
        let premium_purchase = tmp15.premium_purchase;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp2(1126).intl;
          const stringResult1 = intl2.string(stateFromStores(1126).t.TiLCgw);
          cResult[17] = stringResult1;
          tmp28 = stringResult1;
        } else {
          tmp28 = cResult[17];
        }
        if (cResult[18] !== tmp15.premium_purchase) {
          obj2 = { section: obj.PREMIUM_PURCHASE, items: premium_purchase, height: 12, header: tmp28 };
          cResult[18] = tmp15.premium_purchase;
          cResult[19] = obj2;
          tmp30 = obj2;
        } else {
          tmp30 = cResult[19];
        }
        const _Symbol3 = Symbol;
        let preview = tmp15.preview;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp2(1126).intl;
          const stringResult2 = intl3.string(stateFromStores(1126).t["1vbbee"]);
          cResult[20] = stringResult2;
          tmp32 = stringResult2;
        } else {
          tmp32 = cResult[20];
        }
        if (cResult[21] !== tmp15.preview) {
          obj3 = { section: obj.PREVIEW, items: preview, height: 12, header: tmp32 };
          cResult[21] = tmp15.preview;
          cResult[22] = obj3;
          tmp34 = obj3;
        } else {
          tmp34 = cResult[22];
        }
        if (cResult[23] === tmp30) {
          if (cResult[24] === tmp34) {
            let tmp36;
            if (cResult[25] === tmp27) {
              tmp36 = cResult[26];
            }
            return useRecommendedCollectiblesSectionsDefault(tmp36, obj.PREVIEW);
          }
        }
        const items2 = [tmp27, tmp30, tmp34];
        const found = items2.filter((items) => items.items.length > 0);
        cResult[23] = tmp30;
        cResult[24] = tmp34;
        cResult[25] = tmp27;
        cResult[26] = found;
        tmp36 = found;
      }
      const obj4 = { section: tmp16, items: tmp17, height: 12, header: tmp25 };
      cResult[14] = tmp16;
      cResult[15] = tmp17;
      cResult[16] = obj4;
      tmp27 = obj4;
    }
  }
  const tmp2Result4 = stateFromStores(7078);
  const avatarDecorations = tmp2Result4.getAvatarDecorations(stateFromStores, tmp13);
  if (cResult[10] === tmp14) {
    let tmp18;
    if (cResult[11] === stateFromStores) {
      tmp18 = cResult[12];
    }
    const obj5 = { purchase: [], premium_purchase: [], preview: [] };
    const reduced = avatarDecorations.reduce(tmp18, obj5);
    const PURCHASE = obj.PURCHASE;
    const items3 = [obj2, obj3];
    HermesBuiltin.arraySpread(items3, reduced.purchase, 2);
    cResult[4] = tmp13;
    cResult[5] = tmp14;
    cResult[6] = stateFromStores;
    cResult[7] = reduced;
    cResult[8] = PURCHASE;
    cResult[9] = items3;
    class M {
      constructor(premium_purchase, skuId) {
        let result;
        const value = stateFromStores.get(skuId.skuId);
        if (null != value) {
          obj2 = CollectiblesUtils;
          result = obj2.isPremiumCollectiblesPurchase(value);
        } else {
          const obj = CollectiblesUtils;
          result = obj.isPremiumCollectiblesProduct(tmp14.get(skuId.skuId));
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
      }
    }
    tmp16 = PURCHASE;
    tmp15 = reduced;
  }
  class M {
    constructor(premium_purchase, skuId) {
      let result;
      const value = stateFromStores.get(skuId.skuId);
      if (null != value) {
        obj2 = CollectiblesUtils;
        result = obj2.isPremiumCollectiblesPurchase(value);
      } else {
        const obj = CollectiblesUtils;
        result = obj.isPremiumCollectiblesProduct(tmp14.get(skuId.skuId));
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
    }
  }
  cResult[10] = tmp14;
  cResult[11] = stateFromStores;
  cResult[12] = M;
  tmp18 = M;
}) : (() => {
  let closure_2;
  let purchases;
  let stateFromStores;
  let obj = stateFromStores(573);
  let items = [CollectiblesPurchaseStore];
  stateFromStores = obj.useStateFromStores(items, () => purchases.purchases);
  obj2 = stateFromStores(573);
  let items1 = [CollectiblesCategoryStore];
  const tmp2 = _slicedToArray(obj2.useStateFromStoresArray(items1, () => {
    const items = [, ];
    ({ categories: arr[0], products: arr[1] } = CollectiblesCategoryStore);
    return items;
  }), 2);
  const first = tmp2[0];
  dependencyMap = tmp4;
  const items2 = [first, tmp2[1], stateFromStores];
  const tmp5 = useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let items;
    let obj = CollectiblesUtils;
    const avatarDecorations = obj.getAvatarDecorations(stateFromStores, first);
    const reduced = avatarDecorations.reduce((premium_purchase, skuId) => {
      let result;
      const value = closure_1_0.get(skuId.skuId);
      if (null != value) {
        obj2 = stateFromStores(closure_2[7]);
        result = obj2.isPremiumCollectiblesPurchase(value);
      } else {
        const obj = stateFromStores(closure_2[7]);
        result = obj.isPremiumCollectiblesProduct(closure_1_2.get(skuId.skuId));
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
    obj2 = { section: obj.PURCHASE, items, height: 12, header: intl.string(intl4.t.VqmVqE) };
    items = [obj2, obj3, ...reduced.purchase];
    intl = intl4.intl;
    const items1 = [obj2, , ];
    obj3 = { section: obj.PREMIUM_PURCHASE, items: reduced.premium_purchase, height: 12, header: intl2.string(intl4.t.TiLCgw) };
    intl2 = intl4.intl;
    items1[1] = obj3;
    const obj4 = { section: obj.PREVIEW, items: reduced.preview, height: 12, header: intl3.string(intl4.t["1vbbee"]) };
    intl3 = intl4.intl;
    items1[2] = obj4;
    return items1.filter((items) => items.items.length > 0);
  }, items2);
  return first(13023)(tmp5, obj.PREVIEW);
});
let result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecorationSections.tsx");

export default tmp2;
export { Section };
export const NONE_ITEM = obj2;
export const SHOP_ITEM = obj3;