// discord_app/modules/collectibles/hooks/useFetchCollectiblesProductCategory.tsx
import useMaybeFetchCollectiblesCategoriesDefault from "useMaybeFetchCollectiblesCategories.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProductCategory.tsx");

export const useFetchCollectiblesProductCategory = function useFetchCollectiblesProductCategory(skuId) {
  _require = skuId;
  useMaybeFetchCollectiblesCategoriesDefault();
  let obj = require("useStateFromStores");
  let items = [CollectiblesCategoryStore];
  const tmp2 = _slicedToArray(
    obj.useStateFromStoresArray(items, () => {
      const items = [
        CollectiblesCategoryStore.isFetchingCategories,
        CollectiblesCategoryStore.getCategoryForProduct(closure_0),
      ];
      return items;
    }),
    2,
  );
  obj = { isFetching: tmp2[0], category: tmp2[1] };
  return obj;
};
