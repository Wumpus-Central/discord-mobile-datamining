// discord_app/modules/feedback/native/RequestReviewNoTTIExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-05-mobile-request-review-no-tti",
  kind: "user",
  defaultConfig: { skipTTICheck: false },
  variations: { 0: { skipTTICheck: false }, 1: { skipTTICheck: true } },
});
const result = size.fileFinishedImporting("modules/feedback/native/RequestReviewNoTTIExperiment.tsx");

export const RequestReviewNoTTIExperiment = apexExperiment;
