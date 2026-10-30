// discord_app/modules/slayer_storefront/hooks/useSlayerStorefrontDevOverrideStore.tsx
import 00560__ from "../../../../_runtime/metro/00560__.js";
import size from "../../../../_runtime/metro/00002__.js";

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