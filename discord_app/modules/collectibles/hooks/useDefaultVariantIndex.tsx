// discord_app/modules/collectibles/hooks/useDefaultVariantIndex.tsx
import CollectiblesPurchaseStore from "../CollectiblesPurchaseStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useDefaultVariantIndex.tsx");

export const useDefaultVariantIndex = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDefaultVariantIndex(product) {
      const cResult = stateFromStores(576).c(7);
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
      let variants = product;
      const obj = stateFromStores(576);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
      if (null != product) {
        if (tmpResult2.getIsVariantProduct(variants)) {
          if (cResult[2] === variants.variants) {
            if (cResult[3] === stateFromStores) {
              const _Math = Math;
              return Math.max(0, cResult[4]);
            }
          }
          if (cResult[5] !== stateFromStores) {
            const fn2 = function c(skuId) {
              return !stateFromStores.has(skuId.skuId);
            };
            cResult[5] = stateFromStores;
            cResult[6] = fn2;
            let tmp8 = fn2;
          } else {
            tmp8 = cResult[6];
          }
          const variants2 = variants.variants;
          const findIndexResult = variants2.findIndex(tmp8);
          variants = variants.variants;
          cResult[2] = variants;
          cResult[3] = stateFromStores;
          cResult[4] = findIndexResult;
        }
        tmpResult2 = tmp(7274);
      }
      return 0;
    }
  : function useDefaultVariantIndex(variants) {
      const items = [CollectiblesPurchaseStore];
      _require = require("initialize").useStateFromStores(items, () => purchases.purchases);
      let num = 0;
      if (null != variants) {
        num = 0;
        if (tmpResult.getIsVariantProduct(variants)) {
          const _Math = Math;
          variants = variants.variants;
          num = Math.max(
            0,
            variants.findIndex((skuId) => !set.has(skuId.skuId)),
          );
        }
        tmpResult = require("CollectiblesProductUtils");
      }
      return num;
    };
