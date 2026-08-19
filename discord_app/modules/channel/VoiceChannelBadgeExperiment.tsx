// discord_app/modules/channel/VoiceChannelBadgeExperiment.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ExperimentBuckets from "../experiments/ExperimentConstants.tsx";
import createExperiment from "../experiments/index.tsx";

const items = [{ id: 0, label: "Control", config: { enabled: false } }, { id: 1, label: "Show voice badges", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ id: "2026-03_voice_badge", kind: "guild", commonTriggerPoint: ExperimentBuckets.CommonTriggerPoints.VOICE_CALL, label: "Display Voice Channel Badge", defaultConfig: { enabled: false }, treatments: items });
const result = obj132.fileFinishedImporting("modules/channel/VoiceChannelBadgeExperiment.tsx");

export const VoiceChannelBadgeExperiment = experiment;
export const useVoiceChannelBadgeExperiment = function useVoiceChannelBadgeExperiment(guildId) {
  return experiment.useExperiment({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
};
export const getVoiceChannelBadgeExperiment = function getVoiceChannelBadgeExperiment(guildId) {
  return experiment.getCurrentConfig({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
};