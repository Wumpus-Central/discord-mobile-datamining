// === Module 13161: useShouldShowPremiumProfileFrameEA ===

// Module 13161 (useShouldShowPremiumProfileFrameEA)
import CollectiblesProfileFramesExperiment from "CollectiblesProfileFramesExperiment" /* 8212 */;
import CollectiblesProfileFramesPurchaseExperiment from "CollectiblesProfileFramesPurchaseExperiment" /* 8831 */;
import size from "module_2" /* 2 */;

const CollectiblesProfileFramesPurchaseExperimentDefault = CollectiblesProfileFramesPurchaseExperiment;

const result = size.fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = CollectiblesProfileFramesExperiment.useIsProfileFramesEnabled(location);
  CollectiblesProfileFramesPurchaseExperimentDefault;
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === CollectiblesProfileFramesPurchaseExperiment.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};