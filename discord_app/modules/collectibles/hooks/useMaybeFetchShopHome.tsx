// === Module 15742: useMaybeFetchShopHome ===

// Module 15742 (useMaybeFetchShopHome)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7065 */;
import ShopVariantsReturnStyle from "ShopVariantsReturnStyle" /* 7111 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ExperimentStore_mod from "ExperimentStore" /* 4782 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7066 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 7108 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_12, dependencyMap;

let c10;
let c3;
let c9;
let closure_4;
let hasOwnProperty;
let _slicedToArray = _slicedToArray_mod;
({ useEffect: c3, useCallback: closure_4, useMemo: hasOwnProperty } = react);
let ExperimentStore = ExperimentStore_mod;
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: c9, COLLECTIBLES_SHOP_FETCH_ERROR_RETRY_THRESHOLD_MS: c10 } = CollectiblesShopConstants);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, arg3) => {
  let closure_0;
  let closure_1;
  let hasLoadedExperiments;
  let skipNumCategories;
  let tmp13;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  _require = arg0;
  dependencyMap = arg2;
  let obj = require("react");
  const cResult = obj.c(35);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ExperimentStore];
    class E {
      constructor() {
        return closure_6.hasLoadedExperiments;
      }
    }
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = E;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp4, E);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CollectiblesCategoryStore];
    class E {
      constructor() {
        return closure_6.hasLoadedExperiments;
      }
    }
    cResult[2] = items1;
    cResult[3] = tmp11;
    tmp9 = tmp11;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult3 = require("get initialized");
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [CollectiblesShopHomeStore];
    class E {
      constructor() {
        return closure_6.hasLoadedExperiments;
      }
    }
    cResult[4] = items2;
    tmp13 = items2;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== arg0) {
    class L {
      constructor() {
        obj = closure_8;
        tmp = closure_0;
        items = [, , , , , , , ];
        items[0] = closure_8.getShopBlocks(closure_0);
        num = closure_8.getLastSuccessfulFetch(closure_0);
        if (num == null) {
          num = 0;
        }
        items[1] = num;
        num2 = obj.getLastErrorTimestamp(tmp);
        if (num2 == null) {
          num2 = 0;
        }
        items[2] = num2;
        items[3] = obj.getLastFetchOptions(tmp);
        items[4] = obj.getFetchShopHomeError(tmp);
        items[5] = obj.getIsFetchingShopHome(tmp);
        items[6] = obj.getHasKnownStaleData(tmp);
        items[7] = obj.getShopHomeConfigOverride();
        return items;
      }
    }
    cResult[5] = arg0;
    class E {
      constructor() {
        return closure_6.hasLoadedExperiments;
      }
    }
    cResult[6] = L;
  } else {
    class L {
      constructor() {
        obj = closure_8;
        tmp = closure_0;
        items = [, , , , , , , ];
        items[0] = closure_8.getShopBlocks(closure_0);
        num = closure_8.getLastSuccessfulFetch(closure_0);
        if (num == null) {
          num = 0;
        }
        items[1] = num;
        num2 = obj.getLastErrorTimestamp(tmp);
        if (num2 == null) {
          num2 = 0;
        }
        items[2] = num2;
        items[3] = obj.getLastFetchOptions(tmp);
        items[4] = obj.getFetchShopHomeError(tmp);
        items[5] = obj.getIsFetchingShopHome(tmp);
        items[6] = obj.getHasKnownStaleData(tmp);
        items[7] = obj.getShopHomeConfigOverride();
        return items;
      }
    }
  }
  const tmpResult4 = require("get initialized");
  const tmp16 = stateFromStores(tmpResult4.useStateFromStoresArray(tmp13, L), 8);
  let closure_3 = tmp16[2];
  let closure_4 = tmp16[4];
  let closure_5 = tmp16[5];
  ExperimentStore = tmp16[6];
  if (cResult[7] === arg1) {
    class L {
      constructor() {
        obj = closure_8;
        tmp = closure_0;
        items = [, , , , , , , ];
        items[0] = closure_8.getShopBlocks(closure_0);
        num = closure_8.getLastSuccessfulFetch(closure_0);
        if (num == null) {
          num = 0;
        }
        items[1] = num;
        num2 = obj.getLastErrorTimestamp(tmp);
        if (num2 == null) {
          num2 = 0;
        }
        items[2] = num2;
        items[3] = obj.getLastFetchOptions(tmp);
        items[4] = obj.getFetchShopHomeError(tmp);
        items[5] = obj.getIsFetchingShopHome(tmp);
        items[6] = obj.getHasKnownStaleData(tmp);
        items[7] = obj.getShopHomeConfigOverride();
        return items;
      }
    }
  }
  const obj2 = { variantsReturnStyle: require("ShopVariantsReturnStyle").ShopVariantsReturnStyle.VARIANTS_GROUP, includeBundles: true, includeDynamicBlocks: true, shopHomeConfig: tmp16[7], skipNumCategories: stateFromStores1 };
  const merged = Object.assign(arg1);
  cResult[7] = arg1;
  cResult[8] = tmp16[7];
  cResult[9] = stateFromStores1;
  cResult[10] = obj2;
}) : ((arg0, arg1, arg2) => {
  let closure_0;
  let closure_1;
  let closure_2;
  let tmp4;
  let tmp5;
  _require = arg0;
  dependencyMap = arg1;
  _slicedToArray = arg2;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let hasLoadedExperiments;
  let skipNumCategories;
  let closure_8;
  let hasExpiredShopBlocks;
  let closure_15;
  let obj = require("get initialized");
  let items = [hasLoadedExperiments];
  const stateFromStores = obj.useStateFromStores(items, () => hasLoadedExperiments.hasLoadedExperiments);
  const items1 = [skipNumCategories];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => skipNumCategories.skipNumCategories);
  const items2 = [closure_8];
  const obj3 = require("get initialized");
  const tmp3 = _slicedToArray(obj3.useStateFromStoresArray(items2, () => {
    const items = [CollectiblesShopHomeStore.getShopBlocks(closure_0), , , , , , , ];
    let num = CollectiblesShopHomeStore.getLastSuccessfulFetch(closure_0);
    if (num == null) {
      num = 0;
    }
    items[1] = num;
    let num2 = CollectiblesShopHomeStore.getLastErrorTimestamp(closure_0);
    if (num2 == null) {
      num2 = 0;
    }
    items[2] = num2;
    items[3] = CollectiblesShopHomeStore.getLastFetchOptions(closure_0);
    items[4] = CollectiblesShopHomeStore.getFetchShopHomeError(closure_0);
    items[5] = CollectiblesShopHomeStore.getIsFetchingShopHome(closure_0);
    items[6] = CollectiblesShopHomeStore.getHasKnownStaleData(closure_0);
    items[7] = CollectiblesShopHomeStore.getShopHomeConfigOverride();
    return items;
  }), 8);
  [tmp4, tmp5] = tmp3;
  let c5 = tmp5;
  hasLoadedExperiments = tmp6;
  skipNumCategories = tmp7;
  let tmp8 = tmp3[4];
  closure_8 = tmp8;
  let tmp9 = tmp3[5];
  let closure_9 = tmp9;
  let closure_10 = tmp10;
  const shopHomeConfig = tmp11;
  const items3 = [arg1, tmp3[7], stateFromStores1];
  const tmp13 = c5(() => {
    const obj = { variantsReturnStyle: ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP, includeBundles: true, includeDynamicBlocks: true, shopHomeConfig, skipNumCategories: stateFromStores1 };
    const merged = Object.assign(closure_1);
    return obj;
  }, items3);
  closure_12 = tmp13;
  const items4 = [tmp7, tmp13];
  const tmp14 = c5(() => {
    const obj = CollectiblesActionCreators;
    return !obj.areRequestOptionsEqual(skipNumCategories, closure_12);
  }, items4);
  let closure_13 = tmp14;
  let flag2 = tmp9;
  const useHasExpiredShopBlocks = require("useHasExpiredShopBlocks").useHasExpiredShopBlocks;
  require("useHasExpiredShopBlocks");
  const tmp12 = c5;
  if (tmp9 == null) {
    flag2 = false;
  }
  hasExpiredShopBlocks = useHasExpiredShopBlocks(tmp4, flag2, flag);
  const items5 = [tmp5, hasExpiredShopBlocks];
  const tmp12Result = tmp12(() => {
    let tmp = !hasExpiredShopBlocks;
    if (tmp) {
      const _Date = Date;
      tmp = Date.now() - c5 < React4;
    }
    return tmp;
  }, items5);
  closure_15 = tmp12Result;
  const items6 = [stateFromStores, tmp9, tmp8, tmp3[2], tmp12Result, tmp3[6], tmp14, tmp13, arg0, arg2];
  stateFromStores(() => {
    if (stateFromStores) {
      if (!closure_9) {
        const _Date = Date;
        const tmp8 = null != closure_8 && Date.now() - hasLoadedExperiments < authStore;
        if (!tmp8) {
          const tmp9 = closure_13 || !closure_15 || c10;
          if (tmp9) {
            const obj = CollectiblesActionCreators;
            const collectiblesShopHome = obj.fetchCollectiblesShopHome(closure_0, closure_12, closure_2);
          }
        }
      }
    }
  }, items6);
  const items7 = [arg0, tmp13, arg2];
  const obj4 = {
    isFetchingShopHome: tmp9,
    fetchShopHomeError: tmp8,
    shopBlocks: tmp4,
    refreshShopHome: stateFromStores1(() => {
      const obj = CollectiblesActionCreators;
      const collectiblesShopHome = obj.fetchCollectiblesShopHome(closure_0, closure_12, closure_2);
    }, items7)
  };
  return obj4;
});
const result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchShopHome.tsx");

export const useMaybeFetchCollectiblesShopHome = tmp4;