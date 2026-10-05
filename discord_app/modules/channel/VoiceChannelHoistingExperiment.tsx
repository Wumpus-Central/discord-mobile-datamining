// === Module 17479: VoiceChannelHoistingExperiment ===

// Module 17479 (VoiceChannelHoistingExperiment)
import react from "react" /* 576 */;
import ExperimentConstants from "ExperimentConstants" /* 4777 */;
import createExperiment from "module_4774" /* 4774 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let items;
const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
let obj = { kind: "guild", id: "2025-12_voice_channel_hoisting", label: "Voice Channel Hoisting", commonTriggerPoint: CommonTriggerPoints.VOICE_CALL, defaultConfig: { enableWaveformIcon: false, enableHighlight: false }, treatments: items };
items = [{ id: 1, label: "Both waveform and highlight", config: { enableWaveformIcon: true, enableHighlight: true } }, { id: 2, label: "Waveform icon only", config: { enableWaveformIcon: true, enableHighlight: false } }];
const experiment = createExperiment.createExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, location) => {
  const obj = react;
  const cResult = obj.c(4);
  if (cResult[0] === guildId) {
    let tmp2;
    let tmp4;
    if (cResult[1] === location) {
      tmp2 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { autoTrackExposure: false };
      cResult[3] = obj2;
      tmp4 = obj2;
    } else {
      tmp4 = cResult[3];
    }
    return experiment.useExperiment(tmp2, tmp4);
  }
  const obj3 = { guildId, location };
  cResult[0] = guildId;
  cResult[1] = location;
  cResult[2] = obj3;
  tmp2 = obj3;
}) : ((guildId, location) => {
  const obj = { guildId, location };
  return experiment.useExperiment(obj, { autoTrackExposure: false });
});
const result = size.fileFinishedImporting("modules/channel/VoiceChannelHoistingExperiment.tsx");

export const VoiceChannelHoistingExperiment = experiment;
export const useVoiceChannelHoistingExperiment = tmp3;