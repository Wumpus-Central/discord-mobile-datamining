// === Module 16986: useProfileFramesMarketing ===

// Module 16986 (useProfileFramesMarketing)
import CollectiblesProfileFramesExperimentDefault from "CollectiblesProfileFramesExperiment" /* 8238 */;
import useCanPurchaseFrames from "useCanPurchaseFrames" /* 14659 */;
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