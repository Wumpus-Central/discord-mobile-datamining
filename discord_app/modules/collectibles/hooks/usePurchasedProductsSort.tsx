// discord_app/modules/collectibles/hooks/usePurchasedProductsSort.tsx
import react from "../../../../_runtime/00019_react.js";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import CollectiblesProductUtils from "../utils/CollectiblesProductUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import CollectiblesPurchaseStore from "../CollectiblesPurchaseStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const useMemo = react.useMemo;
let closure_5 = {
  NOT_PURCHASED: 0,
  [0]: "NOT_PURCHASED",
  PARTIAL_OWNED_BUNDLE: 1,
  [1]: "PARTIAL_OWNED_BUNDLE",
  PURCHASED: 2,
  [2]: "PURCHASED",
};
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let purchases;
      let tmp15;
      let tmp5;
      let tmp6;
      let tmp9;
      const obj = require("react");
      const cResult = obj.c(9);
      const tmp2 = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [CollectiblesPurchaseStore];
        const fn = function o() {
          return purchases.purchases;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = fn;
        tmp5 = items;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmp2Result = tmp2(573);
      const stateFromStores = tmp2Result.useStateFromStores(tmp5, tmp6);
      if (cResult[2] !== stateFromStores) {
        const items1 = [];
        HermesBuiltin.arraySpread(items1, stateFromStores, 0);
        const mapped = items1.map((item) => _slicedToArray(item, 1)[0]);
        cResult[2] = stateFromStores;
        cResult[3] = mapped;
        tmp9 = mapped;
      } else {
        tmp9 = cResult[3];
      }
      _require = tmp9;
      if (cResult[4] === arg0) {
        let tmp14;
        if (cResult[5] === tmp9) {
          tmp14 = cResult[6];
        }
        return tmp14;
      }
      if (cResult[7] !== tmp9) {
        const fn2 = function l(type, type2) {
          let NOT_PURCHASED;
          let tmp4;
          if (type.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
            let PARTIAL_OWNED_BUNDLE;
            const items = type.items;
            if (items.some((skuId) => obj.includes(skuId.skuId))) {
              NOT_PURCHASED = constants.PARTIAL_OWNED_BUNDLE;
              tmp4 = constants;
            }
            if (type2.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
              const items2 = type2.items;
              if (items2.some((skuId) => obj.includes(skuId.skuId))) {
                PARTIAL_OWNED_BUNDLE = tmp4.PARTIAL_OWNED_BUNDLE;
              }
              return NOT_PURCHASED - PARTIAL_OWNED_BUNDLE;
            }
            const tmpResult = CollectiblesProductUtils;
            if (tmpResult.getIsVariantProduct(type2)) {
              const variants2 = type2.variants;
              PARTIAL_OWNED_BUNDLE = variants2.every((skuId) => obj.includes(skuId.skuId))
                ? tmp4.PURCHASED
                : tmp4.NOT_PURCHASED;
            } else {
              PARTIAL_OWNED_BUNDLE = closure_0.includes(type2.skuId) ? tmp4.PURCHASED : tmp4.NOT_PURCHASED;
            }
          }
          const tmpResult2 = CollectiblesProductUtils;
          if (tmpResult2.getIsVariantProduct(type)) {
            let NOT_PURCHASED2;
            let tmp6;
            const variants = type.variants;
            if (variants.every((skuId) => obj.includes(skuId.skuId))) {
              NOT_PURCHASED2 = constants.PURCHASED;
              tmp6 = constants;
            } else {
              NOT_PURCHASED2 = constants.NOT_PURCHASED;
              tmp6 = constants;
            }
            tmp4 = tmp6;
            NOT_PURCHASED = NOT_PURCHASED2;
          } else if (closure_0.includes(type.skuId)) {
            NOT_PURCHASED = constants.PURCHASED;
            tmp4 = constants;
          } else {
            NOT_PURCHASED = constants.NOT_PURCHASED;
            tmp4 = constants;
          }
        };
        cResult[7] = tmp9;
        cResult[8] = fn2;
        tmp15 = fn2;
      } else {
        tmp15 = cResult[8];
      }
      let items2 = [...arg0];
      const sorted = items2.sort(tmp15);
      cResult[4] = arg0;
      cResult[5] = tmp9;
      cResult[6] = sorted;
      tmp14 = sorted;
    }
  : (arg0) => {
      let args;
      let purchases;
      let stateFromStores;
      _require = arg0;
      const obj = require("useStateFromStores");
      let items = [CollectiblesPurchaseStore];
      stateFromStores = obj.useStateFromStores(items, () => purchases.purchases);
      const items1 = [stateFromStores];
      const tmp2 = useMemo(() => {
        const items = [...stateFromStores];
        return items.map((item) => {
          let tmp;
          [tmp] = item;
          return tmp;
        });
      }, items1);
      let closure_2 = tmp2;
      let items2 = [arg0, tmp2];
      return useMemo(() => {
        let items = [...closure_0];
        return items.sort((type, type2) => {
          let NOT_PURCHASED;
          let tmp4;
          let closure_0 = closure_1_2;
          if (type.type === closure_0(stateFromStores[3]).CollectiblesItemType.BUNDLE) {
            let PARTIAL_OWNED_BUNDLE;
            const items = type.items;
            if (items.some((skuId) => obj.includes(skuId.skuId))) {
              NOT_PURCHASED = constants.PARTIAL_OWNED_BUNDLE;
              tmp4 = constants;
            }
            if (type2.type === closure_0(stateFromStores[3]).CollectiblesItemType.BUNDLE) {
              const items2 = type2.items;
              if (items2.some((skuId) => obj.includes(skuId.skuId))) {
                PARTIAL_OWNED_BUNDLE = tmp4.PARTIAL_OWNED_BUNDLE;
              }
              return NOT_PURCHASED - PARTIAL_OWNED_BUNDLE;
            }
            const tmpResult = closure_0(stateFromStores[4]);
            if (tmpResult.getIsVariantProduct(type2)) {
              const variants2 = type2.variants;
              PARTIAL_OWNED_BUNDLE = variants2.every((skuId) => obj.includes(skuId.skuId))
                ? tmp4.PURCHASED
                : tmp4.NOT_PURCHASED;
            } else {
              PARTIAL_OWNED_BUNDLE = closure_1_2.includes(type2.skuId) ? tmp4.PURCHASED : tmp4.NOT_PURCHASED;
            }
          }
          const tmpResult2 = closure_0(stateFromStores[4]);
          if (tmpResult2.getIsVariantProduct(type)) {
            let NOT_PURCHASED2;
            let tmp6;
            const variants = type.variants;
            if (variants.every((skuId) => obj.includes(skuId.skuId))) {
              NOT_PURCHASED2 = constants.PURCHASED;
              tmp6 = constants;
            } else {
              NOT_PURCHASED2 = constants.NOT_PURCHASED;
              tmp6 = constants;
            }
            tmp4 = tmp6;
            NOT_PURCHASED = NOT_PURCHASED2;
          } else if (closure_1_2.includes(type.skuId)) {
            NOT_PURCHASED = constants.PURCHASED;
            tmp4 = constants;
          } else {
            NOT_PURCHASED = constants.NOT_PURCHASED;
            tmp4 = constants;
          }
        });
      }, items2);
    };
const result = size.fileFinishedImporting("modules/collectibles/hooks/usePurchasedProductsSort.tsx");

export const usePurchasedProductsSort = tmp2;
