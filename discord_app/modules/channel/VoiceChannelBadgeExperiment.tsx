// === Module 15353: VoiceChannelBadgeExperiment ===

// Module 15353 (VoiceChannelBadgeExperiment)
import ExperimentConstants from "ExperimentConstants" /* 5355 */;
import createExperiment from "module_5352" /* 5352 */;
import size from "module_2" /* 2 */;

const obj = { id: "2026-03_voice_badge", kind: "guild", commonTriggerPoint: ExperimentConstants.CommonTriggerPoints.VOICE_CALL, label: "Display Voice Channel Badge", defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 0, label: "Control", config: { enabled: false } }, { id: 1, label: "Show voice badges", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/channel/VoiceChannelBadgeExperiment.tsx");

export const VoiceChannelBadgeExperiment = experiment;
export function useVoiceChannelBadgeExperiment(guildId) {
  return experiment.useExperiment({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
}
export function getVoiceChannelBadgeExperiment(guildId) {
  return experiment.getCurrentConfig({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
}