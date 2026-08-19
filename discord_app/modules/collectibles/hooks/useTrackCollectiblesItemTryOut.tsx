// discord_app/modules/collectibles/hooks/useTrackCollectiblesItemTryOut.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import noop from "../../../../_runtime/00019_noop.js";
import ME from "../../../Constants.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import updateCategoriesAndProducts from "../CollectiblesCategoryStore.tsx";
import GuildFeatures from "../../premium/PremiumConstants.tsx";

noop.useCallback;
const AnalyticEvents = ME.AnalyticEvents;
({ AnalyticsPremiumFeatureNames, AnalyticsPremiumFeatureTiers: closure_6 } = GuildFeatures);
const result = obj132.fileFinishedImporting("modules/collectibles/hooks/useTrackCollectiblesItemTryOut.tsx");

export default function useTrackCollectiblesItemTryOut(arg0) {
  const _require = arg0;
  const items = [closure_4];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => products.products);
  const items1 = [stateFromStores, arg0];
  return useCallback((skuId) => {
    const value = stateFromStores.get(skuId.skuId);
    stateFromStores(dependencyMap[6]);
    obj = { feature_name: closure_1_7[skuId.type], feature_tier: callback(dependencyMap[7]).isPremiumCollectiblesProduct(value) ? closure_1_6.FREE : closure_1_6.PREMIUM_STANDARD, feature_selection: null, location_stack: null };
    let name;
    if (value != null) {
      name = value.name;
    }
    obj[2] = name;
    obj[3] = callback;
    obj.track(AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, obj);
    const obj3 = callback(dependencyMap[7]);
  }, items1);
};