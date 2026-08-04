// discord_app/modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = require(8097) /* apexExperiment */.useIsProfileFramesEnabled(location);
  importDefault(8710);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === require(8710) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};