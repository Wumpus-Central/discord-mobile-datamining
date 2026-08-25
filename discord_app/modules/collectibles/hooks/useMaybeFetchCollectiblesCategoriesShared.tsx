// === Module 8437: useMaybeFetchCollectiblesCategoriesShared ===

// Module 8437 (useMaybeFetchCollectiblesCategoriesShared)
import closure_2 from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import closure_5 from "getHash" /* 4293 */;
import closure_6 from "updateCategoriesAndProducts" /* 7148 */;
import items from "items" /* 678 */;

const require = arg1;
({ useEffect: c3, useCallback: c4 } = noop);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: error, COLLECTIBLES_SHOP_FETCH_ERROR_RETRY_THRESHOLD_MS: closure_8 } = items);
let result = require("set").fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesCategoriesShared.tsx");

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
    ({ isFetchingCategories: arr[0], lastFetchOptions: arr[1], error: arr[2], lastErrorTimestamp } = closure_6);
    if (lastErrorTimestamp == null) {
      lastErrorTimestamp = 0;
    }
    items[3] = lastErrorTimestamp;
    let num = tmp.lastSuccessfulFetch;
    if (num == null) {
      num = 0;
    }
    items[4] = num;
    ({ categories: arr[5], skipNumCategories: arr[6] } = closure_6);
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
            const collectiblesCategories = tmp10(tmp11[7]).fetchCollectiblesCategories(obj, noOp, closure_2);
            const tmp10Result = tmp10(tmp11[7]);
          }
          const obj2 = callback(noOp[7]);
          tmp10 = callback;
          tmp11 = noOp;
          const tmp15 = !result;
        }
        const tmp5 = Date.now() - isFetchingCategories < closure_8;
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