// === Module 14426: useGetProductsFromSkus ===

// Module 14426 (useGetProductsFromSkus)
import obj132 from "obj132" /* 2 */;
import noop from "noop" /* 19 */;
import uniqByDefault from "uniqBy" /* 14427 */;
import updateCategoriesAndProducts from "updateCategoriesAndProducts" /* 5301 */;

noop.useCallback;
const result = obj132.fileFinishedImporting("modules/collectibles/hooks/useGetProductsFromSkus.tsx");

export default function useGetProductsFromSkus() {
  const items = [closure_4];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => products.products);
  const items1 = [stateFromStores];
  return useCallback((arr) => {
    const mapped = arr.map((item, index) => {
      const value = closure_0.get(item);
      let productByStoreListingId = value;
      if (null != value) {
        productByStoreListingId = value;
        if (null != value.variantGroupStoreListingId) {
          productByStoreListingId = closure_1_4.getProductByStoreListingId(value.variantGroupStoreListingId);
        }
      }
      return productByStoreListingId;
    });
    return uniqByDefault(mapped.filter((item, index) => null != item), "storeListingId");
  }, items1);
};