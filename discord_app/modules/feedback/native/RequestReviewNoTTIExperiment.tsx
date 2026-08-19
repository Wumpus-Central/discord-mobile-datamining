// === Module 13246: apexExperiment ===

// Module 13246 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-05-mobile-request-review-no-tti", kind: "user", defaultConfig: { skipTTICheck: false }, variations: { 0: { skipTTICheck: false }, 1: { skipTTICheck: true } } });
const result = obj132.fileFinishedImporting("modules/feedback/native/RequestReviewNoTTIExperiment.tsx");

export const RequestReviewNoTTIExperiment = apexExperiment;