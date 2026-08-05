import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { apexExperiment } from "../experiments/CollectiblesProfileFrameGiftingExperiment.tsx";
import { apexExperiment } from "../experiments/CollectiblesProfileFramesEAMarketingExperiment.tsx";
import { apexExperiment } from "../experiments/CollectiblesProfileFramesExperiment.tsx";
import { apexExperiment } from "../experiments/CollectiblesProfileFramesPurchaseExperiment.tsx";
import { useCanPurchaseFrames } from "useCanPurchaseFrames.tsx";
// discord_app/modules/collectibles/hooks/useProfileFramesMarketing.tsx
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("apexExperiment").fileFinishedImporting("modules/collectibles/hooks/useProfileFramesMarketing.tsx");

export const deriveProfileFramesMarketing = function deriveProfileFramesMarketing(arg0) {
  let canViewProfileFramesInCollectiblesShop;
  let hasPaidTier2;
  let isEarlyAccess;
  let isFrameGiftingEnabled;
  let isFramesEAMarketingEnabled;
  ({ canViewProfileFramesInCollectiblesShop, isEarlyAccess, isFramesEAMarketingEnabled, hasPaidTier2, isFrameGiftingEnabled } = arg0);
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
  const obj = { isAnnouncementEligible: tmp, isEarlyAccess, showGiftingMarketing: null, showEaPremiumMarketing: null, showEaNonPremiumMarketing: null };
  if (canViewProfileFramesInCollectiblesShop) {
    canViewProfileFramesInCollectiblesShop = isFrameGiftingEnabled;
  }
  obj[2] = canViewProfileFramesInCollectiblesShop;
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
  let obj = useCanPurchaseFrames /* useCanPurchaseFrames */;
  const canViewProfileFramesInCollectiblesShop = obj.useCanViewProfileFramesInCollectiblesShop(CollectiblesMobileAnnouncementActionSheet);
  let isProfileFramesEarlyAccessPhase = useCanPurchaseFrames /* useCanPurchaseFrames */.useIsProfileFramesEarlyAccessPhase(CollectiblesMobileAnnouncementActionSheet);
  const obj2 = useCanPurchaseFrames /* useCanPurchaseFrames */;
  const isProfileFramesEAMarketingEnabled = apexExperiment /* apexExperiment */.useIsProfileFramesEAMarketingEnabled(CollectiblesMobileAnnouncementActionSheet);
  const obj3 = apexExperiment /* apexExperiment */;
  const isProfileFrameGiftingEnabled = apexExperiment /* apexExperiment */.useIsProfileFrameGiftingEnabled(CollectiblesMobileAnnouncementActionSheet);
  const obj4 = apexExperiment /* apexExperiment */;
  const items = [mergeGuildAvatar];
  const stateFromStores = initialize /* initialize */.useStateFromStores(items, () => callback(table[1]).isUserPaidTier2(currentUser.getCurrentUser()));
  let tmp6 = canViewProfileFramesInCollectiblesShop;
  if (canViewProfileFramesInCollectiblesShop) {
    tmp6 = !isProfileFramesEarlyAccessPhase;
  }
  let tmp7 = tmp6;
  if (!tmp6) {
    let tmp8 = isProfileFramesEarlyAccessPhase;
    if (isProfileFramesEarlyAccessPhase) {
      tmp8 = isProfileFramesEAMarketingEnabled;
    }
    tmp7 = tmp8;
  }
  obj = { isAnnouncementEligible: tmp7, isEarlyAccess: isProfileFramesEarlyAccessPhase, showGiftingMarketing: null, showEaPremiumMarketing: null, showEaNonPremiumMarketing: null };
  if (tmp6) {
    tmp6 = isProfileFrameGiftingEnabled;
  }
  obj[2] = tmp6;
  let tmp9 = isProfileFramesEarlyAccessPhase;
  if (isProfileFramesEarlyAccessPhase) {
    tmp9 = isProfileFramesEAMarketingEnabled;
  }
  if (tmp9) {
    tmp9 = stateFromStores;
  }
  obj[3] = tmp9;
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
    tmp2 = bucket !== apexExperiment /* apexExperiment */.ProfileFramesPurchaseBucket.CONTROL;
  }
  if (enableProfileFrames) {
    enableProfileFrames = bucket === apexExperiment /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  const obj3 = apexExperiment;
  const isProfileFramesEAMarketingEnabled = apexExperiment /* apexExperiment */.getIsProfileFramesEAMarketingEnabled(location);
  const obj5 = apexExperiment /* apexExperiment */;
  const isProfileFrameGiftingEnabled = apexExperiment /* apexExperiment */.getIsProfileFrameGiftingEnabled(location);
  const obj6 = apexExperiment /* apexExperiment */;
  const isUserPaidTier2Result = useCanPurchaseFrames /* useCanPurchaseFrames */.isUserPaidTier2(currentUser.getCurrentUser());
  if (tmp2) {
    tmp2 = !enableProfileFrames;
  }
  let tmp8 = tmp2;
  if (!tmp2) {
    let tmp9 = enableProfileFrames;
    if (enableProfileFrames) {
      tmp9 = isProfileFramesEAMarketingEnabled;
    }
    tmp8 = tmp9;
  }
  const obj1 = { isAnnouncementEligible: tmp8, isEarlyAccess: enableProfileFrames, showGiftingMarketing: null, showEaPremiumMarketing: null, showEaNonPremiumMarketing: null };
  if (tmp2) {
    tmp2 = isProfileFrameGiftingEnabled;
  }
  obj1[2] = tmp2;
  let tmp10 = enableProfileFrames;
  if (enableProfileFrames) {
    tmp10 = isProfileFramesEAMarketingEnabled;
  }
  if (tmp10) {
    tmp10 = isUserPaidTier2Result;
  }
  obj1[3] = tmp10;
  if (enableProfileFrames) {
    enableProfileFrames = isProfileFramesEAMarketingEnabled;
  }
  if (enableProfileFrames) {
    enableProfileFrames = !isUserPaidTier2Result;
  }
  obj1[4] = enableProfileFrames;
  return obj1;
};