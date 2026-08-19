// discord_app/modules/collectibles/hooks/useGetProductsFromSkus.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import noop from "../../../../_runtime/00019_noop.js";
import uniqByDefault from "../../../../_runtime/14427_uniqBy.js";
import updateCategoriesAndProducts from "../CollectiblesCategoryStore.tsx";

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