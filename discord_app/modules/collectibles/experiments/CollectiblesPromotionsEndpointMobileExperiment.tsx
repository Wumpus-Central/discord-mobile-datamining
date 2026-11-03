// discord_app/modules/collectibles/experiments/CollectiblesPromotionsEndpointMobileExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-10-collectibles-promotion-endpoint-reference-mobile",
  kind: "user",
  defaultConfig: { useEndpoint: false },
  variations: { 0: { useEndpoint: false }, 1: { useEndpoint: true } },
});
const result = size.fileFinishedImporting(
  "modules/collectibles/experiments/CollectiblesPromotionsEndpointMobileExperiment.tsx",
);

export default apexExperiment;
export function useCollectiblesPromotionEndpointReferenceMobile(CollectiblesShopV2) {
  return apexExperiment.useConfig({ location: CollectiblesShopV2 }).useEndpoint;
}
