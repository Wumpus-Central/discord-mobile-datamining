// === Module 5934: TinyBroncoExperiment ===

// Module 5934 (TinyBroncoExperiment)
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ApexExperiment.createApexExperiment({ name: "2026-08-tiny-bronco", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/tiny_bronco/TinyBroncoExperiment.tsx");

export const useIsTinyBroncoEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsTinyBroncoEnabled(location) {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).enabled;
}) : (function useIsTinyBroncoEnabled(location) {
  return closure_2.useConfig({ location }).enabled;
});
export const isTinyBroncoEnabled = function isTinyBroncoEnabled(location) {
  return closure_2.getConfig({ location }).enabled;
};