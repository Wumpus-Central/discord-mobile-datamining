// === Module 11581: CustomTypingIndicatorExperiment ===

// Module 11581 (CustomTypingIndicatorExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1440 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-07-custom-typing-indicator", defaultConfig: { canSet: false, canView: false, entryPoint: null }, variations: { 0: { canSet: false, canView: false, entryPoint: null }, 1: { canSet: true, canView: true, entryPoint: "settings" }, 2: { canSet: true, canView: true, entryPoint: "profile" }, 3: { canSet: false, canView: true, entryPoint: null } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
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
}) : ((location) => {
  const obj = { location };
  return apexExperiment.useConfig(obj);
});
const result = size.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorExperiment.tsx");

export const CustomTypingIndicatorExperiment = apexExperiment;
export const useCustomTypingIndicatorConfig = tmp3;
export const getCustomTypingIndicatorConfig = function getCustomTypingIndicatorConfig(location) {
  const obj = { location };
  return apexExperiment.getConfig(obj);
};