// discord_app/modules/user_affinities/VoiceUserAffinityExperiment.tsx
import react from "../../../_runtime/00576_react.js";
import ApexExperiment from "../experiments/apex/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  kind: "user",
  name: "2025-08-voice-user-affinity",
  defaultConfig: { enabled: false },
  variations: {
    0: { enabled: false, sortType: "a" },
    1: { enabled: true, sortType: "vc_probability" },
    2: { enabled: true, sortType: "communication_probability" },
  },
};
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      let tmp2;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return apexExperiment.useConfig(tmp2).sortType;
    }
  : (location) => {
      const obj = { location };
      return apexExperiment.useConfig(obj).sortType;
    };
const result = size.fileFinishedImporting("modules/user_affinities/VoiceUserAffinityExperiment.tsx");

export default apexExperiment;
export const getVoiceUserAffinitySortType = function getVoiceUserAffinitySortType(location) {
  const obj = { location };
  return apexExperiment.getConfig(obj).sortType;
};
export const useVoiceUserAffinitySortType = tmp3;
