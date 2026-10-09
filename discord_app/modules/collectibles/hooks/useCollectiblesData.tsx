// === Module 8281: useCollectiblesData ===

// Module 8281 (useCollectiblesData)
import _slicedToArray from "module_32" /* 32 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7257 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7272 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useCollectiblesData.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useCollectiblesData(arg0) {
  _require = arg0;
  const cResult = require("c").c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [CollectiblesCategoryStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      const items = [CollectiblesCategoryStore.getCategoryForProduct(closure_0), CollectiblesCategoryStore.getProduct(closure_0)];
      return items;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const tmpResult = require("useStateFromStores");
  [tmp8, tmp9] = require("useStateFromStores").useStateFromStoresArray(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CollectiblesPurchaseStore];
    cResult[3] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function y() {
      return CollectiblesPurchaseStore.getPurchase(closure_0);
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[5];
  }
  const tmp7 = _slicedToArray(require("useStateFromStores").useStateFromStoresArray(first, tmp6), 2);
  const stateFromStores = require("useStateFromStores").useStateFromStores(tmp10, tmp12);
  if (cResult[6] === tmp8) {
    if (cResult[7] === tmp9) {
      if (cResult[8] === stateFromStores) {
        let tmp14 = cResult[9];
      }
      return tmp14;
    }
  }
  const obj2 = { category: tmp8, product: tmp9, purchase: stateFromStores };
  cResult[6] = tmp8;
  cResult[7] = tmp9;
  cResult[8] = stateFromStores;
  cResult[9] = obj2;
  tmp14 = obj2;
  const tmpResult2 = require("useStateFromStores");
}) : (function useCollectiblesData(arg0) {
  _require = arg0;
  let items = [CollectiblesCategoryStore];
  const tmp = _slicedToArray(require("useStateFromStores").useStateFromStoresArray(items, () => {
    const items = [CollectiblesCategoryStore.getCategoryForProduct(closure_0), CollectiblesCategoryStore.getProduct(closure_0)];
    return items;
  }), 2);
  const obj2 = { category: tmp[0], product: tmp[1], purchase: null };
  const obj = require("useStateFromStores");
  const items1 = [CollectiblesPurchaseStore];
  obj2.purchase = require("useStateFromStores").useStateFromStores(items1, () => CollectiblesPurchaseStore.getPurchase(closure_0));
  return obj2;
});