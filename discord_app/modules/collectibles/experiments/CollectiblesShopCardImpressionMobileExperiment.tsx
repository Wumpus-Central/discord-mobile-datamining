// discord_app/modules/collectibles/experiments/CollectiblesShopCardImpressionMobileExperiment.tsx
import set from "../../../../_runtime/00002_set.js";
import ApexExperiment from "../../experiments/apex/index.tsx";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-shop-card-impression-mobile", kind: "user", defaultConfig: { enableShopCardImpression: false }, variations: { 0: { enableShopCardImpression: false }, 1: { enableShopCardImpression: true } } });
const result = set.fileFinishedImporting("modules/collectibles/experiments/CollectiblesShopCardImpressionMobileExperiment.tsx");

export default apexExperiment;
export const useIsShopCardImpressionMobileEnabled = function useIsShopCardImpressionMobileEnabled(CollectiblesShopCardV2) {
  return apexExperiment.useConfig({ location: CollectiblesShopCardV2 }).enableShopCardImpression;
};