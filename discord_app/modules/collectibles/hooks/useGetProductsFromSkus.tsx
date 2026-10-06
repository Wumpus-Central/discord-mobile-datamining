// === Module 15754: useGetProductsFromSkus ===

// Module 15754 (useGetProductsFromSkus)
import react from "react" /* 19 */;
import uniqByDefault from "uniqBy" /* 15755 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7066 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let productByStoreListingId;

const useCallback = react.useCallback;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let stateFromStores;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp = stateFromStores;
  const obj = stateFromStores(576);
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesCategoryStore];
    const fn = function n() {
      return productByStoreListingId.products;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const fn2 = function s(arr) {
      const tmp = uniqByDefault;
      const mapped = arr.map((item) => {
        const value = stateFromStores.get(item);
        productByStoreListingId = value;
        if (null != value) {
          productByStoreListingId = value;
          if (null != value.variantGroupStoreListingId) {
            productByStoreListingId = productByStoreListingId.getProductByStoreListingId(value.variantGroupStoreListingId);
          }
        }
        return productByStoreListingId;
      });
      return tmp(mapped.filter((item) => null != item), "storeListingId");
    };
    cResult[2] = stateFromStores;
    cResult[3] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (() => {
  let stateFromStores;
  const items = [CollectiblesCategoryStore];
  const obj = stateFromStores(504);
  stateFromStores = obj.useStateFromStores(items, () => productByStoreListingId.products);
  const items1 = [stateFromStores];
  return useCallback((arr) => {
    const tmp = uniqByDefault;
    const mapped = arr.map((item) => {
      const value = stateFromStores.get(item);
      productByStoreListingId = value;
      if (null != value) {
        productByStoreListingId = value;
        if (null != value.variantGroupStoreListingId) {
          productByStoreListingId = productByStoreListingId.getProductByStoreListingId(value.variantGroupStoreListingId);
        }
      }
      return productByStoreListingId;
    });
    return tmp(mapped.filter((item) => null != item), "storeListingId");
  }, items1);
});
const result = size.fileFinishedImporting("modules/collectibles/hooks/useGetProductsFromSkus.tsx");

export default tmp2;