// === Module 13395: useAvatarDecorationSections ===

// Module 13395 (useAvatarDecorationSections)
import util from "util" /* 1126 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7269 */;
import useRecommendedCollectiblesSectionsDefault from "useRecommendedCollectiblesSections" /* 13396 */;
import _slicedToArray from "module_32" /* 32 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7257 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7272 */;

require = fn;
const useMemo = fn(19).useMemo;
const Section = { PURCHASE: "purchase", PREMIUM_PURCHASE: "premium_purchase", PREVIEW: "preview" };
let obj2 = { skuId: "None" };
let obj3 = { skuId: "Shop" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecorationSections.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useAvatarDecorationSections() {
  let obj = stateFromStores(576);
  const cResult = obj.c(27);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [CollectiblesPurchaseStore];
    const fn = function l() {
      return purchases.purchases;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  stateFromStores = stateFromStores(573).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CollectiblesCategoryStore];
    const fn2 = function _() {
      const items = [, ];
      ({ categories: arr[0], products: arr[1] } = CollectiblesCategoryStore);
      return items;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = stateFromStores(573);
  let num5 = 2;
  const tmpResult3 = stateFromStores(573);
  [tmp12, tmp13] = stateFromStores(573).useStateFromStoresArray(tmp8, tmp9);
  importDefault = tmp13;
  if (cResult[4] === tmp12) {
    if (cResult[5] === tmp13) {
      if (cResult[6] === stateFromStores) {
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.VqmVqE);
          cResult[13] = stringResult;
          let tmp26 = stringResult;
        } else {
          tmp26 = cResult[13];
        }
        if (cResult[14] === cResult[8]) {
          if (cResult[15] === tmp16) {
            let tmp28 = cResult[16];
          }
          const _Symbol2 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult1 = intl2.string(tmp(1126).t.TiLCgw);
            cResult[17] = stringResult1;
            let tmp29 = stringResult1;
          } else {
            tmp29 = cResult[17];
          }
          if (cResult[18] !== tmp14.premium_purchase) {
            obj2 = { section: obj.PREMIUM_PURCHASE, items: tmp14.premium_purchase, height: 12, header: tmp29 };
            cResult[18] = tmp14.premium_purchase;
            cResult[19] = obj2;
            let tmp31 = obj2;
          } else {
            tmp31 = cResult[19];
          }
          const _Symbol3 = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1126).intl;
            const stringResult2 = intl3.string(tmp(1126).t["1vbbee"]);
            cResult[20] = stringResult2;
            let tmp33 = stringResult2;
          } else {
            tmp33 = cResult[20];
          }
          if (cResult[21] !== tmp14.preview) {
            obj3 = { section: obj.PREVIEW, items: tmp14.preview, height: 12, header: tmp33 };
            cResult[21] = tmp14.preview;
            cResult[22] = obj3;
            let tmp35 = obj3;
          } else {
            tmp35 = cResult[22];
          }
          if (cResult[23] === tmp31) {
            if (cResult[24] === tmp35) {
              if (cResult[25] === tmp28) {
                let tmp37 = cResult[26];
              }
              return useRecommendedCollectiblesSectionsDefault(tmp37, obj.PREVIEW);
            }
          }
          const items2 = [tmp28, tmp31, tmp35];
          const found = items2.filter((items) => items.items.length > 0);
          cResult[23] = tmp31;
          cResult[24] = tmp35;
          cResult[25] = tmp28;
          cResult[26] = found;
          tmp37 = found;
        }
        const obj4 = { section: cResult[8], items: cResult[9], height: 12, header: tmp26 };
        cResult[14] = cResult[8];
        cResult[15] = cResult[9];
        cResult[16] = obj4;
        tmp28 = obj4;
      }
    }
  }
  const tmp11 = _slicedToArray(stateFromStores(573).useStateFromStoresArray(tmp8, tmp9), 2);
  let avatarDecorations = stateFromStores(7269).getAvatarDecorations(stateFromStores, tmp12);
  if (cResult[10] === tmp13) {
    if (cResult[11] === stateFromStores) {
      let tmp17 = cResult[12];
    }
    const obj5 = { purchase: [], premium_purchase: [], preview: [] };
    const reduced = avatarDecorations.reduce(tmp17, obj5);
    const PURCHASE = obj.PURCHASE;
    const items3 = [obj2, ];
    avatarDecorations = obj3;
    items3[1] = obj3;
    HermesBuiltin.arraySpread(reduced.purchase, num5);
    cResult[4] = tmp12;
    cResult[5] = tmp13;
    cResult[6] = stateFromStores;
    cResult[7] = reduced;
    cResult[8] = PURCHASE;
    num5 = 9;
    cResult[9] = items3;
    class M {
      constructor(arg0, arg1) {
        value = closure_0.get(arg1.skuId);
        if (null != value) {
          tmp6 = closure_0;
          tmp7 = closure_2;
          obj2 = closure_0(closure_2[7]);
          result = obj2.isPremiumCollectiblesPurchase(value);
        } else {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[7]);
          tmp4 = closure_1;
          result = obj.isPremiumCollectiblesProduct(closure_1.get(arg1.skuId));
        }
        if (result) {
          premium_purchase = arg0.premium_purchase;
          arr1 = premium_purchase.push(arg1);
        } else if (null != value) {
          purchase = arg0.purchase;
          arr4 = purchase.push(arg1);
        } else {
          preview = arg0.preview;
          arr5 = preview.push(arg1);
        }
        return arg0;
      }
    }
  }
  class M {
    constructor(arg0, arg1) {
      value = closure_0.get(arg1.skuId);
      if (null != value) {
        tmp6 = closure_0;
        tmp7 = closure_2;
        obj2 = closure_0(closure_2[7]);
        result = obj2.isPremiumCollectiblesPurchase(value);
      } else {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[7]);
        tmp4 = closure_1;
        result = obj.isPremiumCollectiblesProduct(closure_1.get(arg1.skuId));
      }
      if (result) {
        premium_purchase = arg0.premium_purchase;
        arr1 = premium_purchase.push(arg1);
      } else if (null != value) {
        purchase = arg0.purchase;
        arr4 = purchase.push(arg1);
      } else {
        preview = arg0.preview;
        arr5 = preview.push(arg1);
      }
      return arg0;
    }
  }
  cResult[10] = tmp13;
  cResult[11] = stateFromStores;
  cResult[12] = M;
  tmp17 = M;
  const tmpResult4 = stateFromStores(7269);
}) : (function useAvatarDecorationSections() {
  let obj = stateFromStores(573);
  let items = [CollectiblesPurchaseStore];
  stateFromStores = obj.useStateFromStores(items, () => purchases.purchases);
  let items1 = [CollectiblesCategoryStore];
  const tmp2 = _slicedToArray(stateFromStores(573).useStateFromStoresArray(items1, () => {
    const items = [, ];
    ({ categories: arr[0], products: arr[1] } = CollectiblesCategoryStore);
    return items;
  }), 2);
  const first = tmp2[0];
  dependencyMap = tmp4;
  const items2 = [first, tmp2[1], stateFromStores];
  obj2 = stateFromStores(573);
  return first(13396)(useMemo(() => {
    let obj = CollectiblesUtils;
    const avatarDecorations = obj.getAvatarDecorations(stateFromStores, first);
    const reduced = avatarDecorations.reduce((premium_purchase, skuId) => {
      value = closure_1_0.get(skuId.skuId);
      if (null != value) {
        let result = stateFromStores(closure_2[7]).isPremiumCollectiblesPurchase(value);
        obj2 = stateFromStores(closure_2[7]);
      } else {
        result = stateFromStores(closure_2[7]).isPremiumCollectiblesProduct(closure_1_2.get(skuId.skuId));
        const obj = stateFromStores(closure_2[7]);
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
    obj2 = { section: obj.PURCHASE, items: null, height: 12, header: null };
    const items = [obj2, obj3, ...reduced.purchase];
    obj2.items = items;
    const intl = util.intl;
    obj2.header = intl.string(util.t.VqmVqE);
    const items1 = [obj2, , ];
    obj3 = { section: obj.PREMIUM_PURCHASE, items: reduced.premium_purchase, height: 12, header: null };
    const intl2 = util.intl;
    obj3.header = intl2.string(util.t.TiLCgw);
    items1[1] = obj3;
    const obj4 = { section: obj.PREVIEW, items: reduced.preview, height: 12, header: null };
    const intl3 = util.intl;
    obj4.header = intl3.string(util.t["1vbbee"]);
    items1[2] = obj4;
    return items1.filter((items) => items.items.length > 0);
  }, items2), obj.PREVIEW);
});
export { Section };
export const NONE_ITEM = obj2;
export const SHOP_ITEM = obj3;