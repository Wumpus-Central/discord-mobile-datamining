// === Module 16490: deriveProfileFramesMarketing ===

// Module 16490 (deriveProfileFramesMarketing)
import set from "set" /* 2 */;
import apexExperimentDefault from "apexExperiment" /* 8512 */;
import useCanPurchaseFrames from "useCanPurchaseFrames" /* 12497 */;
import apexExperiment from "apexExperiment" /* 12498 */;
import apexExperimentDefault2 from "apexExperiment" /* 12498 */;

const result = set.fileFinishedImporting("modules/collectibles/hooks/useProfileFramesMarketing.tsx");

export const deriveProfileFramesMarketing = function deriveProfileFramesMarketing(arg0) {
  ({ canViewProfileFramesInCollectiblesShop, isEarlyAccess } = arg0);
  if (isAnnouncementEligible) {
    isAnnouncementEligible = !isEarlyAccess;
  }
  return { isAnnouncementEligible, isEarlyAccess, showGiftingMarketing: isAnnouncementEligible };
};
export const useProfileFramesMarketing = function useProfileFramesMarketing(CollectiblesMobileAnnouncementActionSheet) {
  const canViewProfileFramesInCollectiblesShop = useCanPurchaseFrames.useCanViewProfileFramesInCollectiblesShop(CollectiblesMobileAnnouncementActionSheet);
  const obj = useCanPurchaseFrames;
  const isEarlyAccess = useCanPurchaseFrames.useIsProfileFramesEarlyAccessPhase(CollectiblesMobileAnnouncementActionSheet);
  let isAnnouncementEligible = canViewProfileFramesInCollectiblesShop;
  if (canViewProfileFramesInCollectiblesShop) {
    isAnnouncementEligible = !isEarlyAccess;
  }
  return { isAnnouncementEligible, isEarlyAccess, showGiftingMarketing: isAnnouncementEligible };
};
export const getProfileFramesMarketing = function getProfileFramesMarketing(location) {
  let obj = apexExperimentDefault;
  obj = { location };
  let isEarlyAccess = obj.getConfig(obj).enableProfileFrames;
  obj = { location };
  const bucket = apexExperimentDefault2.getConfig(obj).bucket;
  let isAnnouncementEligible = isEarlyAccess;
  if (isEarlyAccess) {
    isAnnouncementEligible = bucket !== apexExperiment.ProfileFramesPurchaseBucket.CONTROL;
  }
  if (isEarlyAccess) {
    isEarlyAccess = bucket === apexExperiment.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  if (isAnnouncementEligible) {
    isAnnouncementEligible = !isEarlyAccess;
  }
  return { isAnnouncementEligible, isEarlyAccess, showGiftingMarketing: isAnnouncementEligible };
};