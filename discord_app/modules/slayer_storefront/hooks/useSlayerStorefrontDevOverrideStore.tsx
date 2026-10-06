// === Module 8482: useSlayerStorefrontDevOverrideStore ===

// Module 8482 (useSlayerStorefrontDevOverrideStore)
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const tmp2 = module_570.create()((arg0) => {
  let closure_0 = arg0;
  let obj = {
    overrideApplicationId: null,
    setOverrideApplicationId(overrideApplicationId) {
      const obj = { overrideApplicationId };
      return closure_0(obj);
    },
    showSelfActivity: false,
    setShowSelfActivity(showSelfActivity) {
      const obj = { showSelfActivity };
      return closure_0(obj);
    },
    recommendationApplicationIds: null,
    setRecommendationApplicationIds(str) {
      let recommendationApplicationIds = null;
      if (null != str) {
        recommendationApplicationIds = str.split(",");
      }
      return closure_0({ recommendationApplicationIds });
    },
    overrideNitroEligibilityForSocialLayerStorefront: false,
    setOverrideNitroEligibilityForSocialLayerStorefront(overrideNitroEligibilityForSocialLayerStorefront) {
      const obj = { overrideNitroEligibilityForSocialLayerStorefront };
      return closure_0(obj);
    },
    isNitroEligibleForSocialLayerStorefront: false,
    setIsNitroEligibleForSocialLayerStorefront(isNitroEligibleForSocialLayerStorefront) {
      const obj = { isNitroEligibleForSocialLayerStorefront };
      return closure_0(obj);
    },
    overrideCurrentPremiumPlanId: false,
    setOverrideCurrentPremiumPlanId(overrideCurrentPremiumPlanId) {
      const obj = { overrideCurrentPremiumPlanId };
      return closure_0(obj);
    },
    currentPremiumPlanId: null,
    setCurrentPremiumPlanId(currentPremiumPlanId) {
      const obj = { currentPremiumPlanId };
      return closure_0(obj);
    }
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/slayer_storefront/hooks/useSlayerStorefrontDevOverrideStore.tsx");

export const useSlayerStorefrontDevOverrideStore = tmp2;