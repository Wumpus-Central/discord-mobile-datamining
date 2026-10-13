// discord_app/modules/user_affinities/VoiceUserAffinityExperiment.tsx
import c from "../../../_runtime/00576_c.js";
import ApexExperiment from "../experiments/apex/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2025-08-voice-user-affinity",
  defaultConfig: { enabled: false },
  variations: {
    0: { enabled: false, sortType: "Array" },
    1: { enabled: true, sortType: "vc_probability" },
    2: { enabled: true, sortType: "communication_probability" },
  },
});
const result = size.fileFinishedImporting("modules/user_affinities/VoiceUserAffinityExperiment.tsx");

export default apexExperiment;
export const getVoiceUserAffinitySortType = function getVoiceUserAffinitySortType(location) {
  return apexExperiment.getConfig({ location }).sortType;
};
export const useVoiceUserAffinitySortType = ReactCompilerGating.isReactCompilerEnabled()
  ? function useVoiceUserAffinitySortType(location) {
      const cResult = c.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return apexExperiment.useConfig(tmp2).sortType;
    }
  : function useVoiceUserAffinitySortType(location) {
      return apexExperiment.useConfig({ location }).sortType;
    };
