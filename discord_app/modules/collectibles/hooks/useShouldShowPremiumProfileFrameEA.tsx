// discord_app/modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx
import { apexExperiment } from "../experiments/CollectiblesProfileFramesExperiment.tsx";
import { apexExperiment } from "../experiments/CollectiblesProfileFramesPurchaseExperiment.tsx";
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = apexExperiment.useIsProfileFramesEnabled(location);
  apexExperiment;
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === apexExperiment.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};