// === Module 8230: ManualReviewInconclusiveCopyExperiment ===

// Module 8230 (ManualReviewInconclusiveCopyExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-09-manual-review-inconclusive-copy", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/age_assurance/ManualReviewInconclusiveCopyExperiment.tsx");

export const useIsManualReviewInconclusiveCopyEnabled = function useIsManualReviewInconclusiveCopyEnabled(manual_review_decided_teen_modal) {
  return closure_0.useConfig({ location: manual_review_decided_teen_modal }).enabled;
};