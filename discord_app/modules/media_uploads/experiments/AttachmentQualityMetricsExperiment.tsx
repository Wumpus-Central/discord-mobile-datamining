// discord_app/modules/media_uploads/experiments/AttachmentQualityMetricsExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-04-attachment-quality-metrics",
  kind: "user",
  defaultConfig: { enableQualityMetrics: false, enableOriginDetection: false },
  variations: {
    0: { enableQualityMetrics: false, enableOriginDetection: false },
    1: { enableQualityMetrics: true, enableOriginDetection: true },
  },
});
const result = size.fileFinishedImporting("modules/media_uploads/experiments/AttachmentQualityMetricsExperiment.tsx");

export const AttachmentQualityMetricsExperiment = apexExperiment;
