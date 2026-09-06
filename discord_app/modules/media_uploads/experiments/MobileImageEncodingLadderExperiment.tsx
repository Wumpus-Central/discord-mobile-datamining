// === Module 5167: MobileImageEncodingLadderExperiment ===

// Module 5167 (MobileImageEncodingLadderExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ name: "2026-01-image-optimized-encoding-ladder", kind: "user", defaultConfig: { useImageEncodingLadder: false }, variations: { 0: { useImageEncodingLadder: false }, 1: { useImageEncodingLadder: true } } });
const result = size.fileFinishedImporting("modules/media_uploads/experiments/MobileImageEncodingLadderExperiment.tsx");

export const getMobileImageEncodingLadderConfig = function getMobileImageEncodingLadderConfig(location) {
  return config.getConfig({ location: location.location });
};