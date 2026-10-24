// === Module 6037: CheckpointExperiments ===

// Module 6037 (CheckpointExperiments)
import c from "c" /* 576 */;
import ApexExperiment_mod from "ApexExperiment" /* 1455 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ApexExperiment = ApexExperiment_mod;
let closure_2 = ApexExperiment.createApexExperiment({ name: "2026-09-build-a-bear", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let ApexExperiment = ApexExperiment_mod;
const config = ApexExperiment.createApexExperiment({ name: "2026-09-build-a-bear-cards", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointExperiments.tsx");

export const useIsCheckpointEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsCheckpointEnabled(location) {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).enabled;
}) : (function useIsCheckpointEnabled(location) {
  return closure_2.useConfig({ location }).enabled;
});
export const getIsCheckpointEnabled = function getIsCheckpointEnabled(getCheckpointClickable) {
  return closure_2.getConfig({ location: getCheckpointClickable }).enabled;
};
export const getIsCheckpointCardEnabled = function getIsCheckpointCardEnabled(transformCheckpoint2026CardComponent) {
  return config.getConfig({ location: transformCheckpoint2026CardComponent }).enabled;
};