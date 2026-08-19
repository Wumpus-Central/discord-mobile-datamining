// discord_app/modules/activities/ContentClassificationEmbeddedActivityFilterExperiment.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-06-content-classification-embedded-activity-filter", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = obj132.fileFinishedImporting("modules/activities/ContentClassificationEmbeddedActivityFilterExperiment.tsx");

export const ContentClassificationEmbeddedActivityFilterExperiment = apexExperiment;