// === Module 17818: useMaybeFetchShopHome ===

// Module 17818 (useMaybeFetchShopHome)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7719 */;
import ShopVariantsReturnStyle from "ShopVariantsReturnStyle" /* 7762 */;
import _slicedToArray from "module_32" /* 32 */;
import ExperimentStore from "ExperimentStore" /* 5238 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7720 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 5688 */;

const require = globalThis.__r;

require = fn;
const noop = fn(19);
({ useEffect: c3, useCallback: closure_4, useMemo: hasOwnProperty } = noop);
const CollectiblesShopConstants = fn(1074);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: closure_9, COLLECTIBLES_SHOP_FETCH_ERROR_RETRY_THRESHOLD_MS: c10 } = CollectiblesShopConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchShopHome.tsx");

export function useMaybeFetchCollectiblesShopHome(HOME, arg1, memo) {
  _require = HOME;
  dependencyMap = arg1;
  _slicedToArray = memo;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = arg4;
  if (arg4 === undefined) {
    flag2 = false;
  }
  c6 = undefined;
  let skipNumCategories;
  closure_8 = undefined;
  let hasExpiredShopBlocks;
  closure_16 = undefined;
  let items = [c6];
  const stateFromStores = require("initialize").useStateFromStores(items, () => _undefined.hasLoadedExperiments);
  let obj = require("initialize");
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
  c6 = tmp5;
  skipNumCategories = tmp6;
  closure_8 = tmp7;
  closure_9 = tmp8;
  closure_10 = tmp9;
  closure_11 = tmp10;
  const shopHomeConfig = tmp11;
  const items3 = [arg1, tmp3[7], stateFromStores1];
  const tmp13 = stateFromStores1(() => {
    const obj = {};
    const merged = Object.assign(closure_1);
    obj.variantsReturnStyle = ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP;
    obj.includeBundles = true;
    obj.includeDynamicBlocks = true;
    obj.shopHomeConfig = shopHomeConfig;
    obj.skipNumCategories = stateFromStores1;
    return obj;
  }, items3);
  closure_13 = tmp13;
  const items4 = [tmp3[3], tmp13];
  const tmp14 = stateFromStores1(() => !CollectiblesActionCreators.areRequestOptionsEqual(closure_8, closure_13), items4);
  closure_14 = tmp14;
  const obj3 = require("initialize");
  const tmp12 = stateFromStores1;
  let flag3 = tmp9;
  if (tmp3[5] == null) {
    flag3 = false;
  }
  hasExpiredShopBlocks = require("useHasExpiredShopBlocks").useHasExpiredShopBlocks(tmp4, flag3, flag);
  const items5 = [tmp5, hasExpiredShopBlocks];
  const tmp12Result = tmp12(() => {
    let tmp = !hasExpiredShopBlocks;
    if (!hasExpiredShopBlocks) {
      const _Date = Date;
      tmp = Date.now() - c6 < React7;
    }
    return tmp;
  }, items5);
  closure_16 = tmp12Result;
  const items6 = [flag2, stateFromStores, tmp3[5], tmp3[4], tmp3[2], tmp12Result, tmp3[6], tmp14, tmp13, HOME, memo];
  flag2(() => {
    if (!flag2) {
      if (stateFromStores) {
        if (!closure_10) {
          const _Date = Date;
          if (!tmp8) {
            let tmp9 = closure_14;
            if (!closure_14) {
              tmp9 = !closure_16;
            }
            if (!tmp9) {
              tmp9 = closure_11;
            }
            if (tmp9) {
              const collectiblesShopHome = CollectiblesActionCreators.fetchCollectiblesShopHome(closure_0, closure_13, closure_2);
            }
          }
          tmp8 = null != closure_9 && Date.now() - closure_7 < closure_2_10;
        }
      }
    }
  }, items6);
  const items7 = [HOME, tmp13, memo];
  const obj4 = require("useHasExpiredShopBlocks");
  return {
    isFetchingShopHome: tmp3[5],
    fetchShopHomeError: tmp3[4],
    shopBlocks: tmp4,
    refreshShopHome: stateFromStores(() => {
      const collectiblesShopHome = CollectiblesActionCreators.fetchCollectiblesShopHome(closure_0, closure_13, closure_2);
    }, items7)
  };
}