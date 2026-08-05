// discord_app/modules/collectibles/hooks/useCanPurchaseFrames.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
const result = require("apexExperiment").fileFinishedImporting("modules/collectibles/hooks/useCanPurchaseFrames.tsx");

export default function useCanPurchaseFrames(location) {
  let obj = require("../experiments/CollectiblesProfileFramesExperiment.tsx") /* apexExperiment */;
  let isProfileFramesEnabled = obj.useIsProfileFramesEnabled(location);
  obj = { location };
  const bucket = require("../experiments/CollectiblesProfileFramesPurchaseExperiment.tsx").useConfig(obj).bucket;
  const obj2 = require("../experiments/CollectiblesProfileFramesPurchaseExperiment.tsx");
  const tmp = require;
  const items = [mergeGuildAvatar];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let isPremiumExactlyResult = callback(table[4]).isPremiumExactly(currentUser, TIER_2.TIER_2);
    if (isPremiumExactlyResult) {
      let premiumState;
      if (currentUser != null) {
        premiumState = currentUser.premiumState;
      }
      isPremiumExactlyResult = null != premiumState;
    }
    if (isPremiumExactlyResult) {
      isPremiumExactlyResult = currentUser.premiumState.premiumSubscriptionType === callback(table[5]).PremiumSubscriptionType.TIER_2;
    }
    return isPremiumExactlyResult;
  });
  let tmp5 = bucket === require("../experiments/CollectiblesProfileFramesPurchaseExperiment.tsx") /* apexExperiment */.ProfileFramesPurchaseBucket.OPEN_PURCHASE;
  if (!tmp5) {
    tmp5 = bucket === tmp(9322).ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY && stateFromStores;
    const tmp6 = bucket === tmp(9322).ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY && stateFromStores;
  }
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5;
  }
  return isProfileFramesEnabled;
};
export const useCanViewProfileFramesInCollectiblesShop = function useCanViewProfileFramesInCollectiblesShop(UserProfileFrameEditButton) {
  let isProfileFramesEnabled = require("../experiments/CollectiblesProfileFramesExperiment.tsx") /* apexExperiment */.useIsProfileFramesEnabled(UserProfileFrameEditButton);
  require("../experiments/CollectiblesProfileFramesPurchaseExperiment.tsx");
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 !== require("../experiments/CollectiblesProfileFramesPurchaseExperiment.tsx") /* apexExperiment */.ProfileFramesPurchaseBucket.CONTROL;
  }
  return isProfileFramesEnabled;
};
export const useIsProfileFramesEarlyAccessPhase = function useIsProfileFramesEarlyAccessPhase(CollectiblesShopCardCardDetailsV2) {
  let isProfileFramesEnabled = require("../experiments/CollectiblesProfileFramesExperiment.tsx") /* apexExperiment */.useIsProfileFramesEnabled(CollectiblesShopCardCardDetailsV2);
  require("../experiments/CollectiblesProfileFramesPurchaseExperiment.tsx");
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === require("../experiments/CollectiblesProfileFramesPurchaseExperiment.tsx") /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
export const isUserPaidTier2 = function isUserPaidTier2(currentUser) {
  let isPremiumExactlyResult = require("../../../utils/PremiumTypeUtils.tsx") /* isPremiumAtLeast */.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
  if (isPremiumExactlyResult) {
    let premiumState;
    if (currentUser != null) {
      premiumState = currentUser.premiumState;
    }
    isPremiumExactlyResult = null != premiumState;
  }
  if (isPremiumExactlyResult) {
    isPremiumExactlyResult = currentUser.premiumState.premiumSubscriptionType === require("../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx") /* create */.PremiumSubscriptionType.TIER_2;
  }
  return isPremiumExactlyResult;
};