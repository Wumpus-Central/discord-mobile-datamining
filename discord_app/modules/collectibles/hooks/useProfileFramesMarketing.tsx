// === Module 16946: useProfileFramesMarketing ===

// Module 16946 (useProfileFramesMarketing)
import CollectiblesProfileFramesExperimentDefault from "CollectiblesProfileFramesExperiment" /* 8212 */;
import useCanPurchaseFrames from "useCanPurchaseFrames" /* 8830 */;
import CollectiblesProfileFramesPurchaseExperiment from "CollectiblesProfileFramesPurchaseExperiment" /* 8831 */;
import size from "module_2" /* 2 */;

const CollectiblesProfileFramesPurchaseExperimentDefault = CollectiblesProfileFramesPurchaseExperiment;

const result = size.fileFinishedImporting("modules/collectibles/hooks/useProfileFramesMarketing.tsx");

export const deriveProfileFramesMarketing = function deriveProfileFramesMarketing(arg0) {
  ({ canViewProfileFramesInCollectiblesShop, isEarlyAccess } = arg0);
  if (isAnnouncementEligible) {
    isAnnouncementEligible = !isEarlyAccess;
  }
  return { isAnnouncementEligible, isEarlyAccess, showGiftingMarketing: isAnnouncementEligible };
};
export const useProfileFramesMarketing = function useProfileFramesMarketing(CollectiblesMobileAnnouncementActionSheet) {
  const canViewProfileFramesInCollectiblesShop = useCanPurchaseFrames.useCanViewProfileFramesInCollectiblesShop(CollectiblesMobileAnnouncementActionSheet);
  const isEarlyAccess = useCanPurchaseFrames.useIsProfileFramesEarlyAccessPhase(CollectiblesMobileAnnouncementActionSheet);
  let isAnnouncementEligible = canViewProfileFramesInCollectiblesShop;
  if (canViewProfileFramesInCollectiblesShop) {
    isAnnouncementEligible = !isEarlyAccess;
  }
  return { isAnnouncementEligible, isEarlyAccess, showGiftingMarketing: isAnnouncementEligible };
};
export const getProfileFramesMarketing = function getProfileFramesMarketing(location) {
  let obj = { location };
  let isEarlyAccess = obj.getConfig(obj).enableProfileFrames;
  obj = { location };
  const bucket = CollectiblesProfileFramesPurchaseExperimentDefault.getConfig(obj).bucket;
  let isAnnouncementEligible = isEarlyAccess;
  if (isEarlyAccess) {
    isAnnouncementEligible = bucket !== CollectiblesProfileFramesPurchaseExperiment.ProfileFramesPurchaseBucket.CONTROL;
  }
  if (isEarlyAccess) {
    isEarlyAccess = bucket === CollectiblesProfileFramesPurchaseExperiment.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  if (isAnnouncementEligible) {
    isAnnouncementEligible = !isEarlyAccess;
  }
  return { isAnnouncementEligible, isEarlyAccess, showGiftingMarketing: isAnnouncementEligible };
};