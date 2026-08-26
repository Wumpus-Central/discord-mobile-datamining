// === Module 16259: experiment ===

// Module 16259 (experiment)
import set from "set" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4358 */;
import createExperiment from "createExperiment" /* 4355 */;

const items = [{ id: 1, label: "Enable Hangout Window", config: { enableHangoutWindow: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2026-02_hangout_window", label: "Hangout Window", defaultConfig: { enableHangoutWindow: false }, commonTriggerPoint: ExperimentBuckets.CommonTriggerPoints.VOICE_CALL, treatments: items });
const obj = { kind: "guild", id: "2026-02_hangout_window", label: "Hangout Window", defaultConfig: { enableHangoutWindow: false }, commonTriggerPoint: ExperimentBuckets.CommonTriggerPoints.VOICE_CALL, treatments: items };
const result = set.fileFinishedImporting("modules/hangout_window/HangoutWindowExperiment.tsx");

export const HangoutWindowExperiment = experiment;
export const useHangoutWindowExperiment = function useHangoutWindowExperiment(guildId) {
  return experiment.useExperiment({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
};
export const getHangoutWindowExperiment = function getHangoutWindowExperiment(guildId) {
  return experiment.getCurrentConfig({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
};