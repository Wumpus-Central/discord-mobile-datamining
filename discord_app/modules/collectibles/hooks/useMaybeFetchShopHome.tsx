// === Module 15809: useMaybeFetchShopHome ===

// Module 15809 (useMaybeFetchShopHome)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7541 */;
import ShopVariantsReturnStyle from "ShopVariantsReturnStyle" /* 7589 */;
import _slicedToArray from "module_32" /* 32 */;
import ExperimentStore from "ExperimentStore" /* 4476 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7542 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 7586 */;

require = fn;
const noop = fn(19);
({ useEffect: c3, useCallback: closure_4, useMemo: hasOwnProperty } = noop);
const CollectiblesShopConstants = fn(1076);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: closure_9, COLLECTIBLES_SHOP_FETCH_ERROR_RETRY_THRESHOLD_MS: c10 } = CollectiblesShopConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchShopHome.tsx");

export const useMaybeFetchCollectiblesShopHome = function useMaybeFetchCollectiblesShopHome(HOME, arg1, memo) {
  _require = HOME;
  dependencyMap = arg1;
  _slicedToArray = memo;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let hasLoadedExperiments;
  let skipNumCategories;
  closure_8 = undefined;
  let hasExpiredShopBlocks;
  closure_15 = undefined;
  let obj = require("initialize");
  let items = [hasLoadedExperiments];
  const stateFromStores = obj.useStateFromStores(items, () => hasLoadedExperiments.hasLoadedExperiments);
  const items1 = [skipNumCategories];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => skipNumCategories.skipNumCategories);
  const obj2 = require("initialize");
  const items2 = [closure_8];
  const tmp3 = _slicedToArray(require("initialize").useStateFromStoresArray(items2, () => {
    const items = [CollectiblesShopHomeStore.getShopBlocks(closure_0), , , , , , , ];
    let num = CollectiblesShopHomeStore.getLastSuccessfulFetch(closure_0);
    if (num == null) {
      num = 0;
    }
    items[1] = num;
    let num2 = obj.getLastErrorTimestamp(tmp);
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
  c5 = tmp5;
  hasLoadedExperiments = tmp6;
  skipNumCategories = tmp7;
  closure_8 = tmp8;
  closure_9 = tmp9;
  closure_10 = tmp10;
  const shopHomeConfig = tmp11;
  const items3 = [arg1, tmp3[7], stateFromStores1];
  const tmp13 = c5(() => {
    const obj = {};
    const merged = Object.assign(closure_1);
    obj.variantsReturnStyle = ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP;
    obj.includeBundles = true;
    obj.includeDynamicBlocks = true;
    obj.shopHomeConfig = shopHomeConfig;
    obj.skipNumCategories = stateFromStores1;
    return obj;
  }, items3);
  closure_12 = tmp13;
  const items4 = [tmp3[3], tmp13];
  const tmp14 = c5(() => !CollectiblesActionCreators.areRequestOptionsEqual(closure_7, closure_12), items4);
  closure_13 = tmp14;
  const obj3 = require("initialize");
  const tmp12 = c5;
  let flag2 = tmp9;
  if (tmp3[5] == null) {
    flag2 = false;
  }
  hasExpiredShopBlocks = require("useHasExpiredShopBlocks").useHasExpiredShopBlocks(tmp4, flag2, flag);
  const items5 = [tmp5, hasExpiredShopBlocks];
  const tmp12Result = tmp12(() => {
    let tmp = !hasExpiredShopBlocks;
    if (!hasExpiredShopBlocks) {
      const _Date = Date;
      tmp = Date.now() - c5 < React7;
    }
    return tmp;
  }, items5);
  closure_15 = tmp12Result;
  const items6 = [stateFromStores, tmp3[5], tmp3[4], tmp3[2], tmp12Result, tmp3[6], tmp14, tmp13, HOME, memo];
  stateFromStores(() => {
    if (stateFromStores) {
      if (!closure_9) {
        const _Date = Date;
        if (!tmp7) {
          let tmp8 = closure_13;
          if (!closure_13) {
            tmp8 = !closure_15;
          }
          if (!tmp8) {
            tmp8 = closure_10;
          }
          if (tmp8) {
            const collectiblesShopHome = CollectiblesActionCreators.fetchCollectiblesShopHome(closure_0, closure_12, closure_2);
          }
        }
        tmp7 = null != closure_8 && Date.now() - closure_6 < closure_2_10;
      }
    }
  }, items6);
  const items7 = [HOME, tmp13, memo];
  obj = {
    isFetchingShopHome: tmp9,
    fetchShopHomeError: tmp8,
    shopBlocks: tmp4,
    refreshShopHome: stateFromStores1(() => {
      const collectiblesShopHome = CollectiblesActionCreators.fetchCollectiblesShopHome(closure_0, closure_12, closure_2);
    }, items7)
  };
  return obj;
};