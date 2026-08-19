// discord_app/modules/collectibles/hooks/useFetchCollectiblesProductCategory.tsx
import obj132Default from "useMaybeFetchCollectiblesCategories.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import updateCategoriesAndProducts from "../CollectiblesCategoryStore.tsx";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProductCategory.tsx");

export const useFetchCollectiblesProductCategory = function useFetchCollectiblesProductCategory(skuId) {
  const _require = skuId;
  obj132Default();
  let obj = defaultAreStatesEqual;
  let items = [closure_4];
  const tmp2 = callback(obj.useStateFromStoresArray(items, () => {
    const items = [closure_1_4.isFetchingCategories, closure_1_4.getCategoryForProduct(closure_0)];
    return items;
  }), 2);
  obj = { isFetching: tmp2[0], category: tmp2[1] };
  return obj;
};