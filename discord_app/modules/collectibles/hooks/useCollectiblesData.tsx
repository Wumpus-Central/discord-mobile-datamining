// === Module 9404: useCollectiblesData ===

// Module 9404 (useCollectiblesData)
import _slicedToArray from "module_32" /* 32 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 8485 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 8500 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useCollectiblesData.tsx");

export default function useCollectiblesData(arg0) {
  _require = arg0;
  items = [CollectiblesCategoryStore];
  const tmp = _slicedToArray(require("useStateFromStores").useStateFromStoresArray(items, () => {
    items = [CollectiblesCategoryStore.getCategoryForProduct(closure_0), CollectiblesCategoryStore.getProduct(closure_0)];
    return items;
  }), 2);
  const obj2 = { category: tmp[0], product: tmp[1], purchase: null };
  const obj = require("useStateFromStores");
  const items1 = [CollectiblesPurchaseStore];
  obj2.purchase = require("useStateFromStores").useStateFromStores(items1, () => CollectiblesPurchaseStore.getPurchase(closure_0));
  return obj2;
};