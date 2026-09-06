// === Module 5172: HeicUploadConversionExperiment ===

// Module 5172 (HeicUploadConversionExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-heic-upload-conversion", kind: "user", defaultConfig: { enabled: false, quality: 60 }, variations: { 0: { enabled: false, quality: 60 }, 1: { enabled: true, quality: 60, maxFileSizeBytes: 20971520 }, 2: { enabled: true, quality: 80, maxFileSizeBytes: 20971520 } } });
const result = size.fileFinishedImporting("modules/media_uploads/experiments/HeicUploadConversionExperiment.tsx");

export const HeicUploadConversionExperiment = apexExperiment;