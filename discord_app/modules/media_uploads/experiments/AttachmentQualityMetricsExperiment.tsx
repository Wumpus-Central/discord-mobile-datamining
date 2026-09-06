// === Module 5165: AttachmentQualityMetricsExperiment ===

// Module 5165 (AttachmentQualityMetricsExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-attachment-quality-metrics", kind: "user", defaultConfig: { enableQualityMetrics: false, enableOriginDetection: false }, variations: { 0: { enableQualityMetrics: false, enableOriginDetection: false }, 1: { enableQualityMetrics: true, enableOriginDetection: true } } });
const result = size.fileFinishedImporting("modules/media_uploads/experiments/AttachmentQualityMetricsExperiment.tsx");

export const AttachmentQualityMetricsExperiment = apexExperiment;