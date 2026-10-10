// === Module 16244: AdTopicOptOutClientExperiment ===

// Module 16244 (AdTopicOptOutClientExperiment)
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-08-ad-topic-opt-out-client", defaultConfig: { enabled: false }, variations: null };
let obj2 = { 1: null, 2: { enabled: false }, 3: { enabled: true }, 4: { enabled: true }, 5: { enabled: true } };
obj2[5] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/ads/AdTopicOptOutClientExperiment.tsx");

export const AdTopicOptOutClientExperiment = apexExperiment;
export const useIsAdTopicOptOutClientEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsAdTopicOptOutClientEnabled() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "useIsAdTopicOptOutClientEnabled" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  return apexExperiment.useConfig(first).enabled;
}) : (function useIsAdTopicOptOutClientEnabled() {
  return apexExperiment.useConfig({ location: "useIsAdTopicOptOutClientEnabled" }).enabled;
});
export const isAdTopicOptOutClientEnabled = function isAdTopicOptOutClientEnabled() {
  return apexExperiment.getConfig({ location: "isAdTopicOptOutClientEnabled" }).enabled;
};