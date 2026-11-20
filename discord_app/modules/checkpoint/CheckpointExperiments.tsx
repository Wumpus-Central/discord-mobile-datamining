// === Module 6221: CheckpointExperiments ===

// Module 6221 (CheckpointExperiments)
import ApexExperiment_mod from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let ApexExperiment = ApexExperiment_mod;
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-09-build-a-bear", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let ApexExperiment = ApexExperiment_mod;
let closure_1 = ApexExperiment.createApexExperiment({ name: "2026-09-build-a-bear-cards", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let ApexExperiment = ApexExperiment_mod;
let closure_2 = ApexExperiment.createApexExperiment({ name: "2026-10-build-a-bear-qa", kind: "user", defaultConfig: { mode: "off" }, variations: { 0: { mode: "off" }, 1: { mode: "all" }, 2: { mode: "reset_only" } } });
let ApexExperiment = ApexExperiment_mod;
let closure_3 = ApexExperiment.createApexExperiment({ name: "2026-11-checkpoint-intro", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let ApexExperiment = ApexExperiment_mod;
const config = ApexExperiment.createApexExperiment({ name: "2026-11-build-a-bear-images", kind: "user", defaultConfig: { canSaveCharacter: false }, variations: { 0: { canSaveCharacter: false }, 1: { canSaveCharacter: true } } });
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
export function getIsCheckpointCardEnabled(transformCheckpointCardToRowGeneratedComponent) {
  return closure_1.getConfig({ location: transformCheckpointCardToRowGeneratedComponent }).enabled;
}
export function useCheckpointQAMode(CheckpointProfileEntrypoint) {
  return closure_2.useConfig({ location: CheckpointProfileEntrypoint }).mode;
}
export function useIsCheckpointIntroEnabled(location) {
  return closure_3.useConfig({ location }).enabled;
}
export function isCheckpointCharacterSaveEnabled(location) {
  let canSaveCharacter = closure_1.getConfig({ location }).enabled;
  if (canSaveCharacter) {
    const obj2 = { location };
    canSaveCharacter = config.getConfig(obj2).canSaveCharacter;
  }
  return canSaveCharacter;
}