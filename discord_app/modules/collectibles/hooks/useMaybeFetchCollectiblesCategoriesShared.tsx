// discord_app/modules/collectibles/hooks/useMaybeFetchCollectiblesCategoriesShared.tsx
import CollectiblesActionCreators from "../CollectiblesActionCreators.tsx";
import ShopVariantsReturnStyle from "../../../../discord_common/js/shared/shared-constants/ShopVariantsReturnStyle.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import ExperimentStore from "../../experiments/ExperimentStore.tsx";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";

require = fn;
const noop = fn(19);
({ useEffect: c3, useCallback: closure_4 } = noop);
const CollectiblesShopConstants = fn(1076);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: closure_7, COLLECTIBLES_SHOP_FETCH_ERROR_RETRY_THRESHOLD_MS: closure_8 } =
  CollectiblesShopConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesCategoriesShared.tsx");

export const useMaybeFetchCollectiblesCategoriesShared = function useMaybeFetchCollectiblesCategoriesShared(
  arg0,
  noOp,
  arg2,
  skipFetch,
) {
  _require = arg0;
  dependencyMap = noOp;
  _slicedToArray = arg2;
  let flag = skipFetch;
  if (skipFetch === undefined) {
    flag = false;
  }
  let hasLoadedExperiments;
  closure_6 = undefined;
  let obj = require("initialize");
  let items = [hasLoadedExperiments];
  const stateFromStores = obj.useStateFromStores(items, () => hasLoadedExperiments.hasLoadedExperiments);
  const items1 = [closure_6];
  const tmp2 = _slicedToArray(
    require("initialize").useStateFromStoresArray(items1, () => {
      const items = [, , , , , ,];
      ({ isFetchingCategories: arr[0], lastFetchOptions: arr[1], error: arr[2], lastErrorTimestamp } = closure_6);
      if (lastErrorTimestamp == null) {
        lastErrorTimestamp = 0;
      }
      items[3] = lastErrorTimestamp;
      let num = tmp.lastSuccessfulFetch;
      if (num == null) {
        num = 0;
      }
      items[4] = num;
      ({ categories: arr[5], skipNumCategories: arr[6] } = closure_6);
      return items;
    }),
    7,
  );
  hasLoadedExperiments = tmp3;
  closure_6 = tmp4;
  closure_7 = tmp5;
  closure_8 = tmp6;
  const skipNumCategories = tmp7;
  const items2 = [flag, stateFromStores, tmp2[1], tmp2[4], arg0, tmp2[2], tmp2[3], noOp, arg2, tmp2[6]];
  flag(() => {
    if (!flag) {
      if (stateFromStores) {
        if (!CollectiblesCategoryStore.isFetchingCategories) {
          const _Date = Date;
          const _Boolean = Boolean;
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
              const collectiblesCategories = tmp11(7541).fetchCollectiblesCategories(obj, closure_1, closure_2);
              const tmp11Result = tmp11(7541);
            }
            tmp11 = require;
            const tmp16 = !result;
          }
          const tmp6 = Date.now() - closure_7 < React6;
        }
      }
    }
  }, items2);
  const items3 = [arg0, arg2, tmp2[6]];
  obj = {
    isFetching: tmp2[0],
    categories: tmp2[5],
    fetchCategoriesError: tmp4,
    refreshCategories: stateFromStores(() => {
      const obj = {};
      const merged = Object.assign(closure_0);
      obj.variantsReturnStyle = ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP;
      obj.includeBundles = true;
      obj.skipNumCategories = skipNumCategories;
      const collectiblesCategories = CollectiblesActionCreators.fetchCollectiblesCategories(obj, undefined, closure_2);
    }, items3),
  };
  return obj;
};
