// === Module 8392: useMaybeFetchCollectiblesCategoriesShared ===

// Module 8392 (useMaybeFetchCollectiblesCategoriesShared)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import getHash from "getHash" /* 4288 */;
import updateCategoriesAndProducts from "updateCategoriesAndProducts" /* 5301 */;
import items from "items" /* 678 */;

const require = fn;
({ useEffect: c3, useCallback: c4 } = noop);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: error, COLLECTIBLES_SHOP_FETCH_ERROR_RETRY_THRESHOLD_MS: closure_8 } = items);
let result = require("obj132").fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesCategoriesShared.tsx");

export const useMaybeFetchCollectiblesCategoriesShared = function useMaybeFetchCollectiblesCategoriesShared(arg0, noOp, arg2) {
  const _require = arg0;
  dependencyMap = noOp;
  const callback = arg2;
  let obj = _require(589);
  let items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => hasLoadedExperiments.hasLoadedExperiments);
  const items1 = [closure_6];
  const tmp2 = callback(_require(589).useStateFromStoresArray(items1, () => {
    const items = [, , , , , , ];
    ({ isFetchingCategories: arr[0], lastFetchOptions: arr[1], error: arr[2], lastErrorTimestamp } = lastSuccessfulFetch);
    if (lastErrorTimestamp == null) {
      lastErrorTimestamp = 0;
    }
    items[3] = lastErrorTimestamp;
    let num = lastSuccessfulFetch.lastSuccessfulFetch;
    if (num == null) {
      num = 0;
    }
    items[4] = num;
    ({ categories: arr[5], skipNumCategories: arr[6] } = lastSuccessfulFetch);
    return items;
  }), 7);
  const callback2 = tmp3;
  closure_5 = tmp4;
  closure_6 = tmp5;
  closure_7 = tmp6;
  closure_8 = tmp7;
  const items2 = [stateFromStores, tmp2[1], tmp2[4], arg0, tmp2[2], tmp2[3], noOp, arg2, tmp2[6]];
  stateFromStores(() => {
    if (stateFromStores) {
      if (!isFetchingCategories.isFetchingCategories) {
        const _Date = Date;
        const _Boolean = Boolean;
        Date.now() - isFetchingCategories < closure_8;
        if (!Boolean(closure_5)) {
          const obj = {};
          const merged = Object.assign(callback);
          obj.variantsReturnStyle = callback(noOp[6]).ShopVariantsReturnStyle.VARIANTS_GROUP;
          obj.includeBundles = true;
          obj.skipNumCategories = closure_8;
          const result = callback(noOp[7]).areRequestOptionsEqual(closure_4, obj);
          const _Date2 = Date;
          let tmp18 = !!result;
          if (result) {
            tmp18 = Date.now() - closure_7 < closure_7;
          }
          if (!tmp18) {
            const collectiblesCategories = callback(noOp[7]).fetchCollectiblesCategories(obj, noOp, closure_2);
            const tmp10Result = callback(noOp[7]);
          }
          const obj2 = callback(noOp[7]);
        }
      }
    }
  }, items2);
  const items3 = [arg0, arg2, tmp2[6]];
  obj = {
    isFetching: tmp2[0],
    categories: tmp2[5],
    fetchCategoriesError: tmp4,
    refreshCategories: callback2(() => {
      const obj = {};
      const merged = Object.assign(callback);
      obj.variantsReturnStyle = callback(noOp[6]).ShopVariantsReturnStyle.VARIANTS_GROUP;
      obj.includeBundles = true;
      obj.skipNumCategories = closure_8;
      const collectiblesCategories = callback(noOp[7]).fetchCollectiblesCategories(obj, undefined, closure_2);
    }, items3)
  };
  return obj;
};