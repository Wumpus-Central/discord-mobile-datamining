// discord_app/modules/collectibles/hooks/useProfileFramesMarketing.tsx
import CollectiblesProfileFramesExperimentDefault from "../experiments/CollectiblesProfileFramesExperiment.tsx";
import useCanPurchaseFrames from "useCanPurchaseFrames.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/collectibles/hooks/useProfileFramesMarketing.tsx");

export const deriveProfileFramesMarketing = function deriveProfileFramesMarketing(
  canViewProfileFramesInCollectiblesShop,
) {
  const isAnnouncementEligible = canViewProfileFramesInCollectiblesShop.canViewProfileFramesInCollectiblesShop;
  return { isAnnouncementEligible, showGiftingMarketing: isAnnouncementEligible };
};
export const useProfileFramesMarketing = function useProfileFramesMarketing(CollectiblesMobileAnnouncementActionSheet) {
  const isAnnouncementEligible = useCanPurchaseFrames.useCanViewProfileFramesInCollectiblesShop(
    CollectiblesMobileAnnouncementActionSheet,
  );
  return { isAnnouncementEligible, showGiftingMarketing: isAnnouncementEligible };
};
export const getProfileFramesMarketing = function getProfileFramesMarketing(location) {
  const obj = { location };
  const isAnnouncementEligible = obj.getConfig(obj).enableProfileFrames;
  return { isAnnouncementEligible, showGiftingMarketing: isAnnouncementEligible };
};
