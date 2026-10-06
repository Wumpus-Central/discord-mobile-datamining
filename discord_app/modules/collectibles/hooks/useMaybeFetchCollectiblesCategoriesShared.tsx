// === Module 10481: useMaybeFetchCollectiblesCategoriesShared ===

// Module 10481 (useMaybeFetchCollectiblesCategoriesShared)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7065 */;
import ShopVariantsReturnStyle from "ShopVariantsReturnStyle" /* 7111 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ExperimentStore_mod from "ExperimentStore" /* 4782 */;
import CollectiblesCategoryStore_mod from "CollectiblesCategoryStore" /* 7066 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, skipNumCategories;

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let _slicedToArray = _slicedToArray_mod;
({ useEffect: c3, useCallback: closure_4 } = react);
let ExperimentStore = ExperimentStore_mod;
let CollectiblesCategoryStore = CollectiblesCategoryStore_mod;
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: metroImportDefault, COLLECTIBLES_SHOP_FETCH_ERROR_RETRY_THRESHOLD_MS: metroImportAll } = CollectiblesShopConstants);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, arg3) => {
  let closure_0;
  let closure_1;
  let closure_2;
  let hasLoadedExperiments;
  let lastSuccessfulFetch;
  let tmp10;
  let tmp13;
  let tmp5;
  let tmp6;
  let tmp9;
  _require = arg0;
  dependencyMap = arg1;
  _slicedToArray = arg2;
  let obj = require("react");
  const cResult = obj.c(25);
  let closure_3 = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ExperimentStore];
    const fn = function f() {
      return ExperimentStore.hasLoadedExperiments;
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CollectiblesCategoryStore];
    class E {
      constructor() {
        let lastErrorTimestamp;
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
      }
    }
    cResult[2] = items1;
    cResult[3] = E;
    tmp10 = E;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult2 = require("get initialized");
  const tmp12 = _slicedToArray(tmpResult2.useStateFromStoresArray(tmp9, tmp10), 7);
  [r10048, tmp13] = tmp12;
  ExperimentStore = tmp13;
  CollectiblesCategoryStore = tmp14;
  let closure_7 = tmp15;
  let closure_8 = tmp16;
  const tmp17 = tmp12[6];
  skipNumCategories = tmp17;
  if (cResult[4] === tmp12[2]) {
    if (cResult[5] === stateFromStores) {
      if (cResult[6] === tmp12[3]) {
        if (cResult[7] === tmp13) {
          if (cResult[8] === tmp12[4]) {
            if (cResult[9] === arg1) {
              if (cResult[10] === arg0) {
                if (cResult[11] === arg2) {
                  if (cResult[12] === (undefined !== arg3 && arg3)) {
                    let tmp18;
                    let tmp19;
                    if (cResult[13] === tmp17) {
                      tmp18 = cResult[14];
                      tmp19 = cResult[15];
                    }
                    let tmp20 = closure_3;
                    closure_3(tmp18, tmp19);
                    class E {
                      constructor() {
                        let lastErrorTimestamp;
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
                      }
                    }
                    const fn2 = function b() {
                      const obj = { variantsReturnStyle: ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP, includeBundles: true, skipNumCategories };
                      const merged = Object.assign(closure_0);
                      const obj2 = CollectiblesActionCreators;
                      const collectiblesCategories = obj2.fetchCollectiblesCategories(obj, undefined, closure_2);
                    };
                    cResult[16] = arg0;
                    cResult[17] = arg2;
                    cResult[18] = tmp17;
                    cResult[19] = fn2;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  class O {
    constructor() {
      if (!closure_3) {
        if (stateFromStores) {
          if (!CollectiblesCategoryStore.isFetchingCategories) {
            const _Date = Date;
            const _Boolean = Boolean;
            Date.now() - metroImportDefault < metroImportAll;
            if (!Boolean(lastSuccessfulFetch)) {
              const obj = { variantsReturnStyle: ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP, includeBundles: true, skipNumCategories };
              const merged = Object.assign(closure_0);
              const obj2 = CollectiblesActionCreators;
              const result = obj2.areRequestOptionsEqual(ExperimentStore, obj);
              const _Date2 = Date;
              let tmp20 = !(!result);
              if (result) {
                tmp20 = Date.now() - metroImportAll < metroImportDefault;
              }
              if (!tmp20) {
                const tmp12Result = CollectiblesActionCreators;
                const collectiblesCategories = tmp12Result.fetchCollectiblesCategories(obj, closure_1, closure_2);
              }
            }
          }
        }
      }
    }
  }
  const items2 = [tmp4, stateFromStores, tmp13, tmp12[4], arg0, tmp12[2], tmp12[3], arg1, arg2, tmp17];
  cResult[4] = tmp12[2];
  cResult[5] = stateFromStores;
  cResult[6] = tmp12[3];
  cResult[7] = tmp13;
  cResult[8] = tmp12[4];
  cResult[9] = arg1;
  cResult[10] = arg0;
  cResult[11] = arg2;
  cResult[12] = undefined !== arg3 && arg3;
  cResult[13] = tmp17;
  cResult[14] = O;
  cResult[15] = items2;
  tmp19 = items2;
  tmp18 = O;
}) : ((arg0, arg1, arg2) => {
  let closure_0;
  let closure_1;
  let closure_2;
  _require = arg0;
  dependencyMap = arg1;
  _slicedToArray = arg2;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let hasLoadedExperiments;
  let lastSuccessfulFetch;
  let obj = require("get initialized");
  let items = [hasLoadedExperiments];
  const stateFromStores = obj.useStateFromStores(items, () => hasLoadedExperiments.hasLoadedExperiments);
  let obj2 = require("get initialized");
  const items1 = [lastSuccessfulFetch];
  const tmp2 = _slicedToArray(obj2.useStateFromStoresArray(items1, () => {
    let lastErrorTimestamp;
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
  hasLoadedExperiments = tmp4;
  lastSuccessfulFetch = tmp5;
  let closure_7 = tmp6;
  let closure_8 = tmp7;
  skipNumCategories = tmp9;
  const items2 = [flag, stateFromStores, tmp4, tmp7, arg0, tmp2[2], tmp2[3], arg1, arg2, tmp2[6]];
  const first = tmp2[0];
  const tmp8 = tmp2[5];
  flag(() => {
    const tmp = flag;
    if (!tmp) {
      if (stateFromStores) {
        if (!CollectiblesCategoryStore.isFetchingCategories) {
          const _Date = Date;
          const _Boolean = Boolean;
          Date.now() - metroImportDefault < metroImportAll;
          if (!Boolean(lastSuccessfulFetch)) {
            const obj = { variantsReturnStyle: ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP, includeBundles: true, skipNumCategories };
            const merged = Object.assign(closure_0);
            const obj2 = CollectiblesActionCreators;
            const result = obj2.areRequestOptionsEqual(hasLoadedExperiments, obj);
            const _Date2 = Date;
            let tmp20 = !(!result);
            if (result) {
              tmp20 = Date.now() - metroImportAll < metroImportDefault;
            }
            if (!tmp20) {
              const tmp12Result = CollectiblesActionCreators;
              const collectiblesCategories = tmp12Result.fetchCollectiblesCategories(obj, closure_1, closure_2);
            }
          }
        }
      }
    }
  }, items2);
  const items3 = [arg0, arg2, tmp2[6]];
  const obj3 = {
    isFetching: first,
    categories: tmp8,
    fetchCategoriesError: tmp2[2],
    refreshCategories: stateFromStores(() => {
      const obj = { variantsReturnStyle: ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP, includeBundles: true, skipNumCategories };
      const merged = Object.assign(closure_0);
      const obj2 = CollectiblesActionCreators;
      const collectiblesCategories = obj2.fetchCollectiblesCategories(obj, undefined, closure_2);
    }, items3)
  };
  return obj3;
});
let result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesCategoriesShared.tsx");

export const useMaybeFetchCollectiblesCategoriesShared = tmp4;