// === Module 5076: getMobileImageEncodingLadderConfig ===

// Module 5076 (getMobileImageEncodingLadderConfig)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-01-image-optimized-encoding-ladder", kind: "user", defaultConfig: { useImageEncodingLadder: false }, variations: { 0: { useImageEncodingLadder: false }, 1: { useImageEncodingLadder: true } } });
const result = set.fileFinishedImporting("modules/media_uploads/experiments/MobileImageEncodingLadderExperiment.tsx");

export const getMobileImageEncodingLadderConfig = function getMobileImageEncodingLadderConfig(location) {
  return config.getConfig({ location: location.location });
};