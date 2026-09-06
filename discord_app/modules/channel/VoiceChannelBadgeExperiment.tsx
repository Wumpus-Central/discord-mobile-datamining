// === Module 13183: VoiceChannelBadgeExperiment ===

// Module 13183 (VoiceChannelBadgeExperiment)
import ExperimentConstants from "ExperimentConstants" /* 4477 */;
import createExperiment from "module_4474" /* 4474 */;
import size from "module_2" /* 2 */;

const obj = { id: "2026-03_voice_badge", kind: "guild", commonTriggerPoint: ExperimentConstants.CommonTriggerPoints.VOICE_CALL, label: "Display Voice Channel Badge", defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 0, label: "Control", config: { enabled: false } }, { id: 1, label: "Show voice badges", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/channel/VoiceChannelBadgeExperiment.tsx");

export const VoiceChannelBadgeExperiment = experiment;
export const useVoiceChannelBadgeExperiment = function useVoiceChannelBadgeExperiment(guildId) {
  return experiment.useExperiment({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
};
export const getVoiceChannelBadgeExperiment = function getVoiceChannelBadgeExperiment(guildId) {
  return experiment.getCurrentConfig({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
};