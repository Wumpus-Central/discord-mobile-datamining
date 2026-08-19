// === Module 8665: useIsStageVoicePanelEnabled ===

// Module 8665 (useIsStageVoicePanelEnabled)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-stage-voice-panel", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = obj132.fileFinishedImporting("modules/stage_channels/StageVoicePanelExperiment.tsx");

export const useIsStageVoicePanelEnabled = function useIsStageVoicePanelEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const isStageVoicePanelEnabled = function isStageVoicePanelEnabled(stage_channel_action_creator_extras) {
  return closure_0.getConfig({ location: stage_channel_action_creator_extras }).enabled;
};