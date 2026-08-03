import _slicedToArray from "_slicedToArray";
import updateCategoriesAndProducts from "updateCategoriesAndProducts";
import map from "map";

const require = arg1;
const result = require("map").fileFinishedImporting("modules/collectibles/hooks/useCollectiblesData.tsx");

export default function useCollectiblesData(arg0) {
  const _require = arg0;
  let obj = _require(647);
  let items = [updateCategoriesAndProducts];
  const tmp = callback(obj.useStateFromStoresArray(items, () => {
    const items = [outer1_3.getCategoryForProduct(closure_0), outer1_3.getProduct(closure_0)];
    return items;
  }), 2);
  obj = { category: tmp[0], product: tmp[1], purchase: null };
  const items1 = [map];
  obj[2] = _require(647).useStateFromStores(items1, () => outer1_4.getPurchase(closure_0));
  return obj;
};