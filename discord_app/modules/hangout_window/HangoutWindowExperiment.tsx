// === Module 18793: HangoutWindowExperiment ===

// Module 18793 (HangoutWindowExperiment)
import ExperimentConstants from "ExperimentConstants" /* 5661 */;
import createExperiment from "module_6044" /* 6044 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", id: "2026-02_hangout_window", label: "Hangout Window", defaultConfig: { enableHangoutWindow: false }, commonTriggerPoint: ExperimentConstants.CommonTriggerPoints.VOICE_CALL, treatments: null };
const items = [{ id: 1, label: "Enable Hangout Window", config: { enableHangoutWindow: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/hangout_window/HangoutWindowExperiment.tsx");

export const HangoutWindowExperiment = experiment;
export function useHangoutWindowExperiment(guildId) {
  return experiment.useExperiment({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
}
export function getHangoutWindowExperiment(guildId) {
  return experiment.getCurrentConfig({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
}