// === Module 14477: useProfileFrameSections ===

// Module 14477 (useProfileFrameSections)
import react from "react" /* 19 */;
import intl4 from "intl" /* 1126 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7078 */;
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
  let tmp17;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = stateFromStores(576);
  const cResult = obj.c(29);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [CollectiblesPurchaseStore];
    const fn = function h() {
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
    class P {
      constructor() {
        const items = [, ];
        ({ categories: arr[0], products: arr[1] } = CollectiblesCategoryStore);
        return items;
      }
    }
    cResult[2] = items1;
    cResult[3] = P;
    tmp10 = P;
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
      if (cResult[6] === stateFromStores) {
        tmp15 = cResult[7];
        tmp16 = cResult[8];
        tmp17 = cResult[9];
        class P {
          constructor() {
            const items = [, ];
            ({ categories: arr[0], products: arr[1] } = CollectiblesCategoryStore);
            return items;
          }
        }
      }
      const _Symbol2 = Symbol;
      class P {
        constructor() {
          const items = [, ];
          ({ categories: arr[0], products: arr[1] } = CollectiblesCategoryStore);
          return items;
        }
      }
      if (cResult[16] === tmp17) {
        let tmp30;
        if (cResult[17] === tmp18) {
          tmp30 = cResult[18];
        }
        if (cResult[19] === tmp15.premium_purchase) {
          let tmp31;
          let tmp33;
          let tmp35;
          if (cResult[20] === tmp16) {
            tmp31 = cResult[21];
          }
          const _Symbol3 = Symbol;
          let preview = tmp15.preview;
          class P {
            constructor() {
              const items = [, ];
              ({ categories: arr[0], products: arr[1] } = CollectiblesCategoryStore);
              return items;
            }
          }
          if (tmp32 === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp2(1126).intl;
            const stringResult = intl2.string(stateFromStores(1126).t["1vbbee"]);
            class P {
              constructor() {
                const items = [, ];
                ({ categories: arr[0], products: arr[1] } = CollectiblesCategoryStore);
                return items;
              }
            }
            cResult[22] = stringResult;
            tmp33 = stringResult;
          } else {
            tmp33 = cResult[22];
          }
          if (cResult[23] !== tmp15.preview) {
            obj2 = { section: obj.PREVIEW, items: null, height: 12, header: tmp33 };
            class P {
              constructor() {
                const items = [, ];
                ({ categories: arr[0], products: arr[1] } = CollectiblesCategoryStore);
                return items;
              }
            }
            cResult[23] = tmp15.preview;
            cResult[24] = obj2;
            tmp35 = obj2;
          } else {
            tmp35 = cResult[24];
          }
          if (cResult[25] === tmp35) {
            if (cResult[26] === tmp30) {
              class P {
                constructor() {
                  const items = [, ];
                  ({ categories: arr[0], products: arr[1] } = CollectiblesCategoryStore);
                  return items;
                }
              }
            }
          }
          const items2 = [tmp30, tmp31, tmp35];
          const found = items2.filter((items) => items.items.length > 0);
          cResult[25] = tmp35;
          cResult[26] = tmp30;
          cResult[27] = tmp31;
          cResult[28] = found;
        }
        obj3 = { section: obj.PREMIUM_PURCHASE, items: tmp15.premium_purchase, height: 12, header: tmp16 };
        class P {
          constructor() {
            const items = [, ];
            ({ categories: arr[0], products: arr[1] } = CollectiblesCategoryStore);
            return items;
          }
        }
        cResult[19] = tmp15.premium_purchase;
        cResult[20] = tmp16;
        cResult[21] = obj3;
        tmp31 = obj3;
      }
      const obj4 = { section: tmp17, items: tmp18, height: 12, header: tmp29 };
      cResult[16] = tmp17;
      cResult[17] = tmp18;
      cResult[18] = obj4;
      tmp30 = obj4;
    }
  }
  const tmp2Result4 = stateFromStores(7078);
  const profileFrames = tmp2Result4.getProfileFrames(stateFromStores, tmp13);
  if (cResult[11] === tmp14) {
    let tmp19;
    let tmp21;
    if (cResult[12] === stateFromStores) {
      tmp19 = cResult[13];
    }
    const obj5 = { purchase: [], premium_purchase: null, preview: [] };
    class P {
      constructor() {
        const items = [, ];
        ({ categories: arr[0], products: arr[1] } = CollectiblesCategoryStore);
        return items;
      }
    }
    const reduced = profileFrames.reduce(tmp19, obj5);
    const _Symbol = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp2(1126).intl;
      const stringResult1 = intl.string(stateFromStores(1126).t.TiLCgw);
      class P {
        constructor() {
          const items = [, ];
          ({ categories: arr[0], products: arr[1] } = CollectiblesCategoryStore);
          return items;
        }
      }
      cResult[14] = stringResult1;
      tmp21 = stringResult1;
    } else {
      tmp21 = cResult[14];
    }
    const PURCHASE = obj.PURCHASE;
    const items3 = [obj2, obj3];
    HermesBuiltin.arraySpread(items3, reduced.purchase, 2);
    cResult[4] = tmp13;
    cResult[5] = tmp14;
    cResult[6] = stateFromStores;
    cResult[7] = reduced;
    class A {
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
    cResult[9] = PURCHASE;
    cResult[10] = items3;
    tmp16 = tmp21;
    tmp17 = PURCHASE;
    tmp15 = reduced;
  }
  class A {
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
  cResult[11] = tmp14;
  cResult[12] = stateFromStores;
  cResult[13] = A;
  tmp19 = A;
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
    let intl2;
    let intl3;
    let items;
    let obj = CollectiblesUtils;
    const profileFrames = obj.getProfileFrames(stateFromStores, first);
    const reduced = profileFrames.reduce((premium_purchase, skuId) => {
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
    const intl = intl4.intl;
    obj2 = { section: obj.PURCHASE, items, height: 12, header: intl2.string(intl4.t["9eZ4aO"]) };
    items = [obj2, obj3];
    const stringResult = intl.string(intl4.t.TiLCgw);
    HermesBuiltin.arraySpread(items, reduced.purchase, 2);
    intl2 = intl4.intl;
    const items1 = [obj2, { section: obj.PREMIUM_PURCHASE, items: reduced.premium_purchase, height: 12, header: stringResult }, ];
    obj3 = { section: obj.PREVIEW, items: reduced.preview, height: 12, header: intl3.string(intl4.t["1vbbee"]) };
    intl3 = intl4.intl;
    items1[2] = obj3;
    return items1.filter((items) => items.items.length > 0);
  }, items2);
  return first(13023)(tmp5, obj.PREVIEW);
});
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/hooks/useProfileFrameSections.tsx");

export default tmp2;
export { Section };
export const NONE_ITEM = obj2;
export const SHOP_ITEM = obj3;