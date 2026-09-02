// === Module 14970: getVideoQoEMetricsConfig ===

// Module 14970 (getVideoQoEMetricsConfig)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2025-09-video-qoe-metrics-tracking", kind: "user", defaultConfig: { externalAnalyticsEnabled: false }, variations: { 0: { externalAnalyticsEnabled: false }, 1: { externalAnalyticsEnabled: true } } });
const result = set.fileFinishedImporting("modules/video-qoe/experiments/VideoQoEMetricsExperiment.tsx");

export const getVideoQoEMetricsConfig = function getVideoQoEMetricsConfig(location) {
  return config.getConfig({ location: location.location });
};