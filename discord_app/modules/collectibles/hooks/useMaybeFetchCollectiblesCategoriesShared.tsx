// discord_app/modules/collectibles/hooks/useMaybeFetchCollectiblesCategoriesShared.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import getHash from "getHash";
import updateCategoriesAndProducts from "updateCategoriesAndProducts";
import items from "items";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

let c3;
let c4;
let error;
let metroImportAll;
const require = arg1;
({ useEffect: c3, useCallback: c4 } = noop);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: error, COLLECTIBLES_SHOP_FETCH_ERROR_RETRY_THRESHOLD_MS: metroImportAll } = items);
let result = require("getHash").fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesCategoriesShared.tsx");

export const useMaybeFetchCollectiblesCategoriesShared = function useMaybeFetchCollectiblesCategoriesShared(arg0, noOp, arg2) {
  const _require = arg0;
  const dependencyMap = noOp;
  const callback = arg2;
  let obj = _initialize;
  let items = [getHash];
  const stateFromStores = obj.useStateFromStores(items, () => tmp4.hasLoadedExperiments);
  const items1 = [updateCategoriesAndProducts];
  const tmp2 = callback(_initialize.useStateFromStoresArray(items1, () => {
    let lastErrorTimestamp;
    const items = [, , , , , , ];
    ({ isFetchingCategories: arr[0], lastFetchOptions: arr[1], error: arr[2], lastErrorTimestamp } = updateCategoriesAndProducts);
    if (lastErrorTimestamp == null) {
      lastErrorTimestamp = 0;
    }
    items[3] = lastErrorTimestamp;
    let num = tmp.lastSuccessfulFetch;
    if (num == null) {
      num = 0;
    }
    items[4] = num;
    ({ categories: arr[5], skipNumCategories: arr[6] } = updateCategoriesAndProducts);
    return items;
  }), 7);
  const callback2 = tmp3;
  getHash = tmp4;
  updateCategoriesAndProducts = tmp5;
  let closure_7 = tmp6;
  let closure_8 = tmp7;
  const items2 = [stateFromStores, tmp2[1], tmp2[4], arg0, tmp2[2], tmp2[3], noOp, arg2, tmp2[6]];
  stateFromStores(() => {
    if (stateFromStores) {
      if (!tmp5.isFetchingCategories) {
        const _Date = Date;
        const _Boolean = Boolean;
        tmp5 = Date.now() - tmp5 < closure_8;
        if (!Boolean(getHash)) {
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
            const collectiblesCategories = tmp10(tmp11[7]).fetchCollectiblesCategories(obj, noOp, _slicedToArray);
            const tmp10Result = tmp10(tmp11[7]);
          }
          const obj2 = callback(noOp[7]);
          tmp10 = callback;
          tmp11 = noOp;
          const tmp15 = !result;
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
      const collectiblesCategories = callback(noOp[7]).fetchCollectiblesCategories(obj, undefined, _slicedToArray);
    }, items3)
  };
  return obj;
};