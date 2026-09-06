// === Module 8870: OneDayFractionalNitroExperiment ===

// Module 8870 (OneDayFractionalNitroExperiment)
import PremiumGroupExperimentDefault from "PremiumGroupExperiment" /* 8871 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-one-day-fractional-nitro", kind: "user", defaultConfig: false, variations: { 1: true } });
const result = size.fileFinishedImporting("modules/collectibles/experiments/OneDayFractionalNitroExperiment.tsx");

export default apexExperiment;
export const useOneDayFractionalNitroEnabled = function useOneDayFractionalNitroEnabled(product_card) {
  let obj = { location: product_card };
  obj = { location: product_card };
  const tmp = PremiumGroupExperimentDefault(obj);
  return apexExperiment.useConfig(obj) && !PremiumGroupExperimentDefault(obj);
};