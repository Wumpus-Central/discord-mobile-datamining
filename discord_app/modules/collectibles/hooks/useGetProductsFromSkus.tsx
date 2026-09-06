// discord_app/modules/collectibles/hooks/useGetProductsFromSkus.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import uniqByDefault from "../../../../_runtime/15073_uniqBy.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
          productByStoreListingId = productByStoreListingId.getProductByStoreListingId(
            value.variantGroupStoreListingId,
          );
        }
      }
      return productByStoreListingId;
    });
    return uniqByDefault(
      mapped.filter((item) => null != item),
      "storeListingId",
    );
  }, items1);
}
