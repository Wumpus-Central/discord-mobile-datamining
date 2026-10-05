// === Module 10818: useFetchCollectiblesProductCategory ===

// Module 10818 (useFetchCollectiblesProductCategory)
import useMaybeFetchCollectiblesCategoriesDefault from "useMaybeFetchCollectiblesCategories" /* 10466 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7053 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp10;
  let tmp7;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(6);
  useMaybeFetchCollectiblesCategoriesDefault();
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [CollectiblesCategoryStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      const items = [CollectiblesCategoryStore.isFetchingCategories, CollectiblesCategoryStore.getCategoryForProduct(closure_0)];
      return items;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(573);
  [tmp9, tmp10] = tmpResult.useStateFromStoresArray(first, tmp7);
  _slicedToArray(tmpResult.useStateFromStoresArray(first, tmp7), 2);
  if (cResult[3] === tmp10) {
    let tmp11;
    if (cResult[4] === tmp9) {
      tmp11 = cResult[5];
    }
    return tmp11;
  }
  const obj2 = { isFetching: tmp9, category: tmp10 };
  cResult[3] = tmp10;
  cResult[4] = tmp9;
  cResult[5] = obj2;
  tmp11 = obj2;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  useMaybeFetchCollectiblesCategoriesDefault();
  let items = [CollectiblesCategoryStore];
  const obj = require("useStateFromStores");
  const tmp2 = _slicedToArray(obj.useStateFromStoresArray(items, () => {
    const items = [CollectiblesCategoryStore.isFetchingCategories, CollectiblesCategoryStore.getCategoryForProduct(closure_0)];
    return items;
  }), 2);
  return { isFetching: tmp2[0], category: tmp2[1] };
});
const result = size.fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProductCategory.tsx");

export const useFetchCollectiblesProductCategory = tmp2;