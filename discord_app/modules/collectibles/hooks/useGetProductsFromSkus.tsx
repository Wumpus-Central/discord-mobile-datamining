// === Module 14900: useGetProductsFromSkus ===

// Module 14900 (useGetProductsFromSkus)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import closure_4 from "updateCategoriesAndProducts" /* 7296 */;

noop.useCallback;
const result = set.fileFinishedImporting("modules/collectibles/hooks/useGetProductsFromSkus.tsx");

export default function useGetProductsFromSkus() {
  const items = [closure_4];
  stateFromStores = stateFromStores(586).useStateFromStores(items, () => products.products);
  const items1 = [stateFromStores];
  return useCallback((arr) => {
    const mapped = arr.map((arg0) => {
      const value = closure_0.get(arg0);
      let productByStoreListingId = value;
      if (null != value) {
        productByStoreListingId = value;
        if (null != value.variantGroupStoreListingId) {
          productByStoreListingId = closure_1_4.getProductByStoreListingId(value.variantGroupStoreListingId);
        }
      }
      return productByStoreListingId;
    });
    return closure_1_1(closure_1_2[3])(mapped.filter((arg0) => null != arg0), "storeListingId");
  }, items1);
};