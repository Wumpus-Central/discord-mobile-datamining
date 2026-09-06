// discord_app/modules/collectibles/experiments/OneDayFractionalNitroExperiment.tsx
import PremiumGroupExperimentDefault from "../../premium/experiments/PremiumGroupExperiment.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-04-one-day-fractional-nitro",
  kind: "user",
  defaultConfig: false,
  variations: { 1: true },
});
const result = size.fileFinishedImporting("modules/collectibles/experiments/OneDayFractionalNitroExperiment.tsx");

export default apexExperiment;
export const useOneDayFractionalNitroEnabled = function useOneDayFractionalNitroEnabled(product_card) {
  let obj = { location: product_card };
  obj = { location: product_card };
  const tmp = PremiumGroupExperimentDefault(obj);
  return apexExperiment.useConfig(obj) && !PremiumGroupExperimentDefault(obj);
};
