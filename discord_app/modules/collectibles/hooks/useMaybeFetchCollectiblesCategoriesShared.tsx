// === Module 10063: useMaybeFetchCollectiblesCategoriesShared ===

// Module 10063 (useMaybeFetchCollectiblesCategoriesShared)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7256 */;
import ShopVariantsReturnStyle from "ShopVariantsReturnStyle" /* 7302 */;
import _slicedToArray from "module_32" /* 32 */;
import ExperimentStore from "ExperimentStore" /* 4977 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7257 */;

const require = globalThis.__r;

require = fn;
const noop = fn(19);
({ useEffect: c3, useCallback: closure_4 } = noop);
const CollectiblesShopConstants = fn(1087);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: closure_7, COLLECTIBLES_SHOP_FETCH_ERROR_RETRY_THRESHOLD_MS: closure_8 } = CollectiblesShopConstants);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesCategoriesShared.tsx");

export const useMaybeFetchCollectiblesCategoriesShared = ReactCompilerGating.isReactCompilerEnabled() ? (function useMaybeFetchCollectiblesCategoriesShared(arg0, arg1, arg2, arg3) {
  _require = arg0;
  dependencyMap = arg1;
  _slicedToArray = arg2;
  const cResult = require("c").c(25);
  closure_3 = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ExperimentStore];
    const fn = function f() {
      return tmp13.hasLoadedExperiments;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [lastSuccessfulFetch];
    class F {
      constructor() {
        tmp = closure_6;
        items = [, , , , , , ];
        ({ isFetchingCategories: arr[0], lastFetchOptions: arr[1], error: arr[2], lastErrorTimestamp } = closure_6);
        if (lastErrorTimestamp == null) {
          lastErrorTimestamp = 0;
        }
        items[3] = lastErrorTimestamp;
        num = tmp.lastSuccessfulFetch;
        if (num == null) {
          num = 0;
        }
        items[4] = num;
        ({ categories: arr[5], skipNumCategories: arr[6] } = tmp);
        return items;
      }
    }
    cResult[2] = items1;
    cResult[3] = F;
    let tmp10 = F;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = require("initialize");
  const tmp12 = _slicedToArray(require("initialize").useStateFromStoresArray(tmp9, tmp10), 7);
  [r10048, tmp13] = tmp12;
  ExperimentStore = tmp13;
  lastSuccessfulFetch = tmp14;
  closure_7 = tmp15;
  closure_8 = tmp16;
  skipNumCategories = tmp17;
  if (cResult[4] === tmp12[2]) {
    if (cResult[5] === stateFromStores) {
      if (cResult[6] === tmp15) {
        if (cResult[7] === tmp13) {
          if (cResult[8] === tmp16) {
            if (cResult[9] === arg1) {
              if (cResult[10] === arg0) {
                if (cResult[11] === arg2) {
                  if (cResult[12] === tmp4) {
                    if (cResult[13] === tmp17) {
                      let tmp18 = cResult[14];
                      let tmp19 = cResult[15];
                    }
                    closure_3(tmp18, tmp19);
                    class F {
                      constructor() {
                        tmp = closure_6;
                        items = [, , , , , , ];
                        ({ isFetchingCategories: arr[0], lastFetchOptions: arr[1], error: arr[2], lastErrorTimestamp } = closure_6);
                        if (lastErrorTimestamp == null) {
                          lastErrorTimestamp = 0;
                        }
                        items[3] = lastErrorTimestamp;
                        num = tmp.lastSuccessfulFetch;
                        if (num == null) {
                          num = 0;
                        }
                        items[4] = num;
                        ({ categories: arr[5], skipNumCategories: arr[6] } = tmp);
                        return items;
                      }
                    }
                    class O {
                      constructor() {
                        obj = {};
                        merged = Object.assign(closure_0);
                        obj.variantsReturnStyle = closure_0(closure_1[8]).ShopVariantsReturnStyle.VARIANTS_GROUP;
                        obj.includeBundles = true;
                        obj.skipNumCategories = closure_9;
                        obj2 = closure_0(closure_1[9]);
                        collectiblesCategories = obj2.fetchCollectiblesCategories(obj, undefined, closure_2);
                        return;
                      }
                    }
                    cResult[16] = arg0;
                    cResult[17] = arg2;
                    cResult[18] = tmp17;
                    cResult[19] = O;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const fn2 = function b() {
    if (!closure_3) {
      if (stateFromStores) {
        if (!CollectiblesCategoryStore.isFetchingCategories) {
          const _Date = Date;
          const _Boolean = Boolean;
          Date.now() - closure_7 < closure_2_8;
          if (!Boolean(closure_6)) {
            const obj = {};
            const merged = Object.assign(closure_0);
            obj.variantsReturnStyle = ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP;
            obj.includeBundles = true;
            obj.skipNumCategories = skipNumCategories;
            const result = CollectiblesActionCreators.areRequestOptionsEqual(closure_5, obj);
            const _Date2 = Date;
            let tmp19 = !!result;
            if (result) {
              tmp19 = Date.now() - closure_8 < React5;
            }
            if (!tmp19) {
              const collectiblesCategories = CollectiblesActionCreators.fetchCollectiblesCategories(obj, closure_1, closure_2);
              const tmp11Result = CollectiblesActionCreators;
            }
            const tmp16 = !result;
          }
        }
      }
    }
  };
  const items2 = [undefined !== arg3 && arg3, stateFromStores, tmp13, tmp12[4], arg0, tmp12[2], tmp12[3], arg1, arg2, tmp12[6]];
  cResult[4] = tmp12[2];
  cResult[5] = stateFromStores;
  cResult[6] = tmp12[3];
  cResult[7] = tmp13;
  cResult[8] = tmp12[4];
  cResult[9] = arg1;
  cResult[10] = arg0;
  cResult[11] = arg2;
  cResult[12] = undefined !== arg3 && arg3;
  cResult[13] = tmp12[6];
  cResult[14] = fn2;
  cResult[15] = items2;
  tmp19 = items2;
  tmp18 = fn2;
  const tmpResult2 = require("initialize");
}) : (function useMaybeFetchCollectiblesCategoriesShared(arg0, arg1, arg2) {
  _require = arg0;
  dependencyMap = arg1;
  _slicedToArray = arg2;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let hasLoadedExperiments;
  let lastSuccessfulFetch;
  let items = [hasLoadedExperiments];
  const stateFromStores = require("initialize").useStateFromStores(items, () => hasLoadedExperiments.hasLoadedExperiments);
  let obj = require("initialize");
  const items1 = [lastSuccessfulFetch];
  const tmp2 = _slicedToArray(require("initialize").useStateFromStoresArray(items1, () => {
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
  hasLoadedExperiments = tmp3;
  lastSuccessfulFetch = tmp4;
  closure_7 = tmp5;
  closure_8 = tmp6;
  skipNumCategories = tmp7;
  const items2 = [flag, stateFromStores, tmp2[1], tmp2[4], arg0, tmp2[2], tmp2[3], arg1, arg2, tmp2[6]];
  flag(() => {
    if (!flag) {
      if (stateFromStores) {
        if (!CollectiblesCategoryStore.isFetchingCategories) {
          const _Date = Date;
          const _Boolean = Boolean;
          Date.now() - closure_7 < closure_2_8;
          if (!Boolean(closure_6)) {
            const obj = {};
            const merged = Object.assign(closure_0);
            obj.variantsReturnStyle = ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP;
            obj.includeBundles = true;
            obj.skipNumCategories = skipNumCategories;
            const result = CollectiblesActionCreators.areRequestOptionsEqual(closure_5, obj);
            const _Date2 = Date;
            let tmp19 = !!result;
            if (result) {
              tmp19 = Date.now() - closure_8 < React5;
            }
            if (!tmp19) {
              const collectiblesCategories = CollectiblesActionCreators.fetchCollectiblesCategories(obj, closure_1, closure_2);
              const tmp11Result = CollectiblesActionCreators;
            }
            const tmp16 = !result;
          }
        }
      }
    }
  }, items2);
  const items3 = [arg0, arg2, tmp2[6]];
  let obj2 = require("initialize");
  return {
    isFetching: tmp2[0],
    categories: tmp2[5],
    fetchCategoriesError: tmp2[2],
    refreshCategories: stateFromStores(() => {
      const obj = {};
      const merged = Object.assign(closure_0);
      obj.variantsReturnStyle = ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP;
      obj.includeBundles = true;
      obj.skipNumCategories = skipNumCategories;
      const collectiblesCategories = CollectiblesActionCreators.fetchCollectiblesCategories(obj, undefined, closure_2);
    }, items3)
  };
});