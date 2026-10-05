// discord_app/modules/video-qoe/experiments/VideoQoEMetricsExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = {
  name: "2025-09-video-qoe-metrics-tracking",
  kind: "user",
  defaultConfig: { externalAnalyticsEnabled: false },
  variations: { 0: { externalAnalyticsEnabled: false }, 1: { externalAnalyticsEnabled: true } },
};
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/video-qoe/experiments/VideoQoEMetricsExperiment.tsx");

export const getVideoQoEMetricsConfig = function getVideoQoEMetricsConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
};
