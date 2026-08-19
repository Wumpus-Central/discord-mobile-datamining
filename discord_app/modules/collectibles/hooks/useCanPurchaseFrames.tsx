// === Module 9233: useCanPurchaseFrames ===

// Module 9233 (useCanPurchaseFrames)
import initialize from "initialize" /* 589 */;
import create from "create" /* 1940 */;
import isPremiumAtLeast from "isPremiumAtLeast" /* 1945 */;
import apexExperiment from "apexExperiment" /* 8956 */;
import apexExperiment2 from "apexExperiment" /* 9234 */;
import apexExperimentDefault from "apexExperiment" /* 9234 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/hooks/useCanPurchaseFrames.tsx");

export default function useCanPurchaseFrames(location) {
  let obj = apexExperiment;
  let isProfileFramesEnabled = obj.useIsProfileFramesEnabled(location);
  obj = { location };
  const bucket = apexExperimentDefault.useConfig(obj).bucket;
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => {
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
  let tmp5 = bucket === apexExperiment2.ProfileFramesPurchaseBucket.OPEN_PURCHASE;
  if (!tmp5) {
    tmp5 = bucket === apexExperiment2.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY && stateFromStores;
  }
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5;
  }
  return isProfileFramesEnabled;
};
export const useCanViewProfileFramesInCollectiblesShop = function useCanViewProfileFramesInCollectiblesShop(UserProfileFrameEditButton) {
  let isProfileFramesEnabled = apexExperiment.useIsProfileFramesEnabled(UserProfileFrameEditButton);
  apexExperimentDefault;
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 !== apexExperiment2.ProfileFramesPurchaseBucket.CONTROL;
  }
  return isProfileFramesEnabled;
};
export const useIsProfileFramesEarlyAccessPhase = function useIsProfileFramesEarlyAccessPhase(CollectiblesShopCardCardDetailsV2) {
  let isProfileFramesEnabled = apexExperiment.useIsProfileFramesEnabled(CollectiblesShopCardCardDetailsV2);
  apexExperimentDefault;
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === apexExperiment2.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
export const isUserPaidTier2 = function isUserPaidTier2(currentUser) {
  let isPremiumExactlyResult = isPremiumAtLeast.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
  if (isPremiumExactlyResult) {
    let premiumState;
    if (currentUser != null) {
      premiumState = currentUser.premiumState;
    }
    isPremiumExactlyResult = null != premiumState;
  }
  if (isPremiumExactlyResult) {
    isPremiumExactlyResult = currentUser.premiumState.premiumSubscriptionType === create.PremiumSubscriptionType.TIER_2;
  }
  return isPremiumExactlyResult;
};