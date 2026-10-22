// === Module 4921: DefaultEmojisExperiment ===

// Module 4921 (DefaultEmojisExperiment)
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1455 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-default-emojis", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/emojis/default_emojis/DefaultEmojisExperiment.tsx");

export const DefaultEmojisExperiment = apexExperiment;
export const useDefaultEmojisEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useDefaultEmojisEnabled(location) {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return apexExperiment.useConfig(tmp2).enabled;
}) : (function useDefaultEmojisEnabled(location) {
  return apexExperiment.useConfig({ location }).enabled;
});