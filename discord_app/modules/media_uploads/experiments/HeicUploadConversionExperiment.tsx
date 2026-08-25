// discord_app/modules/media_uploads/experiments/HeicUploadConversionExperiment.tsx
import set from "../../../../_runtime/00002_set.js";
import ApexExperiment from "../../experiments/apex/index.tsx";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-heic-upload-conversion", kind: "user", defaultConfig: { enabled: false, quality: 60 }, variations: { 0: { enabled: false, quality: 60 }, 1: { enabled: true, quality: 60, maxFileSizeBytes: 20971520 }, 2: { enabled: true, quality: 80, maxFileSizeBytes: 20971520 } } });
const result = set.fileFinishedImporting("modules/media_uploads/experiments/HeicUploadConversionExperiment.tsx");

export const HeicUploadConversionExperiment = apexExperiment;