// === Module 16196: useGetProductsFromSkus ===

// Module 16196 (useGetProductsFromSkus)
import _mod19 from "module_19" /* 19 */;
import uniqByDefault from "uniqBy" /* 16197 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7263 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

_mod19.useCallback;
const result = size.fileFinishedImporting("modules/collectibles/hooks/useGetProductsFromSkus.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGetProductsFromSkus() {
  const cResult = stateFromStores(576).c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesCategoryStore];
    const fn = function u() {
      return productByStoreListingId.products;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const fn2 = function n(arr) {
      const mapped = arr.map((item) => {
        value = stateFromStores.get(item);
        productByStoreListingId = value;
        if (null != value) {
          productByStoreListingId = value;
          if (null != value.variantGroupStoreListingId) {
            productByStoreListingId = productByStoreListingId.getProductByStoreListingId(value.variantGroupStoreListingId);
          }
        }
        return productByStoreListingId;
      });
      return uniqByDefault(mapped.filter((item) => null != item), "storeListingId");
    };
    cResult[2] = stateFromStores;
    cResult[3] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (function useGetProductsFromSkus() {
  const items = [CollectiblesCategoryStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => productByStoreListingId.products);
  const items1 = [stateFromStores];
  return useCallback((arr) => {
    const mapped = arr.map((item) => {
      value = stateFromStores.get(item);
      productByStoreListingId = value;
      if (null != value) {
        productByStoreListingId = value;
        if (null != value.variantGroupStoreListingId) {
          productByStoreListingId = productByStoreListingId.getProductByStoreListingId(value.variantGroupStoreListingId);
        }
      }
      return productByStoreListingId;
    });
    return uniqByDefault(mapped.filter((item) => null != item), "storeListingId");
  }, items1);
});