// === Module 13163: apexExperiment ===

// Module 13163 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-05-mobile-request-review-no-tti", kind: "user", defaultConfig: { skipTTICheck: false }, variations: { 0: { skipTTICheck: false }, 1: { skipTTICheck: true } } });
const result = set.fileFinishedImporting("modules/feedback/native/RequestReviewNoTTIExperiment.tsx");

export const RequestReviewNoTTIExperiment = apexExperiment;