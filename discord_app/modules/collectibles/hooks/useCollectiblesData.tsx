// === Module 8387: useCollectiblesData ===

// Module 8387 (useCollectiblesData)
import _slicedToArray from "_slicedToArray" /* 32 */;
import updateCategoriesAndProducts from "updateCategoriesAndProducts" /* 5301 */;
import map from "map" /* 5324 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/hooks/useCollectiblesData.tsx");

export default function useCollectiblesData(arg0) {
  const _require = arg0;
  let obj = _require(647);
  let items = [closure_3];
  const tmp = callback(obj.useStateFromStoresArray(items, () => {
    const items = [closure_1_3.getCategoryForProduct(closure_0), closure_1_3.getProduct(closure_0)];
    return items;
  }), 2);
  obj = { category: tmp[0], product: tmp[1], purchase: _require(647).useStateFromStores(items1, () => closure_1_4.getPurchase(closure_0)) };
  items1 = [closure_4];
  return obj;
};