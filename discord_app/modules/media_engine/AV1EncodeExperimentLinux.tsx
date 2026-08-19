// === Module 13166: getAV1EncodeExperimentLinuxConfig ===

// Module 13166 (getAV1EncodeExperimentLinuxConfig)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-06-av1-encode-linux", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/media_engine/AV1EncodeExperimentLinux.tsx");

export const getAV1EncodeExperimentLinuxConfig = function getAV1EncodeExperimentLinuxConfig(MediaEngineStore) {
  return config.getConfig({ location: MediaEngineStore });
};