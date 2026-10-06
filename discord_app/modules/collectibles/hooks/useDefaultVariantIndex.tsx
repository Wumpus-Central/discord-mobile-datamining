// === Module 8452: useDefaultVariantIndex ===

// Module 8452 (useDefaultVariantIndex)
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7081 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, variants;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((variants) => {
  let purchases;
  let stateFromStores;
  let tmp4;
  let tmp5;
  const obj = stateFromStores(576);
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesPurchaseStore];
    const fn = function u() {
      return purchases.purchases;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = stateFromStores(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (null != variants) {
    const tmpResult2 = stateFromStores(7077);
    if (tmpResult2.getIsVariantProduct(variants)) {
      let tmp9;
      if (cResult[2] === variants.variants) {
        let tmp8;
        if (cResult[3] === stateFromStores) {
          tmp8 = cResult[4];
        }
        const _Math = Math;
        return Math.max(0, tmp8);
      }
      if (cResult[5] !== stateFromStores) {
        const fn2 = function c(skuId) {
          return !stateFromStores.has(skuId.skuId);
        };
        cResult[5] = stateFromStores;
        cResult[6] = fn2;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[6];
      }
      variants = variants.variants;
      const findIndexResult = variants.findIndex(tmp9);
      cResult[2] = variants.variants;
      cResult[3] = stateFromStores;
      cResult[4] = findIndexResult;
      tmp8 = findIndexResult;
    }
  }
  return 0;
}) : ((variants) => {
  let purchases;
  const items = [CollectiblesPurchaseStore];
  const obj = require("get initialized");
  const tmp = _require;
  _require = obj.useStateFromStores(items, () => purchases.purchases);
  let num = 0;
  if (null != variants) {
    num = 0;
    const tmpResult = tmp(7077);
    if (tmpResult.getIsVariantProduct(variants)) {
      const _Math = Math;
      variants = variants.variants;
      num = Math.max(0, variants.findIndex((skuId) => !set.has(skuId.skuId)));
    }
  }
  return num;
});
const result = size.fileFinishedImporting("modules/collectibles/hooks/useDefaultVariantIndex.tsx");

export const useDefaultVariantIndex = tmp2;