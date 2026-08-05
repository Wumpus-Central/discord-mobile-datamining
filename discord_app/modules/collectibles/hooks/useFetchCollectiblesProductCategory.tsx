// discord_app/modules/collectibles/hooks/useFetchCollectiblesProductCategory.tsx
import _slicedToArray from "_slicedToArray";
import updateCategoriesAndProducts from "updateCategoriesAndProducts";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProductCategory.tsx");

export const useFetchCollectiblesProductCategory = function useFetchCollectiblesProductCategory(skuId) {
  const _require = skuId;
  importDefault(8091)();
  let obj = _require(647);
  let items = [updateCategoriesAndProducts];
  const tmp2 = callback(obj.useStateFromStoresArray(items, () => {
    const items = [outer1_4.isFetchingCategories, outer1_4.getCategoryForProduct(closure_0)];
    return items;
  }), 2);
  obj = { isFetching: tmp2[0], category: tmp2[1] };
  return obj;
};