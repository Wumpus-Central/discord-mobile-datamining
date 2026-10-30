// === Module 5888: Avx512EntropyHistogramExperiment ===

// Module 5888 (Avx512EntropyHistogramExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ name: "2026-10-avx512-entropy-histogram", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/media_engine/Avx512EntropyHistogramExperiment.tsx");

export function getIsAvx512EntropyHistogramEnabled(RTCConnection) {
  return config.getConfig({ location: RTCConnection }).enabled;
}