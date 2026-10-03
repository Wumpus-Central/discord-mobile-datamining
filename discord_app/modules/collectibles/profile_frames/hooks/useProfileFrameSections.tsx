// discord_app/modules/collectibles/profile_frames/hooks/useProfileFrameSections.tsx
import util from "../../../../intl/index.native.tsx";
import CollectiblesUtils from "../../CollectiblesUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import CollectiblesCategoryStore from "../../CollectiblesCategoryStore.tsx";
import CollectiblesPurchaseStore from "../../CollectiblesPurchaseStore.tsx";

require = fn;
const useMemo = fn(19).useMemo;
const Section = { PURCHASE: "purchase", PREMIUM_PURCHASE: "premium_purchase", PREVIEW: "preview" };
let obj2 = { skuId: "None" };
let obj3 = { skuId: "Shop" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/hooks/useProfileFrameSections.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let obj = stateFromStores(576);
      const cResult = obj.c(29);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [CollectiblesPurchaseStore];
        const fn = function h() {
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
        class P {
          constructor() {
            items = [,];
            ({ categories: arr[0], products: arr[1] } = closure_1_5);
            return items;
          }
        }
        cResult[2] = items1;
        cResult[3] = P;
        let tmp9 = P;
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
            class P {
              constructor() {
                items = [,];
                ({ categories: arr[0], products: arr[1] } = closure_1_5);
                return items;
              }
            }
            const _Symbol2 = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(1126).intl;
              const stringResult = intl2.string(tmp(1126).t["9eZ4aO"]);
              class P {
                constructor() {
                  items = [,];
                  ({ categories: arr[0], products: arr[1] } = closure_1_5);
                  return items;
                }
              }
              cResult[15] = stringResult;
              let tmp32 = stringResult;
            } else {
              tmp32 = cResult[15];
            }
            if (cResult[16] === cResult[9]) {
              if (cResult[17] === tmp17) {
                let tmp34 = cResult[18];
              }
              if (cResult[19] === tmp14.premium_purchase) {
                if (cResult[20] === tmp15) {
                  let tmp35 = cResult[21];
                }
                const _Symbol3 = Symbol;
                let preview = tmp14.preview;
                class P {
                  constructor() {
                    items = [,];
                    ({ categories: arr[0], products: arr[1] } = closure_1_5);
                    return items;
                  }
                }
                if (tmp36 === Symbol.for("react.memo_cache_sentinel")) {
                  const intl3 = tmp(1126).intl;
                  const stringResult1 = intl3.string(tmp(1126).t["1vbbee"]);
                  class P {
                    constructor() {
                      items = [,];
                      ({ categories: arr[0], products: arr[1] } = closure_1_5);
                      return items;
                    }
                  }
                  cResult[22] = stringResult1;
                  let tmp37 = stringResult1;
                } else {
                  tmp37 = cResult[22];
                }
                if (cResult[23] !== tmp14.preview) {
                  obj2 = { section: obj.PREVIEW, items: null, height: 12, header: null };
                  class P {
                    constructor() {
                      items = [,];
                      ({ categories: arr[0], products: arr[1] } = closure_1_5);
                      return items;
                    }
                  }
                  obj2.header = tmp37;
                  cResult[23] = tmp14.preview;
                  cResult[24] = obj2;
                  let tmp39 = obj2;
                } else {
                  tmp39 = cResult[24];
                }
                if (cResult[25] === tmp39) {
                  if (cResult[26] === tmp34) {
                    class P {
                      constructor() {
                        items = [,];
                        ({ categories: arr[0], products: arr[1] } = closure_1_5);
                        return items;
                      }
                    }
                  }
                }
                const items2 = [tmp34, tmp35, tmp39];
                const found = items2.filter((items) => items.items.length > 0);
                cResult[25] = tmp39;
                cResult[26] = tmp34;
                cResult[27] = tmp35;
                cResult[28] = found;
              }
              obj3 = { section: null, items: null, height: 12, header: null };
              class P {
                constructor() {
                  items = [,];
                  ({ categories: arr[0], products: arr[1] } = closure_1_5);
                  return items;
                }
              }
              obj3.section = obj.PREMIUM_PURCHASE;
              obj3.items = tmp14.premium_purchase;
              obj3.header = tmp15;
              cResult[19] = tmp14.premium_purchase;
              cResult[20] = tmp15;
              cResult[21] = obj3;
              tmp35 = obj3;
            }
            const obj4 = { section: cResult[9], items: tmp17, height: 12, header: tmp32 };
            cResult[16] = cResult[9];
            cResult[17] = tmp17;
            cResult[18] = obj4;
            tmp34 = obj4;
          }
        }
      }
      const tmp11 = _slicedToArray(stateFromStores(573).useStateFromStoresArray(tmp8, tmp9), 2);
      const profileFrames = stateFromStores(7065).getProfileFrames(stateFromStores, tmp12);
      if (cResult[11] === tmp13) {
        if (cResult[12] === stateFromStores) {
          let tmp18 = cResult[13];
        }
        const obj5 = { purchase: [], premium_purchase: null, preview: null };
        class P {
          constructor() {
            items = [,];
            ({ categories: arr[0], products: arr[1] } = closure_1_5);
            return items;
          }
        }
        obj5.preview = [];
        const reduced = profileFrames.reduce(tmp18, obj5);
        const _Symbol = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult2 = intl.string(tmp(1126).t.TiLCgw);
          class P {
            constructor() {
              items = [,];
              ({ categories: arr[0], products: arr[1] } = closure_1_5);
              return items;
            }
          }
          cResult[14] = stringResult2;
        }
        const PURCHASE = obj.PURCHASE;
        const items3 = [obj2, obj3];
        HermesBuiltin.arraySpread(reduced.purchase, num5);
        cResult[4] = tmp12;
        cResult[5] = tmp13;
        cResult[6] = stateFromStores;
        cResult[7] = reduced;
        class A {
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
        cResult[9] = PURCHASE;
        num5 = 10;
        cResult[10] = items3;
      }
      class A {
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
      cResult[11] = tmp13;
      cResult[12] = stateFromStores;
      cResult[13] = A;
      tmp18 = A;
      const tmpResult4 = stateFromStores(7065);
    }
  : () => {
      let obj = stateFromStores(573);
      let items = [CollectiblesPurchaseStore];
      stateFromStores = obj.useStateFromStores(items, () => purchases.purchases);
      let items1 = [CollectiblesCategoryStore];
      const tmp2 = _slicedToArray(
        stateFromStores(573).useStateFromStoresArray(items1, () => {
          const items = [,];
          ({ categories: arr[0], products: arr[1] } = CollectiblesCategoryStore);
          return items;
        }),
        2,
      );
      const first = tmp2[0];
      dependencyMap = tmp4;
      const items2 = [first, tmp2[1], stateFromStores];
      obj2 = stateFromStores(573);
      return first(13002)(
        useMemo(() => {
          let obj = CollectiblesUtils;
          const profileFrames = obj.getProfileFrames(stateFromStores, first);
          const reduced = profileFrames.reduce(
            (premium_purchase, skuId) => {
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
            },
            { purchase: [], premium_purchase: [], preview: [] },
          );
          const intl = util.intl;
          obj2 = { section: obj.PURCHASE, items: null, height: 12, header: null };
          const items = [obj2, obj3];
          HermesBuiltin.arraySpread(reduced.purchase, 2);
          obj2.items = items;
          const intl2 = util.intl;
          obj2.header = intl2.string(util.t["9eZ4aO"]);
          const items1 = [
            obj2,
            {
              section: obj.PREMIUM_PURCHASE,
              items: reduced.premium_purchase,
              height: 12,
              header: intl.string(util.t.TiLCgw),
            },
          ];
          obj3 = { section: obj.PREVIEW, items: reduced.preview, height: 12, header: null };
          const intl3 = util.intl;
          obj3.header = intl3.string(util.t["1vbbee"]);
          items1[2] = obj3;
          return items1.filter((items) => items.items.length > 0);
        }, items2),
        obj.PREVIEW,
      );
    };
export { Section };
export const NONE_ITEM = obj2;
export const SHOP_ITEM = obj3;
