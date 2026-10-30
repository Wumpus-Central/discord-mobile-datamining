// === Module 6083: CheckpointExperiments ===

// Module 6083 (CheckpointExperiments)
import ApexExperiment_mod from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let ApexExperiment = ApexExperiment_mod;
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-09-build-a-bear", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let ApexExperiment = ApexExperiment_mod;
let closure_1 = ApexExperiment.createApexExperiment({ name: "2026-09-build-a-bear-cards", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointExperiments.tsx");

export function useIsCheckpointEnabled(CheckpointProfileEntrypoint) {
  return closure_0.useConfig({ location: CheckpointProfileEntrypoint }).enabled;
}
export function getIsCheckpointEnabled(getCheckpointClickable) {
  return closure_0.getConfig({ location: getCheckpointClickable }).enabled;
}
export function useIsCheckpointCardEnabled(Checkpoint2026ForwardPreview) {
  return closure_1.useConfig({ location: Checkpoint2026ForwardPreview }).enabled;
}
export function getIsCheckpointCardEnabled(transformCheckpoint2026CardComponent) {
  return closure_1.getConfig({ location: transformCheckpoint2026CardComponent }).enabled;
}