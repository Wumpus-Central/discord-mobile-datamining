// discord_app/modules/collectibles/experiments/CollectiblesProfileFrameGiftingExperiment.tsx
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-profile-frame-gifting", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/collectibles/experiments/CollectiblesProfileFrameGiftingExperiment.tsx");

export default apexExperiment;
export const getIsProfileFrameGiftingEnabled = function getIsProfileFrameGiftingEnabled(isWishlistableCollectiblesProduct) {
  return apexExperiment.getConfig({ location: isWishlistableCollectiblesProduct }).enabled;
};
export const useIsProfileFrameGiftingEnabled = function useIsProfileFrameGiftingEnabled(CollectiblesWishlistItemCard) {
  return apexExperiment.useConfig({ location: CollectiblesWishlistItemCard }).enabled;
};