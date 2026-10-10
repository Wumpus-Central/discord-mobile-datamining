// discord_app/modules/collectibles/hooks/useMaybeFetchShopHome.tsx
import CollectiblesActionCreators from "../CollectiblesActionCreators.tsx";
import ShopVariantsReturnStyle from "../../../../discord_common/js/shared/shared-constants/ShopVariantsReturnStyle.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import ExperimentStore from "../../experiments/ExperimentStore.tsx";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";
import CollectiblesShopHomeStore from "../CollectiblesShopHomeStore.tsx";

const require = globalThis.__r;

require = fn;
const noop = fn(19);
({ useEffect: c3, useCallback: closure_4, useMemo: hasOwnProperty } = noop);
const CollectiblesShopConstants = fn(1087);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: closure_9, COLLECTIBLES_SHOP_FETCH_ERROR_RETRY_THRESHOLD_MS: c10 } =
  CollectiblesShopConstants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchShopHome.tsx");

export const useMaybeFetchCollectiblesShopHome = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMaybeFetchCollectiblesShopHome(arg0, arg1, arg2, arg3, arg4) {
      _require = arg0;
      dependencyMap = arg2;
      const cResult = require("c").c(36);
      _slicedToArray = undefined !== arg4 && arg4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ExperimentStore];
        class E {
          constructor() {
            return closure_6.hasLoadedExperiments;
          }
        }
        cResult[0] = items;
        cResult[1] = E;
        tmp4 = items;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp4, E);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [CollectiblesCategoryStore];
        class R {
          constructor() {
            return closure_7.skipNumCategories;
          }
        }
        cResult[2] = items1;
        cResult[3] = R;
        let tmp9 = R;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = require("initialize");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp9);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [CollectiblesShopHomeStore];
        class R {
          constructor() {
            return closure_7.skipNumCategories;
          }
        }
        cResult[4] = items2;
        let tmp12 = items2;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] !== arg0) {
        class L {
          constructor() {
            obj = closure_8;
            tmp = closure_0;
            items = [, , , , , , ,];
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
        class R {
          constructor() {
            return closure_7.skipNumCategories;
          }
        }
        cResult[6] = L;
      } else {
        class L {
          constructor() {
            obj = closure_8;
            tmp = closure_0;
            items = [, , , , , , ,];
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
      const tmpResult3 = require("initialize");
      const tmp15 = _slicedToArray(require("initialize").useStateFromStoresArray(tmp12, L), 8);
      closure_4 = tmp15[2];
      closure_5 = tmp15[4];
      ExperimentStore = tmp15[5];
      CollectiblesCategoryStore = tmp15[6];
      if (cResult[7] === arg1) {
        class L {
          constructor() {
            obj = closure_8;
            tmp = closure_0;
            items = [, , , , , , ,];
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
      const obj2 = {};
      const merged = Object.assign(arg1);
      obj2.variantsReturnStyle = require("ShopVariantsReturnStyle").ShopVariantsReturnStyle.VARIANTS_GROUP;
      obj2.includeBundles = true;
      obj2.includeDynamicBlocks = true;
      obj2.shopHomeConfig = tmp15[7];
      obj2.skipNumCategories = stateFromStores1;
      cResult[7] = arg1;
      cResult[8] = tmp15[7];
      cResult[9] = stateFromStores1;
      cResult[10] = obj2;
      const tmpResult4 = require("initialize");
    }
  : function useMaybeFetchCollectiblesShopHome(arg0, arg1, arg2) {
      _require = arg0;
      dependencyMap = arg1;
      _slicedToArray = arg2;
      let flag = arg3;
      if (arg3 === undefined) {
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
      const stateFromStores1 = require("initialize").useStateFromStores(
        items1,
        () => skipNumCategories.skipNumCategories,
      );
      const obj2 = require("initialize");
      const items2 = [closure_8];
      const tmp3 = _slicedToArray(
        require("initialize").useStateFromStoresArray(items2, () => {
          const items = [CollectiblesShopHomeStore.getShopBlocks(closure_0), , , , , , ,];
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
        }),
        8,
      );
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
      const tmp14 = stateFromStores1(
        () => !CollectiblesActionCreators.areRequestOptionsEqual(closure_8, closure_13),
        items4,
      );
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
          tmp = Date.now() - c6 < options;
        }
        return tmp;
      }, items5);
      closure_16 = tmp12Result;
      const items6 = [
        flag2,
        stateFromStores,
        tmp3[5],
        tmp3[4],
        tmp3[2],
        tmp12Result,
        tmp3[6],
        tmp14,
        tmp13,
        arg0,
        arg2,
      ];
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
                  const collectiblesShopHome = CollectiblesActionCreators.fetchCollectiblesShopHome(
                    closure_0,
                    closure_13,
                    closure_2,
                  );
                }
              }
              tmp8 = null != closure_9 && Date.now() - closure_7 < collapsed;
            }
          }
        }
      }, items6);
      const items7 = [arg0, tmp13, arg2];
      const obj4 = require("useHasExpiredShopBlocks");
      return {
        isFetchingShopHome: tmp3[5],
        fetchShopHomeError: tmp3[4],
        shopBlocks: tmp4,
        refreshShopHome: stateFromStores(() => {
          const collectiblesShopHome = CollectiblesActionCreators.fetchCollectiblesShopHome(
            closure_0,
            closure_13,
            closure_2,
          );
        }, items7),
      };
    };
