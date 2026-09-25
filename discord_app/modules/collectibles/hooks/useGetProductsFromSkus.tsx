// === Module 15407: useGetProductsFromSkus ===

// Module 15407 (useGetProductsFromSkus)
import _mod19 from "module_19" /* 19 */;
import uniqByDefault from "uniqBy" /* 15408 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6957 */;
import size from "module_2" /* 2 */;

_mod19.useCallback;
const result = size.fileFinishedImporting("modules/collectibles/hooks/useGetProductsFromSkus.tsx");

export default function useGetProductsFromSkus() {
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
};