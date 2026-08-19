// === Module 9201: useSlayerStorefrontDevOverrideStore ===

// Module 9201 (useSlayerStorefrontDevOverrideStore)
import obj132 from "obj132" /* 2 */;
import keys from "keys" /* 644 */;

const tmp2 = keys.create()((arg0) => {
  closure_0 = arg0;
  return {
    overrideApplicationId: null,
    setOverrideApplicationId(overrideApplicationId) {
      return callback({ overrideApplicationId });
    },
    showSelfActivity: false,
    setShowSelfActivity(showSelfActivity) {
      return callback({ showSelfActivity });
    },
    recommendationApplicationIds: null,
    setRecommendationApplicationIds(str) {
      let recommendationApplicationIds = null;
      if (null != str) {
        recommendationApplicationIds = str.split(",");
      }
      return callback({ recommendationApplicationIds });
    },
    overrideNitroEligibilityForSocialLayerStorefront: false,
    setOverrideNitroEligibilityForSocialLayerStorefront(overrideNitroEligibilityForSocialLayerStorefront) {
      return callback({ overrideNitroEligibilityForSocialLayerStorefront });
    },
    isNitroEligibleForSocialLayerStorefront: false,
    setIsNitroEligibleForSocialLayerStorefront(isNitroEligibleForSocialLayerStorefront) {
      return callback({ isNitroEligibleForSocialLayerStorefront });
    }
  };
});
const result = obj132.fileFinishedImporting("modules/slayer_storefront/hooks/useSlayerStorefrontDevOverrideStore.tsx");

export const useSlayerStorefrontDevOverrideStore = tmp2;