// discord_app/modules/feedback/native/RequestReviewNoTTIExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-05-mobile-request-review-no-tti",
  kind: "user",
  defaultConfig: { skipTTICheck: false },
  variations: { 0: { skipTTICheck: false }, 1: { skipTTICheck: true } },
};
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/feedback/native/RequestReviewNoTTIExperiment.tsx");

export const RequestReviewNoTTIExperiment = apexExperiment;
