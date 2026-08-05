// discord_app/modules/collectibles/hooks/useTrackCollectiblesItemTryOut.tsx
import updateCategoriesAndProducts from "updateCategoriesAndProducts";
import { AnalyticEvents } from "ME";
import GuildFeatures from "GuildFeatures";

let AnalyticsPremiumFeatureNames;
let closure_6;
require("noop").useCallback;
({ AnalyticsPremiumFeatureNames, AnalyticsPremiumFeatureTiers: closure_6 } = GuildFeatures);
let obj = { [require("../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx").CollectiblesItemType.AVATAR_DECORATION]: AnalyticsPremiumFeatureNames.AVATAR_DECORATION, [require("../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx").CollectiblesItemType.PROFILE_EFFECT]: AnalyticsPremiumFeatureNames.PROFILE_EFFECT, [require("../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx").CollectiblesItemType.PROFILE_FRAME]: undefined, [require("../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx").CollectiblesItemType.NAMEPLATE]: undefined, [require("../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx").CollectiblesItemType.NONE]: undefined, [require("../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx").CollectiblesItemType.BUNDLE]: undefined, [require("../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx").CollectiblesItemType.VARIANTS_GROUP]: undefined, [require("../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx").CollectiblesItemType.EXTERNAL_SKU]: undefined };
const result = require("ME").fileFinishedImporting("modules/collectibles/hooks/useTrackCollectiblesItemTryOut.tsx");

export default function useTrackCollectiblesItemTryOut(arg0) {
  const _require = arg0;
  const items = [updateCategoriesAndProducts];
  const stateFromStores = _require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => products.products);
  const items1 = [stateFromStores, arg0];
  return useCallback((skuId) => {
    const value = stateFromStores.get(skuId.skuId);
    let obj = stateFromStores(outer1_2[6]);
    obj = { feature_name: outer1_7[skuId.type], feature_tier: null, feature_selection: null, location_stack: null };
    obj[1] = callback(outer1_2[7]).isPremiumCollectiblesProduct(value) ? outer1_6.FREE : outer1_6.PREMIUM_STANDARD;
    let name;
    if (value != null) {
      name = value.name;
    }
    obj[2] = name;
    obj[3] = callback;
    obj.track(outer1_5.PREMIUM_FEATURE_TRY_OUT, obj);
  }, items1);
};