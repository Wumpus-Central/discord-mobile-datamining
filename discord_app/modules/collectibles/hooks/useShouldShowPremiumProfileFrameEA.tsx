// === Module 12022: useShouldShowPremiumProfileFrameEA ===

// Module 12022 (useShouldShowPremiumProfileFrameEA)
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = require(8428) /* apexExperiment */.useIsProfileFramesEnabled(location);
  importDefault(8887);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === require(8887) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};