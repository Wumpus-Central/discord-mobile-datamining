// discord_app/modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import apexExperiment from "../experiments/CollectiblesProfileFramesExperiment.tsx";
import apexExperiment2 from "../experiments/CollectiblesProfileFramesPurchaseExperiment.tsx";
import apexExperimentDefault from "../experiments/CollectiblesProfileFramesPurchaseExperiment.tsx";

const result = obj132.fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = apexExperiment.useIsProfileFramesEnabled(location);
  apexExperimentDefault;
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === apexExperiment2.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};