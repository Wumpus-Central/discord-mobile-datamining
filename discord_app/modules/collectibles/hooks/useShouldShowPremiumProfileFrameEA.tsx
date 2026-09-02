// === Module 12794: useShouldShowPremiumProfileFrameEA ===

// Module 12794 (useShouldShowPremiumProfileFrameEA)
import set from "set" /* 2 */;
import apexExperiment from "apexExperiment" /* 8557 */;
import apexExperiment2 from "apexExperiment" /* 12755 */;
import apexExperimentDefault from "apexExperiment" /* 12755 */;

const result = set.fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = apexExperiment.useIsProfileFramesEnabled(location);
  apexExperimentDefault;
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === apexExperiment2.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};