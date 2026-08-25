// === Module 13361: getAV1EncodeExperimentLinuxConfig ===

// Module 13361 (getAV1EncodeExperimentLinuxConfig)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-06-av1-encode-linux", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/AV1EncodeExperimentLinux.tsx");

export const getAV1EncodeExperimentLinuxConfig = function getAV1EncodeExperimentLinuxConfig(MediaEngineStore) {
  return config.getConfig({ location: MediaEngineStore });
};