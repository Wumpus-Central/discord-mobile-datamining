// discord_app/modules/video-qoe/experiments/VideoQoEMetricsExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const config = ApexExperiment.createApexExperiment({
  name: "2025-09-video-qoe-metrics-tracking",
  kind: "user",
  defaultConfig: { externalAnalyticsEnabled: false },
  variations: { 0: { externalAnalyticsEnabled: false }, 1: { externalAnalyticsEnabled: true } },
});
const result = size.fileFinishedImporting("modules/video-qoe/experiments/VideoQoEMetricsExperiment.tsx");

export const getVideoQoEMetricsConfig = function getVideoQoEMetricsConfig(location) {
  return config.getConfig({ location: location.location });
};
