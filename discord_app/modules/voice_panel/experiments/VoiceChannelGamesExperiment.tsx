// discord_app/modules/voice_panel/experiments/VoiceChannelGamesExperiment.tsx
import react from "../../../../_runtime/00576_react.js";
import apex_ApexExperimentDefault from "../../experiments/apex/ApexExperiment.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = {
  kind: "user",
  name: "2026-08-mobile-voice-channel-games",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
};
let tmp2 = apex_ApexExperimentDefault(obj);
let closure_2 = tmp2;
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
      return closure_2.useConfig(tmp2).enabled;
    }
  : (location) => {
      const obj = { location };
      return closure_2.useConfig(obj).enabled;
    };
const result = size.fileFinishedImporting("modules/voice_panel/experiments/VoiceChannelGamesExperiment.tsx");

export default tmp3;
export const VoiceChannelGamesExperiment = tmp2;
