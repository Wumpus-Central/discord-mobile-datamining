// discord_app/modules/collectibles/experiments/CollectiblesShopCardImpressionMobileExperiment.tsx
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-shop-card-impression-mobile", kind: "user", defaultConfig: { enableShopCardImpression: false }, variations: { 0: { enableShopCardImpression: false }, 1: { enableShopCardImpression: true } } });
const result = require("set").fileFinishedImporting("modules/collectibles/experiments/CollectiblesShopCardImpressionMobileExperiment.tsx");

export default apexExperiment;
export const useIsShopCardImpressionMobileEnabled = function useIsShopCardImpressionMobileEnabled(CollectiblesShopCardV2) {
  return apexExperiment.useConfig({ location: CollectiblesShopCardV2 }).enableShopCardImpression;
};