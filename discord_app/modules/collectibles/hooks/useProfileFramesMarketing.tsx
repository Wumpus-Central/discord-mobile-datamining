// === Module 17043: useProfileFramesMarketing ===

// Module 17043 (useProfileFramesMarketing)
import CollectiblesProfileFramesExperimentDefault from "CollectiblesProfileFramesExperiment" /* 8275 */;
import useCanPurchaseFrames from "useCanPurchaseFrames" /* 14708 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/hooks/useProfileFramesMarketing.tsx");

export const deriveProfileFramesMarketing = function deriveProfileFramesMarketing(canViewProfileFramesInCollectiblesShop) {
  const isAnnouncementEligible = canViewProfileFramesInCollectiblesShop.canViewProfileFramesInCollectiblesShop;
  return { isAnnouncementEligible, showGiftingMarketing: isAnnouncementEligible };
};
export const useProfileFramesMarketing = function useProfileFramesMarketing(CollectiblesMobileAnnouncementActionSheet) {
  const isAnnouncementEligible = useCanPurchaseFrames.useCanViewProfileFramesInCollectiblesShop(CollectiblesMobileAnnouncementActionSheet);
  return { isAnnouncementEligible, showGiftingMarketing: isAnnouncementEligible };
};
export const getProfileFramesMarketing = function getProfileFramesMarketing(location) {
  const obj = { location };
  const isAnnouncementEligible = obj.getConfig(obj).enableProfileFrames;
  return { isAnnouncementEligible, showGiftingMarketing: isAnnouncementEligible };
};