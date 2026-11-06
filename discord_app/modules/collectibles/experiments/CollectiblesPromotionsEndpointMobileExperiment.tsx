// === Module 15250: CollectiblesPromotionsEndpointMobileExperiment ===

// Module 15250 (CollectiblesPromotionsEndpointMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-10-collectibles-promotion-endpoint-reference-mobile", kind: "user", defaultConfig: { useEndpoint: false }, variations: { 0: { useEndpoint: false }, 1: { useEndpoint: true } } });
const result = size.fileFinishedImporting("modules/collectibles/experiments/CollectiblesPromotionsEndpointMobileExperiment.tsx");

export default apexExperiment;
export function useCollectiblesPromotionEndpointReferenceMobile(CollectiblesShopV2) {
  return apexExperiment.useConfig({ location: CollectiblesShopV2 }).useEndpoint;
}