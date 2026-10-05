// discord_app/modules/activities/ContentClassificationEmbeddedActivityFilterExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  kind: "user",
  name: "2026-06-content-classification-embedded-activity-filter",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
};
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting(
  "modules/activities/ContentClassificationEmbeddedActivityFilterExperiment.tsx",
);

export const ContentClassificationEmbeddedActivityFilterExperiment = apexExperiment;
