// === Module 8287: useTrackCollectiblesItemTryOut ===

// Module 8287 (useTrackCollectiblesItemTryOut)
import _mod19 from "module_19" /* 19 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1993 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7275 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7263 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

_mod19.useCallback;
const AnalyticEvents = Constants.AnalyticEvents;
({ AnalyticsPremiumFeatureNames, AnalyticsPremiumFeatureTiers: metroRequire } = PremiumConstants);
let obj = { [CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION]: AnalyticsPremiumFeatureNames.AVATAR_DECORATION, [CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT]: AnalyticsPremiumFeatureNames.PROFILE_EFFECT, [CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME]: undefined, [CollectiblesItemType.CollectiblesItemType.NAMEPLATE]: undefined, [CollectiblesItemType.CollectiblesItemType.NONE]: undefined, [CollectiblesItemType.CollectiblesItemType.BUNDLE]: undefined, [CollectiblesItemType.CollectiblesItemType.VARIANTS_GROUP]: undefined, [CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU]: undefined };
const result = size.fileFinishedImporting("modules/collectibles/hooks/useTrackCollectiblesItemTryOut.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackCollectiblesItemTryOut(location_stack) {
  _require = location_stack;
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
  const fn2 = function _(skuId) {
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
  };
  cResult[2] = location_stack;
  cResult[3] = stateFromStores;
  cResult[4] = fn2;
  tmp8 = fn2;
  const tmpResult = require("useStateFromStores");
}) : (function useTrackCollectiblesItemTryOut(location_stack) {
  _require = location_stack;
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