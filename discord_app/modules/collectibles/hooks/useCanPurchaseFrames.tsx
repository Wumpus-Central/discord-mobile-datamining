// discord_app/modules/collectibles/hooks/useCanPurchaseFrames.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import user from "../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import PremiumTypeUtils from "../../../utils/PremiumTypeUtils.tsx";
import CollectiblesProfileFramesExperiment from "../experiments/CollectiblesProfileFramesExperiment.tsx";
import CollectiblesProfileFramesPurchaseExperiment from "../experiments/CollectiblesProfileFramesPurchaseExperiment.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const CollectiblesProfileFramesPurchaseExperimentDefault = CollectiblesProfileFramesPurchaseExperiment;

require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useCanPurchaseFrames.tsx");

export default function useCanPurchaseFrames(location) {
  let obj = CollectiblesProfileFramesExperiment;
  let isProfileFramesEnabled = obj.useIsProfileFramesEnabled(location);
  obj = { location };
  const bucket = CollectiblesProfileFramesPurchaseExperimentDefault.useConfig(obj).bucket;
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let isPremiumExactlyResult = PremiumTypeUtils.isPremiumExactly(currentUser, TIER_2.TIER_2);
    if (isPremiumExactlyResult) {
      let premiumState;
      if (currentUser != null) {
        premiumState = currentUser.premiumState;
      }
      isPremiumExactlyResult = null != premiumState;
    }
    if (isPremiumExactlyResult) {
      isPremiumExactlyResult = currentUser.premiumState.premiumSubscriptionType === user.PremiumSubscriptionType.TIER_2;
    }
    return isPremiumExactlyResult;
  });
  let tmp5 = bucket === CollectiblesProfileFramesPurchaseExperiment.ProfileFramesPurchaseBucket.OPEN_PURCHASE;
  if (!tmp5) {
    tmp5 =
      bucket ===
        CollectiblesProfileFramesPurchaseExperiment.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY &&
      stateFromStores;
    const tmp6 =
      bucket ===
        CollectiblesProfileFramesPurchaseExperiment.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY &&
      stateFromStores;
  }
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5;
  }
  return isProfileFramesEnabled;
}
export const useCanViewProfileFramesInCollectiblesShop = function useCanViewProfileFramesInCollectiblesShop(
  UserProfileFrameEditButton,
) {
  let isProfileFramesEnabled =
    CollectiblesProfileFramesExperiment.useIsProfileFramesEnabled(UserProfileFrameEditButton);
  CollectiblesProfileFramesPurchaseExperimentDefault;
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 !== CollectiblesProfileFramesPurchaseExperiment.ProfileFramesPurchaseBucket.CONTROL;
  }
  return isProfileFramesEnabled;
};
export const useIsProfileFramesEarlyAccessPhase = function useIsProfileFramesEarlyAccessPhase(
  CollectiblesShopCardCardDetailsV2,
) {
  let isProfileFramesEnabled = CollectiblesProfileFramesExperiment.useIsProfileFramesEnabled(
    CollectiblesShopCardCardDetailsV2,
  );
  CollectiblesProfileFramesPurchaseExperimentDefault;
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled =
      tmp5 === CollectiblesProfileFramesPurchaseExperiment.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
export const isUserPaidTier2 = function isUserPaidTier2(premiumState) {
  let isPremiumExactlyResult = PremiumTypeUtils.isPremiumExactly(premiumState, PremiumTypes.TIER_2);
  if (isPremiumExactlyResult) {
    premiumState = undefined;
    if (premiumState != null) {
      premiumState = premiumState.premiumState;
    }
    isPremiumExactlyResult = null != premiumState;
  }
  if (isPremiumExactlyResult) {
    isPremiumExactlyResult = premiumState.premiumState.premiumSubscriptionType === user.PremiumSubscriptionType.TIER_2;
  }
  return isPremiumExactlyResult;
};
