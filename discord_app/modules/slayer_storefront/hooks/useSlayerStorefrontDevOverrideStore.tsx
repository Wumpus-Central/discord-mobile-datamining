// === Module 8793: useSlayerStorefrontDevOverrideStore ===

// Module 8793 (useSlayerStorefrontDevOverrideStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/slayer_storefront/hooks/useSlayerStorefrontDevOverrideStore.tsx");

export const useSlayerStorefrontDevOverrideStore = module_560.create()((arg0) => {
  closure_0 = arg0;
  return {
    overrideApplicationId: null,
    setOverrideApplicationId(overrideApplicationId) {
      return closure_0({ overrideApplicationId });
    },
    showSelfActivity: false,
    setShowSelfActivity(showSelfActivity) {
      return closure_0({ showSelfActivity });
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
      return closure_0({ overrideNitroEligibilityForSocialLayerStorefront });
    },
    isNitroEligibleForSocialLayerStorefront: false,
    setIsNitroEligibleForSocialLayerStorefront(isNitroEligibleForSocialLayerStorefront) {
      return closure_0({ isNitroEligibleForSocialLayerStorefront });
    },
    overrideCurrentPremiumPlanId: false,
    setOverrideCurrentPremiumPlanId(overrideCurrentPremiumPlanId) {
      return closure_0({ overrideCurrentPremiumPlanId });
    },
    currentPremiumPlanId: null,
    setCurrentPremiumPlanId(currentPremiumPlanId) {
      return closure_0({ currentPremiumPlanId });
    }
  };
});