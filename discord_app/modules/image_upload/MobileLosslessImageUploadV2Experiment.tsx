// === Module 4865: useMobileLosslessImageUploadV2Experiment ===

// Module 4865 (useMobileLosslessImageUploadV2Experiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2025-12-mobile-lossless-image-upload-v2", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = obj132.fileFinishedImporting("modules/image_upload/MobileLosslessImageUploadV2Experiment.tsx");

export const useMobileLosslessImageUploadV2Experiment = function useMobileLosslessImageUploadV2Experiment(location) {
  return config.getConfig({ location: location.location });
};