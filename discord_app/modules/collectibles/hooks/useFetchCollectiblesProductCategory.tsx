// === Module 10767: useFetchCollectiblesProductCategory ===

// Module 10767 (useFetchCollectiblesProductCategory)
import setDefault from "set" /* 8031 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "updateCategoriesAndProducts" /* 7234 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProductCategory.tsx");

export const useFetchCollectiblesProductCategory = function useFetchCollectiblesProductCategory(skuId) {
  const _require = skuId;
  setDefault();
  let obj = _require(647);
  let items = [closure_4];
  const tmp2 = callback(obj.useStateFromStoresArray(items, () => {
    const items = [closure_1_4.isFetchingCategories, closure_1_4.getCategoryForProduct(closure_0)];
    return items;
  }), 2);
  obj = { isFetching: tmp2[0], category: tmp2[1] };
  return obj;
};