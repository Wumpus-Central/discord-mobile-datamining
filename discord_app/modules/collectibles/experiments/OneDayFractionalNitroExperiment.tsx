// === Module 8335: OneDayFractionalNitroExperiment ===

// Module 8335 (OneDayFractionalNitroExperiment)
import PremiumGroupExperimentDefault from "PremiumGroupExperiment" /* 8336 */;
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-one-day-fractional-nitro", kind: "user", defaultConfig: false, variations: { 1: true } });
const result = size.fileFinishedImporting("modules/collectibles/experiments/OneDayFractionalNitroExperiment.tsx");

export default apexExperiment;
export const useOneDayFractionalNitroEnabled = function useOneDayFractionalNitroEnabled(product_card) {
  const obj = { location: product_card };
  const obj2 = { location: product_card };
  const tmp = PremiumGroupExperimentDefault({ location: product_card });
  return apexExperiment.useConfig({ location: product_card }) && !PremiumGroupExperimentDefault({ location: product_card });
};