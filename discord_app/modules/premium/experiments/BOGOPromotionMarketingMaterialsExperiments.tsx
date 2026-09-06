// discord_app/modules/premium/experiments/BOGOPromotionMarketingMaterialsExperiments.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-03-bogo-promotion-marketing-materials-v2",
  kind: "user",
  defaultConfig: false,
  variations: { 1: true },
});
const result = size.fileFinishedImporting("modules/premium/experiments/BOGOPromotionMarketingMaterialsExperiments.tsx");

export default apexExperiment;
export const useBogoMarketingMaterialsEnabled = function useBogoMarketingMaterialsEnabled(location) {
  return apexExperiment.useConfig({ location });
};
export const getBogoMarketingMaterialsEnabled = function getBogoMarketingMaterialsEnabled(location) {
  return apexExperiment.getConfig({ location });
};
