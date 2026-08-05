// discord_app/modules/collectibles/experiments/OneDayFractionalNitroExperiment.tsx
import ApexExperiment from "ApexExperiment";
import { usePremiumGroupExperiment } from "../../premium/experiments/PremiumGroupExperiment.tsx";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-one-day-fractional-nitro", kind: "user", defaultConfig: false, variations: { 1: true } });
const result = require("set").fileFinishedImporting("modules/collectibles/experiments/OneDayFractionalNitroExperiment.tsx");

export default apexExperiment;
export const useOneDayFractionalNitroEnabled = function useOneDayFractionalNitroEnabled(product_card) {
  let obj = { location: product_card };
  obj = { location: product_card };
  const tmp = usePremiumGroupExperiment(obj);
  return apexExperiment.useConfig(obj) && !usePremiumGroupExperiment(obj);
};