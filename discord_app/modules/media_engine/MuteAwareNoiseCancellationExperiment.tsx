// === Module 15806: MuteAwareNoiseCancellationExperiment ===

// Module 15806 (MuteAwareNoiseCancellationExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-08-mute-aware-noise-cancellation", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/media_engine/MuteAwareNoiseCancellationExperiment.tsx");

export function getMuteAwareNoiseCancellationConfig(location) {
  return config.getConfig({ location: location.location });
}