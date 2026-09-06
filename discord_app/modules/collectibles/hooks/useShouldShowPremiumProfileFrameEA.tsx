// discord_app/modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx
import CollectiblesProfileFramesExperiment from "../experiments/CollectiblesProfileFramesExperiment.tsx";
import CollectiblesProfileFramesPurchaseExperiment from "../experiments/CollectiblesProfileFramesPurchaseExperiment.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const CollectiblesProfileFramesPurchaseExperimentDefault = CollectiblesProfileFramesPurchaseExperiment;

const result = size.fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = CollectiblesProfileFramesExperiment.useIsProfileFramesEnabled(location);
  CollectiblesProfileFramesPurchaseExperimentDefault;
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled =
      tmp5 === CollectiblesProfileFramesPurchaseExperiment.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
}
