// discord_app/modules/collectibles/hooks/useCanPurchaseFrames.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import create from "../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import isPremiumAtLeast from "../../../utils/PremiumTypeUtils.tsx";
import apexExperiment from "../experiments/CollectiblesProfileFramesExperiment.tsx";
import apexExperiment2 from "../experiments/CollectiblesProfileFramesPurchaseExperiment.tsx";
import apexExperimentDefault from "../experiments/CollectiblesProfileFramesPurchaseExperiment.tsx";
import closure_3 from "../../../stores/UserStore.tsx";
import { PremiumTypes } from "../../premium/PremiumConstants.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useCanPurchaseFrames.tsx");

export default function useCanPurchaseFrames(location) {
  let obj = apexExperiment;
  let isProfileFramesEnabled = obj.useIsProfileFramesEnabled(location);
  obj = { location };
  const bucket = apexExperimentDefault.useConfig(obj).bucket;
  const obj2 = apexExperimentDefault;
  const tmp = require;
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
    const tmp6 = bucket === apexExperiment2.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY && stateFromStores;
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