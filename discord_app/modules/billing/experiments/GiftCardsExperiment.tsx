// === Module 7089: GiftCardsExperiment ===

// Module 7089 (GiftCardsExperiment)
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-02-gift-cards", kind: "user", defaultConfig: { enabled: false }, variations: null };
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/billing/experiments/GiftCardsExperiment.tsx");

export default apexExperiment;
export const useGiftCardsExperimentConfig = ReactCompilerGating.isReactCompilerEnabled() ? (function useGiftCardsExperimentConfig(cResult) {
  cResult = c.c(2);
  const config = apexExperiment.useConfig(cResult);
  if (cResult[0] !== config.enabled) {
    const obj2 = { enabled: config.enabled };
    cResult[0] = config.enabled;
    cResult[1] = obj2;
    let tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function useGiftCardsExperimentConfig(cResult) {
  return { enabled: apexExperiment.useConfig(cResult).enabled };
});