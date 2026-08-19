// discord_app/modules/collectibles/hooks/useMaybeFetchShopHome.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import getHash from "../../experiments/ExperimentStore.tsx";
import updateCategoriesAndProducts from "../CollectiblesCategoryStore.tsx";
import map from "../CollectiblesShopHomeStore.tsx";
import items from "../CollectiblesShopConstants.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = fn;
({ useEffect: c3, useCallback: c4, useMemo: c5 } = noop);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: c9, COLLECTIBLES_SHOP_FETCH_ERROR_RETRY_THRESHOLD_MS: c10 } = items);
const result = require("obj132").fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchShopHome.tsx");

export const useMaybeFetchCollectiblesShopHome = function useMaybeFetchCollectiblesShopHome(HOME, arg1, memo, flag) {
  const _require = HOME;
  dependencyMap = arg1;
  const callback = memo;
  if (flag === undefined) {
    flag = false;
  }
  closure_6 = undefined;
  closure_7 = undefined;
  closure_8 = undefined;
  let hasExpiredShopBlocks;
  closure_15 = undefined;
  let obj = initialize;
  let items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => hasLoadedExperiments.hasLoadedExperiments);
  const items1 = [closure_7];
  const stateFromStores1 = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items1, () => skipNumCategories.skipNumCategories);
  const obj2 = initialize;
  const items2 = [closure_8];
  const tmp3 = callback(require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresArray(items2, () => {
    const items = [store.getShopBlocks(closure_0), , , , , , , ];
    let num = store.getLastSuccessfulFetch(closure_0);
    if (num == null) {
      num = 0;
    }
    items[1] = num;
    let num2 = store.getLastErrorTimestamp(closure_0);
    if (num2 == null) {
      num2 = 0;
    }
    items[2] = num2;
    items[3] = store.getLastFetchOptions(closure_0);
    items[4] = store.getFetchShopHomeError(closure_0);
    items[5] = store.getIsFetchingShopHome(closure_0);
    items[6] = store.getHasKnownStaleData(closure_0);
    items[7] = store.getShopHomeConfigOverride();
    return items;
  }), 8);
  [tmp4, tmp5] = tmp3;
  const callback2 = tmp5;
  closure_6 = tmp6;
  closure_7 = tmp7;
  closure_8 = tmp8;
  closure_9 = tmp9;
  closure_10 = tmp10;
  closure_11 = tmp11;
  const items3 = [arg1, tmp3[7], stateFromStores1];
  const tmp13 = callback2(() => {
    const obj = {};
    const merged = Object.assign(dependencyMap);
    obj.variantsReturnStyle = HOME(5355).ShopVariantsReturnStyle.VARIANTS_GROUP;
    obj.includeBundles = true;
    obj.includeDynamicBlocks = true;
    obj.shopHomeConfig = closure_11;
    obj.skipNumCategories = stateFromStores1;
    return obj;
  }, items3);
  closure_12 = tmp13;
  const items4 = [tmp3[3], tmp13];
  const tmp14 = callback2(() => !HOME(5300).areRequestOptionsEqual(closure_7, closure_12), items4);
  closure_13 = tmp14;
  const obj3 = initialize;
  const tmp12 = callback2;
  let flag2 = tmp9;
  if (tmp3[5] == null) {
    flag2 = false;
  }
  hasExpiredShopBlocks = require("useHasExpiredShopBlocks.tsx").useHasExpiredShopBlocks(tmp4, flag2, flag);
  const items5 = [tmp5, hasExpiredShopBlocks];
  const tmp12Result = tmp12(() => {
    let tmp = !hasExpiredShopBlocks;
    if (!hasExpiredShopBlocks) {
      const _Date = Date;
      tmp = Date.now() - c5 < closure_9;
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
            const collectiblesShopHome = HOME(5300).fetchCollectiblesShopHome(HOME, closure_12, closure_2);
            const obj = HOME(5300);
          }
        }
        tmp7 = null != closure_8 && Date.now() - closure_6 < closure_10;
      }
    }
  }, items6);
  const items7 = [HOME, tmp13, memo];
  obj = {
    isFetchingShopHome: tmp9,
    fetchShopHomeError: tmp8,
    shopBlocks: tmp4,
    refreshShopHome: stateFromStores1(() => {
      const collectiblesShopHome = HOME(5300).fetchCollectiblesShopHome(HOME, closure_12, closure_2);
    }, items7)
  };
  return obj;
};