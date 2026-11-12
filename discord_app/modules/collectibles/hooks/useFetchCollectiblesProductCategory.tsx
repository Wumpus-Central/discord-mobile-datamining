// === Module 9958: useFetchCollectiblesProductCategory ===

// Module 9958 (useFetchCollectiblesProductCategory)
import useMaybeFetchCollectiblesCategoriesDefault from "useMaybeFetchCollectiblesCategories" /* 9959 */;
import _slicedToArray from "module_32" /* 32 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 8419 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProductCategory.tsx");

export function useFetchCollectiblesProductCategory(skuId) {
  _require = skuId;
  useMaybeFetchCollectiblesCategoriesDefault();
  items = [CollectiblesCategoryStore];
  const tmp2 = _slicedToArray(require("useStateFromStores").useStateFromStoresArray(items, () => {
    items = [CollectiblesCategoryStore.isFetchingCategories, CollectiblesCategoryStore.getCategoryForProduct(closure_0)];
    return items;
  }), 2);
  return { isFetching: tmp2[0], category: tmp2[1] };
}