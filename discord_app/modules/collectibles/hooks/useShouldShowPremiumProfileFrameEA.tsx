// discord_app/modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = require("../experiments/CollectiblesProfileFramesExperiment.tsx") /* apexExperiment */.useIsProfileFramesEnabled(location);
  require("../experiments/CollectiblesProfileFramesPurchaseExperiment.tsx");
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === require("../experiments/CollectiblesProfileFramesPurchaseExperiment.tsx") /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};