// discord_app/modules/collectibles/hooks/useMaybeFetchShopHome.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import getHash from "getHash";
import updateCategoriesAndProducts from "updateCategoriesAndProducts";
import map from "map";
import items from "items";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { useHasExpiredShopBlocks } from "useHasExpiredShopBlocks.tsx";

let c10;
let c3;
let c4;
let c5;
let c9;
const require = arg1;
({ useEffect: c3, useCallback: c4, useMemo: c5 } = noop);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: c9, COLLECTIBLES_SHOP_FETCH_ERROR_RETRY_THRESHOLD_MS: c10 } = items);
const result = require("getHash").fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchShopHome.tsx");

export const useMaybeFetchCollectiblesShopHome = function useMaybeFetchCollectiblesShopHome(HOME, arg1, memo) {
  let tmp4;
  let tmp5;
  const _require = HOME;
  const dependencyMap = arg1;
  const callback = memo;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let stateFromStores;
  let stateFromStores1;
  let callback2;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  let c11;
  let c12;
  let c13;
  let hasExpiredShopBlocks;
  let c15;
  let obj = _initialize;
  let items = [c6];
  stateFromStores = obj.useStateFromStores(items, () => _undefined.hasLoadedExperiments);
  const items1 = [c7];
  stateFromStores1 = _initialize.useStateFromStores(items1, () => _undefined2.skipNumCategories);
  const obj2 = _initialize;
  const items2 = [c8];
  const tmp3 = callback(_initialize.useStateFromStoresArray(items2, () => {
    const items = [_undefined3.getShopBlocks(closure_0), , , , , , , ];
    let num = _undefined3.getLastSuccessfulFetch(closure_0);
    if (num == null) {
      num = 0;
    }
    items[1] = num;
    let num2 = obj.getLastErrorTimestamp(tmp);
    if (num2 == null) {
      num2 = 0;
    }
    items[2] = num2;
    items[3] = _undefined3.getLastFetchOptions(closure_0);
    items[4] = _undefined3.getFetchShopHomeError(closure_0);
    items[5] = _undefined3.getIsFetchingShopHome(closure_0);
    items[6] = _undefined3.getHasKnownStaleData(closure_0);
    items[7] = _undefined3.getShopHomeConfigOverride();
    return items;
  }), 8);
  [tmp4, tmp5] = tmp3;
  callback2 = tmp5;
  c6 = tmp6;
  c7 = tmp7;
  c8 = tmp8;
  c9 = tmp9;
  c10 = tmp10;
  c11 = tmp11;
  const items3 = [arg1, tmp3[7], stateFromStores1];
  const tmp13 = callback2(() => {
    const obj = {};
    const merged = Object.assign(dependencyMap);
    obj.variantsReturnStyle = HOME(6988).ShopVariantsReturnStyle.VARIANTS_GROUP;
    obj.includeBundles = true;
    obj.includeDynamicBlocks = true;
    obj.shopHomeConfig = c11;
    obj.skipNumCategories = stateFromStores1;
    return obj;
  }, items3);
  c12 = tmp13;
  const items4 = [tmp3[3], tmp13];
  const tmp14 = callback2(() => !HOME(6940).areRequestOptionsEqual(c7, c12), items4);
  c13 = tmp14;
  const obj3 = _initialize;
  const tmp12 = callback2;
  let flag2 = tmp9;
  if (tmp3[5] == null) {
    flag2 = false;
  }
  hasExpiredShopBlocks = _useHasExpiredShopBlocks.useHasExpiredShopBlocks(tmp4, flag2, flag);
  const items5 = [tmp5, hasExpiredShopBlocks];
  const tmp12Result = tmp12(() => {
    let tmp = !hasExpiredShopBlocks;
    if (!hasExpiredShopBlocks) {
      const _Date = Date;
      tmp = Date.now() - c5 < c9;
    }
    return tmp;
  }, items5);
  c15 = tmp12Result;
  const items6 = [stateFromStores, tmp3[5], tmp3[4], tmp3[2], tmp12Result, tmp3[6], tmp14, tmp13, HOME, memo];
  stateFromStores(() => {
    if (stateFromStores) {
      if (!c9) {
        const _Date = Date;
        if (!tmp7) {
          let tmp8 = c13;
          if (!c13) {
            tmp8 = !c15;
          }
          if (!tmp8) {
            tmp8 = c10;
          }
          if (tmp8) {
            const collectiblesShopHome = HOME(6940).fetchCollectiblesShopHome(HOME, c12, _slicedToArray);
            const obj = HOME(6940);
          }
        }
        tmp7 = null != c8 && Date.now() - c6 < c10;
      }
    }
  }, items6);
  const items7 = [HOME, tmp13, memo];
  obj = {
    isFetchingShopHome: tmp9,
    fetchShopHomeError: tmp8,
    shopBlocks: tmp4,
    refreshShopHome: stateFromStores1(() => {
      const collectiblesShopHome = HOME(6940).fetchCollectiblesShopHome(HOME, c12, _slicedToArray);
    }, items7)
  };
  return obj;
};