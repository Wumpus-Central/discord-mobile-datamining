// === Module 12006: apexExperiment ===

// Module 12006 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import usePremiumGroupExperimentDefault from "usePremiumGroupExperiment" /* 12007 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-one-day-fractional-nitro", kind: "user", defaultConfig: false, variations: { 1: true } });
const result = obj132.fileFinishedImporting("modules/collectibles/experiments/OneDayFractionalNitroExperiment.tsx");

export default apexExperiment;
export const useOneDayFractionalNitroEnabled = function useOneDayFractionalNitroEnabled(product_card) {
  const obj = { location: product_card };
  const tmp = usePremiumGroupExperimentDefault(obj);
  return apexExperiment.useConfig(obj) && !usePremiumGroupExperimentDefault(obj);
};