// discord_app/modules/media_uploads/experiments/HeicUploadConversionExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-08-heic-upload-conversion",
  kind: "user",
  defaultConfig: { enabled: false, quality: 60 },
  variations: {
    0: { enabled: false, quality: 60 },
    1: { enabled: true, quality: 60, maxFileSizeBytes: 20971520 },
    2: { enabled: true, quality: 80, maxFileSizeBytes: 20971520 },
  },
};
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_uploads/experiments/HeicUploadConversionExperiment.tsx");

export const HeicUploadConversionExperiment = apexExperiment;
