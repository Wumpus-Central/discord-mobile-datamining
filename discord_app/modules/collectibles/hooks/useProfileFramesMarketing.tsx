// discord_app/modules/collectibles/hooks/useProfileFramesMarketing.tsx
import CollectiblesProfileFramesExperimentDefault from "../experiments/CollectiblesProfileFramesExperiment.tsx";
import useCanPurchaseFrames from "useCanPurchaseFrames.tsx";
import CollectiblesProfileFramesPurchaseExperiment from "../experiments/CollectiblesProfileFramesPurchaseExperiment.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  const canViewProfileFramesInCollectiblesShop = useCanPurchaseFrames.useCanViewProfileFramesInCollectiblesShop(
    CollectiblesMobileAnnouncementActionSheet,
  );
  const isEarlyAccess = useCanPurchaseFrames.useIsProfileFramesEarlyAccessPhase(
    CollectiblesMobileAnnouncementActionSheet,
  );
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
    isEarlyAccess =
      bucket === CollectiblesProfileFramesPurchaseExperiment.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  if (isAnnouncementEligible) {
    isAnnouncementEligible = !isEarlyAccess;
  }
  return { isAnnouncementEligible, isEarlyAccess, showGiftingMarketing: isAnnouncementEligible };
};
