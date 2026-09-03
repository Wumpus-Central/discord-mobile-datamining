// === Module 4730: useIsStageVoicePanelEnabled ===

// Module 4730 (useIsStageVoicePanelEnabled)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-stage-voice-panel", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = set.fileFinishedImporting("modules/stage_channels/StageVoicePanelExperiment.tsx");

export const useIsStageVoicePanelEnabled = function useIsStageVoicePanelEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const isStageVoicePanelEnabled = function isStageVoicePanelEnabled(stage_channel_action_creator_extras) {
  return closure_0.getConfig({ location: stage_channel_action_creator_extras }).enabled;
};