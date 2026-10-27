// === Module 6038: CheckpointExperiments ===

// Module 6038 (CheckpointExperiments)
import c from "c" /* 576 */;
import ApexExperiment_mod from "ApexExperiment" /* 1452 */;
import "ReactCompilerGating";
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ApexExperiment = ApexExperiment_mod;
let closure_2 = ApexExperiment.createApexExperiment({ name: "2026-09-build-a-bear", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let ApexExperiment = ApexExperiment_mod;
let closure_3 = ApexExperiment.createApexExperiment({ name: "2026-09-build-a-bear-cards", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const obj = { name: "2026-09-build-a-bear", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let obj2 = { name: "2026-09-build-a-bear-cards", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsCheckpointEnabled(location) {
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
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointExperiments.tsx");

export const useIsCheckpointEnabled = tmp2;
export const getIsCheckpointEnabled = function getIsCheckpointEnabled(getCheckpointClickable) {
  return closure_2.getConfig({ location: getCheckpointClickable }).enabled;
};
export const useIsCheckpointCardEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsCheckpointCardEnabled(location) {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_3.useConfig(tmp2).enabled;
}) : (function useIsCheckpointCardEnabled(location) {
  return closure_3.useConfig({ location }).enabled;
});
export const getIsCheckpointCardEnabled = function getIsCheckpointCardEnabled(transformCheckpoint2026CardComponent) {
  return closure_3.getConfig({ location: transformCheckpoint2026CardComponent }).enabled;
};