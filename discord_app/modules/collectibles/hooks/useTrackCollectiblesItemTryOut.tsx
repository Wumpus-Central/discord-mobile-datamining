// === Module 7834: useTrackCollectiblesItemTryOut ===

// Module 7834 (useTrackCollectiblesItemTryOut)
import _mod19 from "module_19" /* 19 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7065 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7053 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

_mod19.useCallback;
const AnalyticEvents = Constants.AnalyticEvents;
({ AnalyticsPremiumFeatureNames, AnalyticsPremiumFeatureTiers: metroRequire } = PremiumConstants);
let obj = { [CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION]: AnalyticsPremiumFeatureNames.AVATAR_DECORATION, [CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT]: AnalyticsPremiumFeatureNames.PROFILE_EFFECT, [CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME]: undefined, [CollectiblesItemType.CollectiblesItemType.NAMEPLATE]: undefined, [CollectiblesItemType.CollectiblesItemType.NONE]: undefined, [CollectiblesItemType.CollectiblesItemType.BUNDLE]: undefined, [CollectiblesItemType.CollectiblesItemType.VARIANTS_GROUP]: undefined, [CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU]: undefined };
const result = size.fileFinishedImporting("modules/collectibles/hooks/useTrackCollectiblesItemTryOut.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((location_stack) => {
  const _require = location_stack;
  const cResult = require("c").c(5);
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
  obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(tmp4, tmp5);
  if (cResult[2] === location_stack) {
    if (cResult[3] === stateFromStores) {
      let tmp8 = cResult[4];
    }
    return tmp8;
  }
  class T {
    constructor(arg0) {
      value = closure_1.get(location_stack.skuId);
      obj = closure_1(closure_2[8]);
      obj1 = { feature_name: closure_7[location_stack.type], feature_tier: null, feature_selection: null, location_stack: null };
      obj3 = closure_0(closure_2[9]);
      tmp2 = closure_6;
      obj1.feature_tier = obj3.isPremiumCollectiblesProduct(value) ? tmp2.FREE : tmp2.PREMIUM_STANDARD;
      name = undefined;
      if (value != null) {
        name = value.name;
      }
      obj1.feature_selection = name;
      obj1.location_stack = closure_0;
      trackResult = obj.track(AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, obj1);
      return;
    }
  }
  cResult[2] = location_stack;
  cResult[3] = stateFromStores;
  cResult[4] = T;
  tmp8 = T;
  const tmpResult = require("useStateFromStores");
}) : ((location_stack) => {
  const _require = location_stack;
  const items = [CollectiblesCategoryStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => products.products);
  const items1 = [stateFromStores, location_stack];
  return useCallback((skuId) => {
    value = stateFromStores.get(skuId.skuId);
    obj = AnalyticsUtilsDefault;
    const obj2 = { feature_name: obj[skuId.type], feature_tier: CollectiblesUtils.isPremiumCollectiblesProduct(value) ? timestampProducer.FREE : timestampProducer.PREMIUM_STANDARD, feature_selection: null, location_stack: null };
    let name;
    if (value != null) {
      name = value.name;
    }
    obj2.feature_selection = name;
    obj2.location_stack = location_stack;
    obj.track(AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, obj2);
  }, items1);
});