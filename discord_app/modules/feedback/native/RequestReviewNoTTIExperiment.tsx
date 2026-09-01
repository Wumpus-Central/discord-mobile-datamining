// discord_app/modules/feedback/native/RequestReviewNoTTIExperiment.tsx
import set from "../../../../_runtime/00002_set.js";
import ApexExperiment from "../../experiments/apex/index.tsx";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-05-mobile-request-review-no-tti",
  kind: "user",
  defaultConfig: { skipTTICheck: false },
  variations: { 0: { skipTTICheck: false }, 1: { skipTTICheck: true } },
});
const result = set.fileFinishedImporting("modules/feedback/native/RequestReviewNoTTIExperiment.tsx");

export const RequestReviewNoTTIExperiment = apexExperiment;
