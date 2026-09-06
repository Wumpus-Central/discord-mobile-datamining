// discord_app/modules/channel/VoiceChannelBadgeExperiment.tsx
import ExperimentConstants from "../experiments/ExperimentConstants.tsx";
import createExperiment from "../experiments/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  id: "2026-03_voice_badge",
  kind: "guild",
  commonTriggerPoint: ExperimentConstants.CommonTriggerPoints.VOICE_CALL,
  label: "Display Voice Channel Badge",
  defaultConfig: { enabled: false },
  treatments: null,
};
const items = [
  { id: 0, label: "Control", config: { enabled: false } },
  { id: 1, label: "Show voice badges", config: { enabled: true } },
];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/channel/VoiceChannelBadgeExperiment.tsx");

export const VoiceChannelBadgeExperiment = experiment;
export const useVoiceChannelBadgeExperiment = function useVoiceChannelBadgeExperiment(guildId) {
  return experiment.useExperiment(
    { guildId: guildId.guildId, location: guildId.location },
    { autoTrackExposure: true },
  );
};
export const getVoiceChannelBadgeExperiment = function getVoiceChannelBadgeExperiment(guildId) {
  return experiment.getCurrentConfig(
    { guildId: guildId.guildId, location: guildId.location },
    { autoTrackExposure: true },
  );
};
