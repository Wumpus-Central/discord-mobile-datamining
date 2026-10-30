// === Module 1895: ForceSdrEmojisStickersExperiment ===

// Module 1895 (ForceSdrEmojisStickersExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ kind: "user", name: "2025-10-force-sdr-emojis-stickers", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/image_upload/ForceSdrEmojisStickersExperiment.tsx");

export function getForceSdrEmojisStickersConfig(location) {
  return config.getConfig({ location: location.location });
}