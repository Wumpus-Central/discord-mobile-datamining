// === Module 8084: useTrackCollectiblesItemTryOut ===

// Module 8084 (useTrackCollectiblesItemTryOut)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import ME from "ME" /* 673 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1949 */;
import closure_4 from "updateCategoriesAndProducts" /* 7297 */;
import GuildFeatures from "GuildFeatures" /* 1923 */;

noop.useCallback;
const AnalyticEvents = ME.AnalyticEvents;
({ AnalyticsPremiumFeatureNames, AnalyticsPremiumFeatureTiers: closure_6 } = GuildFeatures);
let obj = { [CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION]: AnalyticsPremiumFeatureNames.AVATAR_DECORATION, [CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT]: AnalyticsPremiumFeatureNames.PROFILE_EFFECT, [CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME]: undefined, [CollectiblesItemType.CollectiblesItemType.NAMEPLATE]: undefined, [CollectiblesItemType.CollectiblesItemType.NONE]: undefined, [CollectiblesItemType.CollectiblesItemType.BUNDLE]: undefined, [CollectiblesItemType.CollectiblesItemType.VARIANTS_GROUP]: undefined, [CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU]: undefined };
const result = set.fileFinishedImporting("modules/collectibles/hooks/useTrackCollectiblesItemTryOut.tsx");

export default function useTrackCollectiblesItemTryOut(arg0) {
  const _require = arg0;
  const items = [closure_4];
  const stateFromStores = _require(644).useStateFromStores(items, () => products.products);
  const items1 = [stateFromStores, arg0];
  return useCallback((skuId) => {
    const value = stateFromStores.get(skuId.skuId);
    obj = stateFromStores(closure_1_2[6]);
    obj = { feature_name: closure_1_7[skuId.type], feature_tier: callback(closure_1_2[7]).isPremiumCollectiblesProduct(value) ? closure_1_6.FREE : closure_1_6.PREMIUM_STANDARD, feature_selection: null, location_stack: null };
    let name;
    if (value != null) {
      name = value.name;
    }
    obj[2] = name;
    obj[3] = callback;
    obj.track(closure_1_5.PREMIUM_FEATURE_TRY_OUT, obj);
  }, items1);
};