// === Module 7687: ManualReviewInconclusiveCopyExperiment ===

// Module 7687 (ManualReviewInconclusiveCopyExperiment)
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-09-manual-review-inconclusive-copy", defaultConfig: { enabled: false }, variations: null };
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/age_assurance/ManualReviewInconclusiveCopyExperiment.tsx");

export const useIsManualReviewInconclusiveCopyEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsManualReviewInconclusiveCopyEnabled(location) {
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
}) : (function useIsManualReviewInconclusiveCopyEnabled(location) {
  return closure_2.useConfig({ location }).enabled;
});