// discord_app/modules/collectibles/hooks/useTrackCollectiblesItemTryOut.tsx
import react from "../../../../_runtime/00019_react.js";
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import CollectiblesUtils from "../CollectiblesUtils.tsx";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";
import PremiumConstants from "../../premium/PremiumConstants.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let AnalyticsPremiumFeatureNames;
let metroRequire;
const useCallback = react.useCallback;
const AnalyticEvents = Constants.AnalyticEvents;
({ AnalyticsPremiumFeatureNames, AnalyticsPremiumFeatureTiers: metroRequire } = PremiumConstants);
let obj = {
  [CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION]: AnalyticsPremiumFeatureNames.AVATAR_DECORATION,
  [CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT]: AnalyticsPremiumFeatureNames.PROFILE_EFFECT,
  [CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME]: undefined,
  [CollectiblesItemType.CollectiblesItemType.NAMEPLATE]: undefined,
  [CollectiblesItemType.CollectiblesItemType.NONE]: undefined,
  [CollectiblesItemType.CollectiblesItemType.BUNDLE]: undefined,
  [CollectiblesItemType.CollectiblesItemType.VARIANTS_GROUP]: undefined,
  [CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU]: undefined,
};
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location_stack) => {
      let products;
      let tmp4;
      let tmp5;
      const _require = location_stack;
      obj = require("react");
      const cResult = obj.c(5);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CollectiblesCategoryStore];
        const fn = function c() {
          return products.products;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = tmp(573);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === location_stack) {
        let tmp8;
        if (cResult[3] === stateFromStores) {
          tmp8 = cResult[4];
        }
        return tmp8;
      }
      class T {
        constructor(type) {
          let name;
          let obj2;
          type = type.type;
          const value = stateFromStores.get(type.skuId);
          obj = {
            feature_name: obj[type],
            feature_tier: obj2.isPremiumCollectiblesProduct(value) ? metroRequire.FREE : metroRequire.PREMIUM_STANDARD,
            feature_selection: name,
            location_stack,
          };
          const track = AnalyticsUtilsDefault.track;
          const PREMIUM_FEATURE_TRY_OUT = AnalyticEvents.PREMIUM_FEATURE_TRY_OUT;
          AnalyticsUtilsDefault;
          name = undefined;
          obj2 = CollectiblesUtils;
          if (value != null) {
            name = value.name;
          }
          track(PREMIUM_FEATURE_TRY_OUT, obj);
        }
      }
      cResult[2] = location_stack;
      cResult[3] = stateFromStores;
      cResult[4] = T;
      tmp8 = T;
    }
  : (location_stack) => {
      let products;
      const _require = location_stack;
      obj = require("useStateFromStores");
      const items = [CollectiblesCategoryStore];
      const stateFromStores = obj.useStateFromStores(items, () => products.products);
      const items1 = [stateFromStores, location_stack];
      return useCallback((type) => {
        let name;
        let obj2;
        type = type.type;
        const value = stateFromStores.get(type.skuId);
        obj = {
          feature_name: obj[type],
          feature_tier: obj2.isPremiumCollectiblesProduct(value) ? metroRequire.FREE : metroRequire.PREMIUM_STANDARD,
          feature_selection: name,
          location_stack,
        };
        const track = AnalyticsUtilsDefault.track;
        const PREMIUM_FEATURE_TRY_OUT = AnalyticEvents.PREMIUM_FEATURE_TRY_OUT;
        AnalyticsUtilsDefault;
        name = undefined;
        obj2 = CollectiblesUtils;
        if (value != null) {
          name = value.name;
        }
        track(PREMIUM_FEATURE_TRY_OUT, obj);
      }, items1);
    };
const result = size.fileFinishedImporting("modules/collectibles/hooks/useTrackCollectiblesItemTryOut.tsx");

export default tmp3;
