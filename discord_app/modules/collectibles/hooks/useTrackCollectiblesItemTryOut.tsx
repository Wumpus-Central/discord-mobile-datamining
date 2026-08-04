// discord_app/modules/collectibles/hooks/useTrackCollectiblesItemTryOut.tsx
import updateCategoriesAndProducts from "updateCategoriesAndProducts";
import { AnalyticEvents } from "ME";
import GuildFeatures from "GuildFeatures";

let AnalyticsPremiumFeatureNames;
let closure_6;
require("noop").useCallback;
({ AnalyticsPremiumFeatureNames, AnalyticsPremiumFeatureTiers: closure_6 } = GuildFeatures);
let obj = { [require(1901).CollectiblesItemType.AVATAR_DECORATION]: AnalyticsPremiumFeatureNames.AVATAR_DECORATION, [require(1901).CollectiblesItemType.PROFILE_EFFECT]: AnalyticsPremiumFeatureNames.PROFILE_EFFECT, [require(1901).CollectiblesItemType.PROFILE_FRAME]: undefined, [require(1901).CollectiblesItemType.NAMEPLATE]: undefined, [require(1901).CollectiblesItemType.NONE]: undefined, [require(1901).CollectiblesItemType.BUNDLE]: undefined, [require(1901).CollectiblesItemType.VARIANTS_GROUP]: undefined, [require(1901).CollectiblesItemType.EXTERNAL_SKU]: undefined };
const result = require("ME").fileFinishedImporting("modules/collectibles/hooks/useTrackCollectiblesItemTryOut.tsx");

export default function useTrackCollectiblesItemTryOut(arg0) {
  const _require = arg0;
  const items = [updateCategoriesAndProducts];
  const stateFromStores = _require(647).useStateFromStores(items, () => products.products);
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