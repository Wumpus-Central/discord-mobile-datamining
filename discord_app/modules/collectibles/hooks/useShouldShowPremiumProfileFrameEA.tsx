// === Module 12483: useShouldShowPremiumProfileFrameEA ===

// Module 12483 (useShouldShowPremiumProfileFrameEA)
import set from "set" /* 2 */;
import apexExperiment from "apexExperiment" /* 8476 */;
import apexExperiment2 from "apexExperiment" /* 12444 */;
import apexExperimentDefault from "apexExperiment" /* 12444 */;

const result = set.fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = apexExperiment.useIsProfileFramesEnabled(location);
  apexExperimentDefault;
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === apexExperiment2.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};