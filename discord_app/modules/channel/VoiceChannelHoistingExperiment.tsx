// === Module 17417: VoiceChannelHoistingExperiment ===

// Module 17417 (VoiceChannelHoistingExperiment)
import ExperimentConstants from "ExperimentConstants" /* 4523 */;
import createExperiment from "module_4520" /* 4520 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", id: "2025-12_voice_channel_hoisting", label: "Voice Channel Hoisting", commonTriggerPoint: ExperimentConstants.CommonTriggerPoints.VOICE_CALL, defaultConfig: { enableWaveformIcon: false, enableHighlight: false }, treatments: null };
const items = [{ id: 1, label: "Both waveform and highlight", config: { enableWaveformIcon: true, enableHighlight: true } }, { id: 2, label: "Waveform icon only", config: { enableWaveformIcon: true, enableHighlight: false } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/channel/VoiceChannelHoistingExperiment.tsx");

export const VoiceChannelHoistingExperiment = experiment;
export const useVoiceChannelHoistingExperiment = function useVoiceChannelHoistingExperiment(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: false });
};