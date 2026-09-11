// === Module 16918: HangoutWindowExperiment ===

// Module 16918 (HangoutWindowExperiment)
import ExperimentConstants from "ExperimentConstants" /* 4523 */;
import createExperiment from "module_4520" /* 4520 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", id: "2026-02_hangout_window", label: "Hangout Window", defaultConfig: { enableHangoutWindow: false }, commonTriggerPoint: ExperimentConstants.CommonTriggerPoints.VOICE_CALL, treatments: null };
const items = [{ id: 1, label: "Enable Hangout Window", config: { enableHangoutWindow: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/hangout_window/HangoutWindowExperiment.tsx");

export const HangoutWindowExperiment = experiment;
export const useHangoutWindowExperiment = function useHangoutWindowExperiment(guildId) {
  return experiment.useExperiment({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
};
export const getHangoutWindowExperiment = function getHangoutWindowExperiment(guildId) {
  return experiment.getCurrentConfig({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
};