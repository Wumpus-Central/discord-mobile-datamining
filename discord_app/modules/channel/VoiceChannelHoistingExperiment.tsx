// discord_app/modules/channel/VoiceChannelHoistingExperiment.tsx
import c from "../../../_runtime/00576_c.js";
import ExperimentConstants from "../experiments/ExperimentConstants.tsx";
import createExperiment from "../experiments/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
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
export const useVoiceChannelHoistingExperiment = ReactCompilerGating.isReactCompilerEnabled()
  ? function useVoiceChannelHoistingExperiment(guildId, location) {
      const cResult = c.c(4);
      if (cResult[0] === guildId) {
        if (cResult[1] === location) {
          let tmp2 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { autoTrackExposure: false };
          cResult[3] = obj2;
          let tmp4 = obj2;
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
    }
  : function useVoiceChannelHoistingExperiment(guildId, location) {
      return experiment.useExperiment({ guildId, location }, { autoTrackExposure: false });
    };
