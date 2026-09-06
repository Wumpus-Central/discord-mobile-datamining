// discord_app/modules/collectibles/experiments/ShopStandalonePdpMobileExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-08-shop-standalone-pdp-mobile",
  kind: "user",
  defaultConfig: { standalonePdpEnabled: false },
  variations: { 0: { standalonePdpEnabled: false }, 1: { standalonePdpEnabled: true } },
});
const result = size.fileFinishedImporting("modules/collectibles/experiments/ShopStandalonePdpMobileExperiment.tsx");

export default apexExperiment;
export const useIsShopStandalonePdpMobileEnabled = function useIsShopStandalonePdpMobileEnabled(
  product_details_action_sheet,
) {
  return apexExperiment.useConfig({ location: product_details_action_sheet }).standalonePdpEnabled;
};
