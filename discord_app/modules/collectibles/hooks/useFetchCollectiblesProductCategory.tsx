// === Module 10394: useFetchCollectiblesProductCategory ===

// Module 10394 (useFetchCollectiblesProductCategory)
import obj132Default from "obj132" /* 8390 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import updateCategoriesAndProducts from "updateCategoriesAndProducts" /* 5301 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProductCategory.tsx");

export const useFetchCollectiblesProductCategory = function useFetchCollectiblesProductCategory(skuId) {
  const _require = skuId;
  obj132Default();
  let obj = _require(647);
  let items = [closure_4];
  const tmp2 = callback(obj.useStateFromStoresArray(items, () => {
    const items = [closure_1_4.isFetchingCategories, closure_1_4.getCategoryForProduct(closure_0)];
    return items;
  }), 2);
  obj = { isFetching: tmp2[0], category: tmp2[1] };
  return obj;
};