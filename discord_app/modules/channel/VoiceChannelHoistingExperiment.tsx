// discord_app/modules/channel/VoiceChannelHoistingExperiment.tsx
import ExperimentConstants from "../experiments/ExperimentConstants.tsx";
import createExperiment from "../experiments/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  kind: "guild",
  id: "2025-12_voice_channel_hoisting",
  label: "Voice Channel Hoisting",
  commonTriggerPoint: ExperimentConstants.CommonTriggerPoints.VOICE_CALL,
  defaultConfig: { enableWaveformIcon: false, enableHighlight: false },
  treatments: null,
};
const items = [
  { id: 1, label: "Both waveform and highlight", config: { enableWaveformIcon: true, enableHighlight: true } },
  { id: 2, label: "Waveform icon only", config: { enableWaveformIcon: true, enableHighlight: false } },
];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/channel/VoiceChannelHoistingExperiment.tsx");

export const VoiceChannelHoistingExperiment = experiment;
export const useVoiceChannelHoistingExperiment = function useVoiceChannelHoistingExperiment(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: false });
};
