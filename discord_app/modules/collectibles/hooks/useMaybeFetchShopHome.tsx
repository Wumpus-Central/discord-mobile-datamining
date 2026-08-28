// === Module 15342: useMaybeFetchCollectiblesShopHome ===

// Module 15342 (useMaybeFetchCollectiblesShopHome)
import closure_2 from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import closure_6 from "getHash" /* 4359 */;
import closure_7 from "updateCategoriesAndProducts" /* 7234 */;
import closure_8 from "map" /* 7278 */;
import items from "items" /* 678 */;

const require = arg1;
({ useEffect: c3, useCallback: c4, useMemo: c5 } = noop);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: c9, COLLECTIBLES_SHOP_FETCH_ERROR_RETRY_THRESHOLD_MS: c10 } = items);
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchShopHome.tsx");

export const useMaybeFetchCollectiblesShopHome = function useMaybeFetchCollectiblesShopHome(HOME, arg1, memo) {
  const _require = HOME;
  dependencyMap = arg1;
  const callback = memo;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let stateFromStores;
  let stateFromStores1;
  let callback2;
  closure_6 = undefined;
  closure_7 = undefined;
  closure_8 = undefined;
  closure_9 = undefined;
  closure_10 = undefined;
  closure_11 = undefined;
  closure_12 = undefined;
  closure_13 = undefined;
  let hasExpiredShopBlocks;
  closure_15 = undefined;
  let obj = _require(589);
  let items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => hasLoadedExperiments.hasLoadedExperiments);
  const items1 = [closure_7];
  stateFromStores1 = _require(589).useStateFromStores(items1, () => skipNumCategories.skipNumCategories);
  const obj2 = _require(589);
  const items2 = [closure_8];
  const tmp3 = callback(_require(589).useStateFromStoresArray(items2, () => {
    const items = [store.getShopBlocks(closure_0), , , , , , , ];
    let num = store.getLastSuccessfulFetch(closure_0);
    if (num == null) {
      num = 0;
    }
    items[1] = num;
    let num2 = obj.getLastErrorTimestamp(tmp);
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
  callback2 = tmp5;
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
    obj.variantsReturnStyle = HOME(7281).ShopVariantsReturnStyle.VARIANTS_GROUP;
    obj.includeBundles = true;
    obj.includeDynamicBlocks = true;
    obj.shopHomeConfig = closure_11;
    obj.skipNumCategories = stateFromStores1;
    return obj;
  }, items3);
  closure_12 = tmp13;
  const items4 = [tmp3[3], tmp13];
  const tmp14 = callback2(() => !HOME(7233).areRequestOptionsEqual(closure_7, closure_12), items4);
  closure_13 = tmp14;
  const obj3 = _require(589);
  const tmp12 = callback2;
  let flag2 = tmp9;
  if (tmp3[5] == null) {
    flag2 = false;
  }
  hasExpiredShopBlocks = _require(15343).useHasExpiredShopBlocks(tmp4, flag2, flag);
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
            const collectiblesShopHome = HOME(7233).fetchCollectiblesShopHome(HOME, closure_12, closure_2);
            const obj = HOME(7233);
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
      const collectiblesShopHome = HOME(7233).fetchCollectiblesShopHome(HOME, closure_12, closure_2);
    }, items7)
  };
  return obj;
};