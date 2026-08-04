const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = require(8730) /* apexExperiment */.useIsProfileFramesEnabled(location);
  importDefault(9322);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === require(9322) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};