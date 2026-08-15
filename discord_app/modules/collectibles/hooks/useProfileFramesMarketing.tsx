// discord_app/modules/collectibles/hooks/useProfileFramesMarketing.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { apexExperiment } from "../experiments/CollectiblesProfileFramesEAMarketingExperiment.tsx";
import { apexExperiment } from "../experiments/CollectiblesProfileFramesExperiment.tsx";
import { apexExperiment } from "../experiments/CollectiblesProfileFramesPurchaseExperiment.tsx";
import { useCanPurchaseFrames } from "useCanPurchaseFrames.tsx";

const require = arg1;
const result = require("apexExperiment").fileFinishedImporting("modules/collectibles/hooks/useProfileFramesMarketing.tsx");

export const deriveProfileFramesMarketing = function deriveProfileFramesMarketing(arg0) {
  let canViewProfileFramesInCollectiblesShop;
  let hasPaidTier2;
  let isEarlyAccess;
  let isFramesEAMarketingEnabled;
  ({ canViewProfileFramesInCollectiblesShop, isEarlyAccess, isFramesEAMarketingEnabled, hasPaidTier2 } = arg0);
  if (canViewProfileFramesInCollectiblesShop) {
    canViewProfileFramesInCollectiblesShop = !isEarlyAccess;
  }
  let tmp = canViewProfileFramesInCollectiblesShop;
  if (!canViewProfileFramesInCollectiblesShop) {
    let tmp2 = isEarlyAccess;
    if (isEarlyAccess) {
      tmp2 = isFramesEAMarketingEnabled;
    }
    tmp = tmp2;
  }
  const obj = { isAnnouncementEligible: tmp, isEarlyAccess, showGiftingMarketing: canViewProfileFramesInCollectiblesShop, showEaPremiumMarketing: null, showEaNonPremiumMarketing: null };
  let tmp3 = isEarlyAccess;
  if (isEarlyAccess) {
    tmp3 = isFramesEAMarketingEnabled;
  }
  if (tmp3) {
    tmp3 = hasPaidTier2;
  }
  obj[3] = tmp3;
  if (isEarlyAccess) {
    isEarlyAccess = isFramesEAMarketingEnabled;
  }
  if (isEarlyAccess) {
    isEarlyAccess = !hasPaidTier2;
  }
  obj[4] = isEarlyAccess;
  return obj;
};
export const useProfileFramesMarketing = function useProfileFramesMarketing(CollectiblesMobileAnnouncementActionSheet) {
  let obj = useCanPurchaseFrames;
  const canViewProfileFramesInCollectiblesShop = obj.useCanViewProfileFramesInCollectiblesShop(CollectiblesMobileAnnouncementActionSheet);
  let isProfileFramesEarlyAccessPhase = useCanPurchaseFrames.useIsProfileFramesEarlyAccessPhase(CollectiblesMobileAnnouncementActionSheet);
  const obj2 = useCanPurchaseFrames;
  const isProfileFramesEAMarketingEnabled = apexExperiment.useIsProfileFramesEAMarketingEnabled(CollectiblesMobileAnnouncementActionSheet);
  const obj3 = apexExperiment;
  const items = [mergeGuildAvatar];
  const stateFromStores = initialize.useStateFromStores(items, () => callback(table[1]).isUserPaidTier2(currentUser.getCurrentUser()));
  let tmp5 = canViewProfileFramesInCollectiblesShop;
  if (canViewProfileFramesInCollectiblesShop) {
    tmp5 = !isProfileFramesEarlyAccessPhase;
  }
  let tmp6 = tmp5;
  if (!tmp5) {
    let tmp7 = isProfileFramesEarlyAccessPhase;
    if (isProfileFramesEarlyAccessPhase) {
      tmp7 = isProfileFramesEAMarketingEnabled;
    }
    tmp6 = tmp7;
  }
  obj = { isAnnouncementEligible: tmp6, isEarlyAccess: isProfileFramesEarlyAccessPhase, showGiftingMarketing: tmp5, showEaPremiumMarketing: null, showEaNonPremiumMarketing: null };
  let tmp8 = isProfileFramesEarlyAccessPhase;
  if (isProfileFramesEarlyAccessPhase) {
    tmp8 = isProfileFramesEAMarketingEnabled;
  }
  if (tmp8) {
    tmp8 = stateFromStores;
  }
  obj[3] = tmp8;
  if (isProfileFramesEarlyAccessPhase) {
    isProfileFramesEarlyAccessPhase = isProfileFramesEAMarketingEnabled;
  }
  if (isProfileFramesEarlyAccessPhase) {
    isProfileFramesEarlyAccessPhase = !stateFromStores;
  }
  obj[4] = isProfileFramesEarlyAccessPhase;
  return obj;
};
export const getProfileFramesMarketing = function getProfileFramesMarketing(location) {
  let obj = apexExperiment;
  obj = { location };
  let enableProfileFrames = obj.getConfig(obj).enableProfileFrames;
  obj = { location };
  const bucket = apexExperiment.getConfig(obj).bucket;
  let tmp2 = enableProfileFrames;
  if (enableProfileFrames) {
    tmp2 = bucket !== apexExperiment.ProfileFramesPurchaseBucket.CONTROL;
  }
  if (enableProfileFrames) {
    enableProfileFrames = bucket === apexExperiment.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  const obj3 = apexExperiment;
  const isProfileFramesEAMarketingEnabled = apexExperiment.getIsProfileFramesEAMarketingEnabled(location);
  const obj5 = apexExperiment;
  const isUserPaidTier2Result = useCanPurchaseFrames.isUserPaidTier2(currentUser.getCurrentUser());
  if (tmp2) {
    tmp2 = !enableProfileFrames;
  }
  let tmp7 = tmp2;
  if (!tmp2) {
    let tmp8 = enableProfileFrames;
    if (enableProfileFrames) {
      tmp8 = isProfileFramesEAMarketingEnabled;
    }
    tmp7 = tmp8;
  }
  const obj1 = { isAnnouncementEligible: tmp7, isEarlyAccess: enableProfileFrames, showGiftingMarketing: tmp2, showEaPremiumMarketing: null, showEaNonPremiumMarketing: null };
  let tmp9 = enableProfileFrames;
  if (enableProfileFrames) {
    tmp9 = isProfileFramesEAMarketingEnabled;
  }
  if (tmp9) {
    tmp9 = isUserPaidTier2Result;
  }
  obj1[3] = tmp9;
  if (enableProfileFrames) {
    enableProfileFrames = isProfileFramesEAMarketingEnabled;
  }
  if (enableProfileFrames) {
    enableProfileFrames = !isUserPaidTier2Result;
  }
  obj1[4] = enableProfileFrames;
  return obj1;
};