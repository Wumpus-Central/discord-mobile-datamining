// === Module 11995: useShouldShowPremiumProfileFrameEA ===

// Module 11995 (useShouldShowPremiumProfileFrameEA)
import obj132 from "obj132" /* 2 */;
import apexExperiment from "apexExperiment" /* 8956 */;
import apexExperiment2 from "apexExperiment" /* 9234 */;
import apexExperimentDefault from "apexExperiment" /* 9234 */;

const result = obj132.fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = apexExperiment.useIsProfileFramesEnabled(location);
  apexExperimentDefault;
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === apexExperiment2.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};