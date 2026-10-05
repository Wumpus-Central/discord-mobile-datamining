// discord_app/modules/custom_typing_indicator/CustomTypingIndicatorExperiment.tsx
import react from "../../../_runtime/00576_react.js";
import ApexExperiment from "../experiments/apex/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  kind: "user",
  name: "2026-07-custom-typing-indicator",
  defaultConfig: { canSet: false, canView: false, entryPoint: null },
  variations: {
    0: { canSet: false, canView: false, entryPoint: null },
    1: { canSet: true, canView: true, entryPoint: "settings" },
    2: { canSet: true, canView: true, entryPoint: "profile" },
    3: { canSet: false, canView: true, entryPoint: null },
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
      return apexExperiment.useConfig(tmp2);
    }
  : (location) => {
      const obj = { location };
      return apexExperiment.useConfig(obj);
    };
const result = size.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorExperiment.tsx");

export const CustomTypingIndicatorExperiment = apexExperiment;
export const useCustomTypingIndicatorConfig = tmp3;
export const getCustomTypingIndicatorConfig = function getCustomTypingIndicatorConfig(location) {
  const obj = { location };
  return apexExperiment.getConfig(obj);
};
