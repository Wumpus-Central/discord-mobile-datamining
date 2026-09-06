// === Module 8163: useTrackCollectiblesItemTryOut ===

// Module 8163 (useTrackCollectiblesItemTryOut)
import _mod19 from "module_19" /* 19 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7554 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7542 */;
import PremiumConstants from "PremiumConstants" /* 1373 */;
import size from "module_2" /* 2 */;

_mod19.useCallback;
const AnalyticEvents = Constants.AnalyticEvents;
({ AnalyticsPremiumFeatureNames, AnalyticsPremiumFeatureTiers: metroRequire } = PremiumConstants);
let obj = { [CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION]: AnalyticsPremiumFeatureNames.AVATAR_DECORATION, [CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT]: AnalyticsPremiumFeatureNames.PROFILE_EFFECT, [CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME]: undefined, [CollectiblesItemType.CollectiblesItemType.NAMEPLATE]: undefined, [CollectiblesItemType.CollectiblesItemType.NONE]: undefined, [CollectiblesItemType.CollectiblesItemType.BUNDLE]: undefined, [CollectiblesItemType.CollectiblesItemType.VARIANTS_GROUP]: undefined, [CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU]: undefined };
const result = size.fileFinishedImporting("modules/collectibles/hooks/useTrackCollectiblesItemTryOut.tsx");

export default function useTrackCollectiblesItemTryOut(location_stack) {
  _require = location_stack;
  const items = [CollectiblesCategoryStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => products.products);
  const items1 = [stateFromStores, location_stack];
  return useCallback((skuId) => {
    value = stateFromStores.get(skuId.skuId);
    obj = AnalyticsUtilsDefault;
    obj = { feature_name: obj[skuId.type], feature_tier: CollectiblesUtils.isPremiumCollectiblesProduct(value) ? timestampProducer.FREE : timestampProducer.PREMIUM_STANDARD, feature_selection: null, location_stack: null };
    let name;
    if (value != null) {
      name = value.name;
    }
    obj.feature_selection = name;
    obj.location_stack = location_stack;
    obj.track(AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, obj);
  }, items1);
};