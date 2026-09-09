// discord_app/modules/collectibles/hooks/useCanPurchaseFrames.tsx
import CollectiblesProfileFramesExperiment from "../experiments/CollectiblesProfileFramesExperiment.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/collectibles/hooks/useCanPurchaseFrames.tsx");

export default function useCanPurchaseFrames(location) {
  return CollectiblesProfileFramesExperiment.useIsProfileFramesEnabled(location);
}
export const useCanViewProfileFramesInCollectiblesShop = function useCanViewProfileFramesInCollectiblesShop(
  UserProfileFrameEditButton,
) {
  return CollectiblesProfileFramesExperiment.useIsProfileFramesEnabled(UserProfileFrameEditButton);
};
