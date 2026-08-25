// === Module 12369: useShouldShowPremiumProfileFrameEA ===

// Module 12369 (useShouldShowPremiumProfileFrameEA)
import set from "set" /* 2 */;
import apexExperiment from "apexExperiment" /* 8955 */;
import apexExperiment2 from "apexExperiment" /* 9550 */;
import apexExperimentDefault from "apexExperiment" /* 9550 */;

const result = set.fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = apexExperiment.useIsProfileFramesEnabled(location);
  apexExperimentDefault;
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === apexExperiment2.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};