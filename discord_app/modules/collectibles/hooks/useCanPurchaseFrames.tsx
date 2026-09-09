// === Module 14659: useCanPurchaseFrames ===

// Module 14659 (useCanPurchaseFrames)
import CollectiblesProfileFramesExperiment from "CollectiblesProfileFramesExperiment" /* 8238 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/hooks/useCanPurchaseFrames.tsx");

export default function useCanPurchaseFrames(location) {
  return CollectiblesProfileFramesExperiment.useIsProfileFramesEnabled(location);
};
export const useCanViewProfileFramesInCollectiblesShop = function useCanViewProfileFramesInCollectiblesShop(UserProfileFrameEditButton) {
  return CollectiblesProfileFramesExperiment.useIsProfileFramesEnabled(UserProfileFrameEditButton);
};