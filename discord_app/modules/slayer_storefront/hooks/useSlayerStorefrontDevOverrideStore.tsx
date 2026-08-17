// discord_app/modules/slayer_storefront/hooks/useSlayerStorefrontDevOverrideStore.tsx
import set from "set" /* 2 */;
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
      return closure_0({ recommendationApplicationIds });
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
const result = set.fileFinishedImporting("modules/slayer_storefront/hooks/useSlayerStorefrontDevOverrideStore.tsx");

export const useSlayerStorefrontDevOverrideStore = tmp2;