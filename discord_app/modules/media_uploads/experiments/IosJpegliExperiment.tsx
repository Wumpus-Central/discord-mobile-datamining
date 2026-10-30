// === Module 8228: IosJpegliExperiment ===

// Module 8228 (IosJpegliExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ name: "2025-11-enhanced-jpeg-encoding-on-ios", kind: "user", defaultConfig: { useJpegliEncoder: false }, variations: { 0: { useJpegliEncoder: false }, 1: { useJpegliEncoder: true } } });
const result = size.fileFinishedImporting("modules/media_uploads/experiments/IosJpegliExperiment.tsx");

export function getIosJpegliConfig(location) {
  return config.getConfig({ location: location.location });
}