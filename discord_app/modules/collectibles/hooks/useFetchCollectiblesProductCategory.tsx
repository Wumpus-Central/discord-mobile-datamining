// === Module 10038: useFetchCollectiblesProductCategory ===

// Module 10038 (useFetchCollectiblesProductCategory)
import useMaybeFetchCollectiblesCategoriesDefault from "useMaybeFetchCollectiblesCategories" /* 10039 */;
import _slicedToArray from "module_32" /* 32 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 8496 */;

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