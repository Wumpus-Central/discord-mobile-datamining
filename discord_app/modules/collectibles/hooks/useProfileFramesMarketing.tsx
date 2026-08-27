// discord_app/modules/collectibles/hooks/useProfileFramesMarketing.tsx
import set from "../../../../_runtime/00002_set.js";
import apexExperimentDefault from "../experiments/CollectiblesProfileFramesExperiment.tsx";
import useCanPurchaseFrames from "useCanPurchaseFrames.tsx";
import apexExperiment from "../experiments/CollectiblesProfileFramesPurchaseExperiment.tsx";
import apexExperimentDefault2 from "../experiments/CollectiblesProfileFramesPurchaseExperiment.tsx";

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