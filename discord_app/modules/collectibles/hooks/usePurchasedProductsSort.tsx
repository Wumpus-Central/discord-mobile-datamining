// === Module 14879: usePurchasedProductsSort ===

// Module 14879 (usePurchasedProductsSort)
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7064 */;
import _slicedToArray from "module_32" /* 32 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7068 */;

const require = globalThis.__r;

require = fn;
const useMemo = fn(19).useMemo;
let closure_5 = { NOT_PURCHASED: 0, [0]: "NOT_PURCHASED", PARTIAL_OWNED_BUNDLE: 1, [1]: "PARTIAL_OWNED_BUNDLE", PURCHASED: 2, [2]: "PURCHASED" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/usePurchasedProductsSort.tsx");

export const usePurchasedProductsSort = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [CollectiblesPurchaseStore];
    const fn = function o() {
      return purchases.purchases;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const items1 = [];
    HermesBuiltin.arraySpread(stateFromStores, 0);
    const mapped = items1.map((item) => _slicedToArray(item, 1)[0]);
    cResult[2] = stateFromStores;
    cResult[3] = mapped;
    let tmp8 = mapped;
  } else {
    tmp8 = cResult[3];
  }
  _require = tmp8;
  if (cResult[4] === arg0) {
    if (cResult[5] === tmp8) {
      return cResult[6];
    }
  }
  if (cResult[7] !== tmp8) {
    const fn2 = function l(type, type2) {
      const obj = closure_0;
      if (type.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
        const items = type.items;
        if (items.some((skuId) => obj.includes(skuId.skuId))) {
          let NOT_PURCHASED = constants.PARTIAL_OWNED_BUNDLE;
          let tmp4 = constants;
        }
        if (type2.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
          const items2 = type2.items;
          if (items2.some((skuId) => obj.includes(skuId.skuId))) {
            let PARTIAL_OWNED_BUNDLE = tmp4.PARTIAL_OWNED_BUNDLE;
          }
          return NOT_PURCHASED - PARTIAL_OWNED_BUNDLE;
        }
        if (tmpResult.getIsVariantProduct(type2)) {
          const variants2 = type2.variants;
          variants2.every((skuId) => obj.includes(skuId.skuId)) ? tmp4.PURCHASED : tmp4.NOT_PURCHASED;
        } else {
          PARTIAL_OWNED_BUNDLE = obj.includes(type2.skuId) ? tmp4.PURCHASED : tmp4.NOT_PURCHASED;
        }
        tmpResult = CollectiblesProductUtils;
      }
      if (tmpResult2.getIsVariantProduct(type)) {
        const variants = type.variants;
        if (variants.every((skuId) => obj.includes(skuId.skuId))) {
          let NOT_PURCHASED2 = constants.PURCHASED;
        } else {
          NOT_PURCHASED2 = constants.NOT_PURCHASED;
        }
      } else if (obj.includes(type.skuId)) {
        NOT_PURCHASED = constants.PURCHASED;
        tmp4 = constants;
      } else {
        NOT_PURCHASED = constants.NOT_PURCHASED;
        tmp4 = constants;
      }
      tmpResult2 = CollectiblesProductUtils;
    };
    cResult[7] = tmp8;
    cResult[8] = fn2;
    let tmp13 = fn2;
  } else {
    tmp13 = cResult[8];
  }
  let items2 = [...arg0];
  const sorted = items2.sort(tmp13);
  cResult[4] = arg0;
  cResult[5] = tmp8;
  cResult[6] = sorted;
  let tmpResult = require("useStateFromStores");
}) : ((arg0) => {
  _require = arg0;
  let items = [CollectiblesPurchaseStore];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => purchases.purchases);
  const items1 = [stateFromStores];
  const tmp2 = useMemo(() => {
    const items = [...stateFromStores];
    return items.map((item) => {
      [tmp] = item;
      return tmp;
    });
  }, items1);
  closure_2 = tmp2;
  let items2 = [arg0, tmp2];
  return useMemo(() => {
    let items = [...closure_0];
    return items.sort((type, type2) => {
      const obj = closure_1_2;
      if (type.type === closure_0(stateFromStores[3]).CollectiblesItemType.BUNDLE) {
        const items = type.items;
        if (items.some((skuId) => obj.includes(skuId.skuId))) {
          let NOT_PURCHASED = constants.PARTIAL_OWNED_BUNDLE;
          let tmp4 = constants;
        }
        if (type2.type === closure_0(stateFromStores[3]).CollectiblesItemType.BUNDLE) {
          const items2 = type2.items;
          if (items2.some((skuId) => obj.includes(skuId.skuId))) {
            let PARTIAL_OWNED_BUNDLE = tmp4.PARTIAL_OWNED_BUNDLE;
          }
          return NOT_PURCHASED - PARTIAL_OWNED_BUNDLE;
        }
        if (tmpResult.getIsVariantProduct(type2)) {
          const variants2 = type2.variants;
          variants2.every((skuId) => obj.includes(skuId.skuId)) ? tmp4.PURCHASED : tmp4.NOT_PURCHASED;
        } else {
          PARTIAL_OWNED_BUNDLE = obj.includes(type2.skuId) ? tmp4.PURCHASED : tmp4.NOT_PURCHASED;
        }
        tmpResult = closure_0(stateFromStores[4]);
      }
      if (tmpResult2.getIsVariantProduct(type)) {
        const variants = type.variants;
        if (variants.every((skuId) => obj.includes(skuId.skuId))) {
          let NOT_PURCHASED2 = constants.PURCHASED;
        } else {
          NOT_PURCHASED2 = constants.NOT_PURCHASED;
        }
      } else if (obj.includes(type.skuId)) {
        NOT_PURCHASED = constants.PURCHASED;
        tmp4 = constants;
      } else {
        NOT_PURCHASED = constants.NOT_PURCHASED;
        tmp4 = constants;
      }
      tmpResult2 = closure_0(stateFromStores[4]);
    });
  }, items2);
});